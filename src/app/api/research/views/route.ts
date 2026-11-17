import { NextResponse } from "next/server";
import {
  getArticleViewCounterConfig,
  getArticleViewCounts,
  isLikelyAutomatedArticleView,
  recordArticleView
} from "@/lib/article-views";
import {
  getPublishedResearchArticle,
  type ResearchArticle
} from "@/lib/research";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BATCH_SIZE = 32;
const MAX_BODY_BYTES = 512;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

type ArticleViewPayload = {
  slug: string;
};

function json(
  body: Record<string, unknown>,
  status = 200,
  cacheControl = "no-store"
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": cacheControl
    }
  });
}

function getClientAddress(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const firstForwardedAddress = forwardedFor?.split(",")[0]?.trim();

  return firstForwardedAddress || request.headers.get("x-real-ip") || "unknown";
}

function isSameOriginRequest(request: Request) {
  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");

  if (origin) {
    return origin === requestOrigin;
  }

  const referer = request.headers.get("referer");

  if (!referer) {
    return false;
  }

  try {
    return new URL(referer).origin === requestOrigin;
  } catch {
    return false;
  }
}

function parseRequestedSlugs(request: Request) {
  const requestUrl = new URL(request.url);
  const requested = requestUrl.searchParams
    .getAll("slugs")
    .flatMap((value) => value.split(","));

  if (
    requested.length === 0 ||
    requested.length > MAX_BATCH_SIZE ||
    requested.some((slug) => !SLUG_PATTERN.test(slug))
  ) {
    return null;
  }

  return [...new Set(requested)];
}

async function parsePayload(request: Request): Promise<ArticleViewPayload | null> {
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (
    !contentType.includes("application/json") ||
    (!Number.isNaN(contentLength) && contentLength > MAX_BODY_BYTES)
  ) {
    return null;
  }

  const body = await request.text();

  if (body.length > MAX_BODY_BYTES) {
    return null;
  }

  try {
    const parsed = JSON.parse(body) as unknown;

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed) ||
      !("slug" in parsed) ||
      typeof parsed.slug !== "string" ||
      !SLUG_PATTERN.test(parsed.slug)
    ) {
      return null;
    }

    return { slug: parsed.slug };
  } catch {
    return null;
  }
}

function publishedArticlesFor(slugs: readonly string[]) {
  return slugs
    .map((slug) => getPublishedResearchArticle(slug))
    .filter((article): article is ResearchArticle => Boolean(article));
}

export async function GET(request: Request) {
  const requestedSlugs = parseRequestedSlugs(request);

  if (!requestedSlugs) {
    return json({ error: "Invalid article view request." }, 400);
  }

  const articles = publishedArticlesFor(requestedSlugs);
  const config = getArticleViewCounterConfig();

  if (!config) {
    return json({ enabled: false, counts: {} });
  }

  try {
    const countsByViewId = await getArticleViewCounts(
      config,
      articles.map((article) => article.viewId)
    );
    const counts = Object.fromEntries(
      articles.map((article) => [
        article.slug,
        countsByViewId[article.viewId] ?? 0
      ])
    );

    return json(
      { enabled: true, counts },
      200,
      "public, max-age=0, s-maxage=30, stale-while-revalidate=60"
    );
  } catch {
    return json({ enabled: false, counts: {}, unavailable: true }, 503);
  }
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return json({ error: "Cross-origin requests are not accepted." }, 403);
  }

  const payload = await parsePayload(request);

  if (!payload) {
    return json({ error: "Invalid article view payload." }, 400);
  }

  const article = getPublishedResearchArticle(payload.slug);

  if (!article) {
    return json({ error: "Article not found." }, 404);
  }

  const config = getArticleViewCounterConfig();

  if (!config) {
    return json({ enabled: false, recorded: false, total: null });
  }

  const userAgent = request.headers.get("user-agent") ?? "";

  if (isLikelyAutomatedArticleView(userAgent)) {
    return json({ enabled: true, recorded: false, total: null, ignored: true });
  }

  try {
    const result = await recordArticleView(config, {
      viewId: article.viewId,
      clientAddress: getClientAddress(request),
      userAgent
    });

    return json({
      enabled: true,
      recorded: result.recorded,
      rateLimited: result.rateLimited,
      total: result.total
    });
  } catch {
    return json({ enabled: false, recorded: false, total: null, unavailable: true }, 503);
  }
}
