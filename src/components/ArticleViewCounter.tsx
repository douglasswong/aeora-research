"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from "react";

type ViewCounts = Record<string, number>;

type ViewCountResponse = {
  enabled?: unknown;
  counts?: unknown;
  total?: unknown;
};

const ArticleViewCountsContext = createContext<ViewCounts>({});
const QUALIFIED_READING_DELAY_MS = 8_000;

function isPositiveViewCount(value: unknown): value is number {
  return Number.isSafeInteger(value) && typeof value === "number" && value > 0;
}

function getViewCount(value: unknown) {
  return isPositiveViewCount(value) ? value : null;
}

function readCounts(payload: ViewCountResponse) {
  if (!payload.enabled || !payload.counts || typeof payload.counts !== "object") {
    return {};
  }

  return Object.fromEntries(
    Object.entries(payload.counts as Record<string, unknown>).flatMap(
      ([slug, count]) => {
        const validCount = getViewCount(count);

        return validCount ? [[slug, validCount]] : [];
      }
    )
  );
}

async function parseViewResponse(response: Response) {
  try {
    return (await response.json()) as ViewCountResponse;
  } catch {
    return {} as ViewCountResponse;
  }
}

function formatVisibleViewCount(count: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: count < 10_000 ? 1 : 0
  }).format(count);
}

function formatVisibleViewLabel(count: number) {
  return `${formatVisibleViewCount(count)} ${count === 1 ? "view" : "views"}`;
}

function ArticleViewIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M2.5 12s3.4-5.5 9.5-5.5S21.5 12 21.5 12 18.1 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

type ArticleViewCountProps = {
  count: number | null;
  className?: string;
};

function ArticleViewCount({ count, className }: ArticleViewCountProps) {
  if (!count) {
    return null;
  }

  const exactCount = new Intl.NumberFormat("en-MY").format(count);

  return (
    <span
      aria-label={`${exactCount} qualified article views`}
      className={["article-view-count", className].filter(Boolean).join(" ")}
      title="Qualified article views"
    >
      <ArticleViewIcon />
      <span aria-hidden="true">{formatVisibleViewLabel(count)}</span>
    </span>
  );
}

type ArticleViewCountsProviderProps = {
  slugs: readonly string[];
  children: ReactNode;
};

/** Loads all Research-index counts in one request instead of per-card requests. */
export function ArticleViewCountsProvider({
  slugs,
  children
}: ArticleViewCountsProviderProps) {
  const requestKey = useMemo(
    () => [...new Set(slugs)].sort().join(","),
    [slugs]
  );
  const [counts, setCounts] = useState<ViewCounts>({});

  useEffect(() => {
    if (!requestKey) {
      return;
    }

    const controller = new AbortController();

    void (async () => {
      try {
        const response = await fetch(
          `/api/research/views?slugs=${encodeURIComponent(requestKey)}`,
          { signal: controller.signal }
        );

        if (!response.ok || controller.signal.aborted) {
          return;
        }

        const payload = await parseViewResponse(response);

        if (!controller.signal.aborted) {
          setCounts(readCounts(payload));
        }
      } catch {
        // Counts are supplementary; a storage or network issue should be silent.
      }
    })();

    return () => controller.abort();
  }, [requestKey]);

  return (
    <ArticleViewCountsContext.Provider value={counts}>
      {children}
    </ArticleViewCountsContext.Provider>
  );
}

type ResearchViewCountProps = {
  slug: string;
  className?: string;
};

export function ResearchViewCount({ slug, className }: ResearchViewCountProps) {
  const counts = useContext(ArticleViewCountsContext);

  return <ArticleViewCount className={className} count={counts[slug] ?? null} />;
}

type ArticleViewCounterProps = {
  slug: string;
  viewId: string;
};

export function ArticleViewCounter({ slug, viewId }: ArticleViewCounterProps) {
  const [countState, setCountState] = useState<{
    slug: string;
    count: number | null;
  }>({ slug: "", count: null });
  const requestAttempted = useRef(false);
  const count = countState.slug === slug ? countState.count : null;

  useEffect(() => {
    const controller = new AbortController();

    void (async () => {
      try {
        const response = await fetch(
          `/api/research/views?slugs=${encodeURIComponent(slug)}`,
          { signal: controller.signal }
        );

        if (!response.ok || controller.signal.aborted) {
          return;
        }

        const payload = await parseViewResponse(response);
        const nextCount = getViewCount(
          payload.counts && typeof payload.counts === "object"
            ? (payload.counts as Record<string, unknown>)[slug]
            : null
        );

        if (!controller.signal.aborted && nextCount) {
          setCountState({ slug, count: nextCount });
        }
      } catch {
        // Counts are supplemental. Do not interrupt reading when they are unavailable.
      }
    })();

    return () => controller.abort();
  }, [slug]);

  useEffect(() => {
    const sessionKey = `aeora:research-qualified-view:v1:${viewId}`;
    let timer: number | undefined;
    let mounted = true;

    requestAttempted.current = false;

    try {
      if (window.sessionStorage.getItem(sessionKey)) {
        return;
      }
    } catch {
      // A restrictive browser setting still allows a single guarded server request.
    }

    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer);
        timer = undefined;
      }
    };

    const recordQualifiedView = async () => {
      if (requestAttempted.current || !mounted) {
        return;
      }

      requestAttempted.current = true;

      try {
        const response = await fetch("/api/research/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ slug })
        });
        const payload = await parseViewResponse(response);

        if (payload.enabled) {
          try {
            window.sessionStorage.setItem(sessionKey, "1");
          } catch {
            // The server-side dedupe key remains the fallback when storage is blocked.
          }
        }

        const nextCount = getViewCount(payload.total);

        if (mounted && response.ok && nextCount) {
          setCountState({ slug, count: nextCount });
        }
      } catch {
        // A failed counter call is intentionally not retried during the same read.
      }
    };

    const scheduleQualifiedView = () => {
      clearTimer();

      if (document.visibilityState !== "visible" || !document.hasFocus()) {
        return;
      }

      timer = window.setTimeout(recordQualifiedView, QUALIFIED_READING_DELAY_MS);
    };

    const handleVisibilityChange = () => scheduleQualifiedView();

    scheduleQualifiedView();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", scheduleQualifiedView);
    window.addEventListener("blur", clearTimer);

    return () => {
      mounted = false;
      clearTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", scheduleQualifiedView);
      window.removeEventListener("blur", clearTimer);
    };
  }, [slug, viewId]);

  return <ArticleViewCount count={count} />;
}
