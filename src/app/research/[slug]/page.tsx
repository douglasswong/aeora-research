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
    article.slug === "why-markets-rally-despite-bad-news"
      ? "/research/why-markets-rally-despite-bad-news-aeora-research.webp"
      : "/research/cme-single-stock-futures-cover.png";

  return {
    title: `${article.title} | Aeora Research`,
    description: article.description,
    alternates: {
      canonical: `/research/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.description,
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
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [socialImage]
    }
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

  const isMarketsRallyArticle =
    article.slug === "why-markets-rally-despite-bad-news";
  const keyPoints = isMarketsRallyArticle
    ? whyMarketsRallyKeyPoints
    : cmeSingleStockFuturesKeyPoints;
  const sources = isMarketsRallyArticle
    ? whyMarketsRallySources
    : cmeSingleStockFuturesSources;
  const content = isMarketsRallyArticle ? (
    <WhyMarketsRallyDespiteBadNewsArticle />
  ) : (
    <CmeSingleStockFuturesArticle />
  );
  const cover = isMarketsRallyArticle ? <MarketsRallyCover /> : undefined;
  const socialImage = isMarketsRallyArticle
    ? "/research/why-markets-rally-despite-bad-news-aeora-research.webp"
    : "/research/cme-single-stock-futures-cover.png";

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
      >
        {content}
      </ResearchArticleLayout>
    </>
  );
}
