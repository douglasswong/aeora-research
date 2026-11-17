import { createHmac } from "node:crypto";

export const ARTICLE_VIEW_DEDUPE_TTL_SECONDS = 30 * 60;
export const ARTICLE_VIEW_RATE_LIMIT_TTL_SECONDS = 10 * 60;
export const ARTICLE_VIEW_RATE_LIMIT = 24;

export type ArticleViewCounterConfig = Readonly<{
  redisUrl: string;
  redisToken: string;
  rateLimitSecret: string;
}>;

export type ArticleViewRecordResult = Readonly<{
  recorded: boolean;
  rateLimited: boolean;
  total: number | null;
}>;

type ArticleViewFetch = (input: string, init: RequestInit) => Promise<Response>;
type ArticleViewEnvironment = Readonly<Record<string, string | undefined>>;

type RedisPayload<T> = {
  result?: T;
  error?: string;
};

const BOT_USER_AGENT_PATTERN =
  /bot|crawler|spider|slurp|facebookexternalhit|headless|lighthouse|prerender|curl|wget/i;

const ARTICLE_VIEW_INCREMENT_LUA = `
local rate = redis.call('INCR', KEYS[3])
if rate == 1 then
  redis.call('EXPIRE', KEYS[3], ARGV[2])
end

if rate > tonumber(ARGV[3]) then
  return {0, -1, rate}
end

local claimed = redis.call('SET', KEYS[2], '1', 'NX', 'EX', ARGV[1])
if not claimed then
  local current = redis.call('GET', KEYS[1])
  return {0, tonumber(current) or 0, rate}
end

local total = redis.call('INCR', KEYS[1])
return {1, total, rate}
`;

function toCount(value: unknown) {
  const count =
    typeof value === "number"
      ? value
      : typeof value === "string"
      ? Number.parseInt(value, 10)
      : Number.NaN;

  return Number.isSafeInteger(count) && count >= 0 ? count : 0;
}

function toPositiveCount(value: unknown) {
  const count = toCount(value);

  return count > 0 ? count : null;
}

function getConfiguredRedisUrl(environment: ArticleViewEnvironment) {
  return environment.UPSTASH_REDIS_REST_URL ?? environment.KV_REST_API_URL;
}

function getConfiguredRedisToken(environment: ArticleViewEnvironment) {
  return environment.UPSTASH_REDIS_REST_TOKEN ?? environment.KV_REST_API_TOKEN;
}

/**
 * Deliberately permits counting only after an owner has enabled all production
 * prerequisites. Preview, local and incomplete environments remain inert.
 */
export function getArticleViewCounterConfig(
  environment: ArticleViewEnvironment = process.env
): ArticleViewCounterConfig | null {
  const redisUrl = getConfiguredRedisUrl(environment);
  const redisToken = getConfiguredRedisToken(environment);
  const rateLimitSecret = environment.ARTICLE_VIEW_COUNTER_RATE_LIMIT_SECRET;

  if (
    environment.VERCEL_ENV !== "production" ||
    environment.ARTICLE_VIEW_COUNTER_ENABLED !== "true" ||
    !redisUrl ||
    !redisToken ||
    !rateLimitSecret ||
    rateLimitSecret.length < 32
  ) {
    return null;
  }

  try {
    const normalizedUrl = new URL(redisUrl).toString().replace(/\/$/, "");

    return {
      redisUrl: normalizedUrl,
      redisToken,
      rateLimitSecret
    };
  } catch {
    return null;
  }
}

export function isLikelyAutomatedArticleView(userAgent: string | null) {
  return !userAgent || BOT_USER_AGENT_PATTERN.test(userAgent);
}

export function hashArticleViewVisitor(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function buildArticleViewKeys(viewId: string, visitorHash: string) {
  return {
    total: `aeora:research:views:v1:${viewId}`,
    dedupe: `aeora:research:views:dedupe:v1:${visitorHash}`,
    rate: `aeora:research:views:rate:v1:${visitorHash}`
  };
}

async function runRedisCommand<T>(
  config: ArticleViewCounterConfig,
  command: readonly (string | number)[],
  fetcher: ArticleViewFetch
) {
  const response = await fetcher(config.redisUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.redisToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Article-view storage request failed.");
  }

  const payload = (await response.json()) as RedisPayload<T>;

  if (payload.error || !("result" in payload)) {
    throw new Error("Article-view storage returned an invalid response.");
  }

  return payload.result as T;
}

export async function getArticleViewCounts(
  config: ArticleViewCounterConfig,
  viewIds: readonly string[],
  fetcher: ArticleViewFetch = fetch
) {
  const uniqueViewIds = [...new Set(viewIds)];

  if (uniqueViewIds.length === 0) {
    return {} as Record<string, number>;
  }

  const result = await runRedisCommand<unknown>(
    config,
    [
      "MGET",
      ...uniqueViewIds.map((viewId) => buildArticleViewKeys(viewId, "").total)
    ],
    fetcher
  );

  if (!Array.isArray(result)) {
    throw new Error("Article-view storage returned an unexpected count payload.");
  }

  return Object.fromEntries(
    uniqueViewIds.map((viewId, index) => [viewId, toCount(result[index])])
  );
}

export async function recordArticleView(
  config: ArticleViewCounterConfig,
  input: Readonly<{
    viewId: string;
    clientAddress: string;
    userAgent: string;
  }>,
  fetcher: ArticleViewFetch = fetch
): Promise<ArticleViewRecordResult> {
  const visitorHash = hashArticleViewVisitor(
    `${input.clientAddress}\u0000${input.userAgent}`,
    config.rateLimitSecret
  );
  const articleHash = hashArticleViewVisitor(
    `${input.viewId}\u0000${input.clientAddress}\u0000${input.userAgent}`,
    config.rateLimitSecret
  );
  const articleKeys = buildArticleViewKeys(input.viewId, articleHash);
  const visitorKeys = buildArticleViewKeys(input.viewId, visitorHash);
  const result = await runRedisCommand<unknown>(
    config,
    [
      "EVAL",
      ARTICLE_VIEW_INCREMENT_LUA,
      3,
      articleKeys.total,
      articleKeys.dedupe,
      visitorKeys.rate,
      ARTICLE_VIEW_DEDUPE_TTL_SECONDS,
      ARTICLE_VIEW_RATE_LIMIT_TTL_SECONDS,
      ARTICLE_VIEW_RATE_LIMIT
    ],
    fetcher
  );

  if (!Array.isArray(result) || result.length < 2) {
    throw new Error("Article-view storage returned an unexpected increment payload.");
  }

  const total = toPositiveCount(result[1]);

  return {
    recorded: result[0] === 1 || result[0] === "1",
    rateLimited: result[1] === -1 || result[1] === "-1",
    total
  };
}

export { ARTICLE_VIEW_INCREMENT_LUA };
