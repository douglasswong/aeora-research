import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CmeSingleStockFuturesArticle,
  cmeSingleStockFuturesKeyPoints,
  cmeSingleStockFuturesSources
} from "@/content/research/CmeSingleStockFutures";
import {
  WhyMarketsRallyDespiteBadNewsArticle,
  whyMarketsRallyKeyPoints,
  whyMarketsRallySources
} from "@/content/research/WhyMarketsRallyDespiteBadNews";
import { MarketsRallyCover } from "@/components/MarketsRallyCover";
import { ResearchArticleLayout } from "@/components/ResearchArticleLayout";
import { SawitEcoThermCover } from "@/components/SawitEcoThermCover";
import {
  SawitEcoThermArticle,
  sawitEcoThermKeyPoints,
  sawitEcoThermSources
} from "@/content/research/SawitEcoTherm";
import {
  WtiCrudeOilArticle,
  WtiCrudeOilCover,
  wtiCrudeOilKeyPoints,
  wtiCrudeOilSources
} from "@/content/research/WtiCrudeOilOutlook";
import {
  WarshFedQ42026OutlookArticle,
  warshFedQ42026KeyPoints,
  warshFedQ42026Sources
} from "@/content/research/WarshFedQ42026Outlook";
import { WarshFedQ42026Cover } from "@/components/WarshFedQ42026Cover";
import {
  getResearchArticle,
  RESEARCH_ARTICLES
} from "@/lib/research";
import { SITE_URL } from "@/lib/site";

type ResearchArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return RESEARCH_ARTICLES.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: ResearchArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  if (!article) {
    return {};
  }

  const socialImage =
    article.socialImage ?? "/research/cme-single-stock-futures-cover.png";
  const metadataTitle = article.seoTitle ?? article.title;
  const openGraphTitle = article.openGraphTitle ?? metadataTitle;
  const openGraphDescription = article.openGraphDescription ?? article.description;

  return {
    title: `${metadataTitle} | Aeora Research`,
    description: article.description,
    keywords: article.tags ? [...article.tags] : undefined,
    alternates: {
      canonical: `/research/${article.slug}`
    },
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      type: "article",
      url: `${SITE_URL}/research/${article.slug}`,
      siteName: "Aeora Research",
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: [article.author],
      section: article.category,
      images: [
        {
          url: socialImage,
          width: article.socialImageWidth ?? 1200,
          height: article.socialImageHeight ?? 630,
          alt: article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [socialImage]
    },
    robots: article.draft
      ? {
          index: false,
          follow: false,
          noarchive: true
        }
      : undefined
  };
}

export default async function ResearchArticlePage({
  params
}: ResearchArticlePageProps) {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  if (!article) {
    notFound();
  }

  const isMarketsRallyArticle = article.slug === "why-markets-rally-despite-bad-news";
  const isSawitEcoThermArticle =
    article.slug === "sawit-ecotherm-palm-oil-ai-data-centre-fcpo";
  const isWtiCrudeOilArticle =
    article.slug === "wti-crude-oil-outlook-2026-geopolitical-90-day-scenario";
  const isWarshFedArticle =
    article.slug === "warsh-fed-rate-hike-q4-2026-market-outlook";
  const keyPoints = isWarshFedArticle
    ? warshFedQ42026KeyPoints
    : isWtiCrudeOilArticle
    ? wtiCrudeOilKeyPoints
    : isSawitEcoThermArticle
    ? sawitEcoThermKeyPoints
    : isMarketsRallyArticle
      ? whyMarketsRallyKeyPoints
      : cmeSingleStockFuturesKeyPoints;
  const sources = isWarshFedArticle
    ? warshFedQ42026Sources
    : isWtiCrudeOilArticle
    ? wtiCrudeOilSources
    : isSawitEcoThermArticle
    ? sawitEcoThermSources
    : isMarketsRallyArticle
      ? whyMarketsRallySources
      : cmeSingleStockFuturesSources;
  const content = isWarshFedArticle ? (
    <WarshFedQ42026OutlookArticle />
  ) : isWtiCrudeOilArticle ? (
    <WtiCrudeOilArticle />
  ) : isSawitEcoThermArticle ? (
    <SawitEcoThermArticle />
  ) : isMarketsRallyArticle ? (
    <WhyMarketsRallyDespiteBadNewsArticle />
  ) : (
    <CmeSingleStockFuturesArticle />
  );
  const cover = isWarshFedArticle ? (
    <WarshFedQ42026Cover />
  ) : isWtiCrudeOilArticle ? (
    <WtiCrudeOilCover />
  ) : isSawitEcoThermArticle ? (
    <SawitEcoThermCover />
  ) : isMarketsRallyArticle ? (
    <MarketsRallyCover />
  ) : undefined;
  const headline = isWtiCrudeOilArticle ? (
    <span className="wti-article-headline">
      <mark>WTI Crude Oil</mark> at a Decision Zone: Is Another Geopolitical
      Repricing Cycle Forming?
    </span>
  ) : isSawitEcoThermArticle ? (
    <>
      <span className="research-article__headline-primary">
        Can Palm Oil Cool AI?
      </span>
      <span className="research-article__headline-secondary">
        What <mark>Sawit EcoTherm</mark> Could Mean for FCPO
      </span>
    </>
  ) : undefined;
  const socialImage =
    article.socialImage ?? "/research/cme-single-stock-futures-cover.png";

  const articleUrl = `${SITE_URL}/research/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: articleUrl,
    articleSection: article.category,
    image: `${SITE_URL}${socialImage}`,
    author: {
      "@type": "Organization",
      name: article.author,
      url: SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: "Aeora Research",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/aeora-logo-dark.png`
      }
    },
    citation: sources.map((source) => source.href)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
      <ResearchArticleLayout
        article={article}
        keyPoints={keyPoints}
        sources={sources}
        cover={cover}
        headline={headline}
      >
        {content}
      </ResearchArticleLayout>
    </>
  );
}
