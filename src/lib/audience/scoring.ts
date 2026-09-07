import { recommendContent } from "@/lib/audience/content";
import type {
  AssessmentAnswers,
  AssessmentCategory,
  AssessmentResult,
  AudienceScores,
  ProspectAnalysis,
  ProspectStatus,
  SocialCommentImportRow
} from "@/lib/audience/types";

const clampScore = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

function experienceValue(value: string) {
  return {
    "Less than 6 months": 3,
    "6-12 months": 8,
    "Less than a year": 8,
    "1-2 years": 14,
    "2-5 years": 18,
    "3-5 years": 18,
    "5+ years": 20
  }[value] ?? 0;
}

function categoryFor(score: number): AssessmentCategory {
  if (score < 35) return "FOUNDATION";
  if (score < 55) return "DEVELOPING_TRADER";
  if (score < 70) return "PROCESS_DRIVEN_TRADER";
  if (score < 85) return "INSTITUTIONAL_TRANSITION_CANDIDATE";
  return "ADVANCED_PROFESSIONAL_TRACK";
}

function categoryLabel(category: AssessmentCategory) {
  return category.replaceAll("_", " ");
}

export function scoreAssessment(answers: AssessmentAnswers): AssessmentResult {
  const relevantMarkets = answers.markets.filter((market) => market !== "Other");
  const institutionalObjective = answers.objectives.some((objective) =>
    ["Transition toward professional trading", "Understand institutional markets", "Pass prop evaluation", "Manage larger capital"].includes(objective)
  );
  const propEvaluationObjective = answers.objectives.includes("Pass prop evaluation");
  const propPerformanceChallenge = answers.challenge === "Prop-firm performance";
  const processApproach = ["Systematic trading plan", "Macro + technical", "Professional / institutional process"].includes(answers.approach);
  const structuredReview = ["Weekly", "After every trading session"].includes(answers.reviewFrequency);
  const commitment = { "<2 hours": 2, "2-5 hours": 6, "5-10 hours": 14, "10+ hours": 20 }[answers.weeklyCommitment] ?? 0;
  const education = { "No": 0, "Yes - small courses": 5, "Yes - multiple programmes": 9, "Yes - professional mentoring": 12 }[answers.educationHistory] ?? 0;
  const explicitInvestment = {
    "Below RM2,000": 2,
    "RM2,000-RM5,000": 6,
    "RM5,000-RM10,000": 11,
    "RM10,000-RM20,000": 16,
    "RM20,000+": 20,
    "Prefer to discuss privately": 10
  }[answers.investmentComfort] ?? 0;

  const traderFit = clampScore(
    Math.min(25, relevantMarkets.length * 6 + (answers.approach !== "No consistent strategy" ? 6 : 0)) +
      experienceValue(answers.marketExperience) +
      Math.min(10, relevantMarkets.length * 3) +
      (institutionalObjective ? 25 : processApproach ? 18 : 8) +
      (answers.riskLimits === "Yes" ? 20 : answers.riskLimits === "Sometimes" ? 12 : 5) +
      (propEvaluationObjective ? 12 : 0) +
      (propPerformanceChallenge ? 6 : 0)
  );

  const intent = clampScore(
    25 +
      (answers.challenge ? 10 : 0) +
      (institutionalObjective ? 20 : 8) +
      (processApproach ? 12 : 4) +
      (answers.contactPreference === "yes" ? 18 : 0) +
      (answers.marketingConsent ? 10 : 0)
  );

  const readiness = clampScore(
    experienceValue(answers.marketExperience) +
      (processApproach ? 15 : 6) +
      (answers.challenge ? 15 : 0) +
      commitment +
      (structuredReview ? 10 : answers.reviewFrequency === "Monthly" ? 6 : 2) +
      Math.min(20, education + explicitInvestment)
  );

  const scores: AudienceScores = {
    traderFit,
    intent,
    readiness,
    overall: clampScore(traderFit * 0.4 + intent * 0.4 + readiness * 0.2)
  };
  const category = categoryFor(scores.overall);
  const strengths = [
    ...(experienceValue(answers.marketExperience) >= 14 ? ["Established market involvement"] : []),
    ...(processApproach ? ["A structured trading approach"] : []),
    ...(institutionalObjective ? ["Clear interest in professional market practice"] : []),
    ...(commitment >= 14 ? ["Meaningful weekly development commitment"] : [])
  ];
  const focusAreas = [
    ...(answers.riskLimits !== "Yes" ? ["Written risk limits and review"] : []),
    ...(!structuredReview ? ["A regular performance-review routine"] : []),
    ...(answers.approach === "Signal/community dependent" ? ["Building an independent decision process"] : []),
    ...(answers.challenge === "Overtrading" || answers.challenge === "Psychology" ? ["Execution discipline under pressure"] : [])
  ];
  const feedback =
    strengths.length > 0
      ? `Your strongest area is ${strengths[0].toLowerCase()}. ${focusAreas[0] ? `The next useful area to strengthen is ${focusAreas[0].toLowerCase()}.` : "The next step is to keep converting that experience into a repeatable process."}`
      : "Your answers point to an early-stage process. A clearer routine for preparation, risk and review is usually the most productive place to begin.";

  return {
    category,
    scores,
    strengths: strengths.slice(0, 3),
    focusAreas: focusAreas.slice(0, 3),
    feedback,
    recommendedNextStep:
      category === "FOUNDATION"
        ? "Start by defining one market, one risk limit and one weekly review routine."
        : `Explore Aeora Trader Development with a focus on ${categoryLabel(category).toLowerCase()}.`
  };
}

const MARKET_KEYWORDS: Record<string, string> = {
  forex: "Forex",
  fx: "Forex",
  xau: "Gold",
  gold: "Gold",
  nas100: "Indices",
  index: "Indices",
  futures: "Futures",
  fcpo: "FCPO",
  crypto: "Crypto",
  bitcoin: "Crypto",
  prop: "Prop trading",
  funded: "Prop trading",
  cfd: "CFDs"
};

export function analyseImportedComment(row: SocialCommentImportRow): ProspectAnalysis {
  const comment = `${row.comment} ${row.notes}`.toLowerCase();
  const markets = [...new Set(Object.entries(MARKET_KEYWORDS).filter(([keyword]) => comment.includes(keyword)).map(([, label]) => label))];
  const painPoints = [
    ["risk", "risk management"],
    ["overtrad", "overtrading"],
    ["inconsistent", "inconsistent execution"],
    ["losing", "losses / consistency"],
    ["psychology", "trading psychology"],
    ["signal", "signal dependency"],
    ["challenge", "prop-firm performance"]
  ].filter(([keyword]) => comment.includes(keyword)).map(([, label]) => label);
  const developmentIntent = [
    ["institutional", "institutional process"],
    ["professional", "professional trading development"],
    ["mentor", "mentorship interest"],
    ["course", "education interest"],
    ["learn", "learning intent"],
    ["macro", "macro research interest"],
    ["market structure", "market structure interest"]
  ].filter(([keyword]) => comment.includes(keyword)).map(([, label]) => label);
  const commercialIntent = [
    ["fee", "pricing question"],
    ["price", "pricing question"],
    ["join", "programme interest"],
    ["intake", "programme intake interest"],
    ["guide", "guidebook interest"],
    ["webinar", "webinar interest"]
  ].filter(([keyword]) => comment.includes(keyword)).map(([, label]) => label);
  const negativeOnly = /scam|pump call|guaranteed signal/.test(comment) && markets.length === 0;
  const isTrader = negativeOnly ? "no" : markets.length > 0 || painPoints.length > 0 ? "yes" : "unclear";
  const recommendation = recommendContent(painPoints, markets, developmentIntent);

  return {
    isTrader,
    markets,
    experienceSignal: /years?|been trading|traded since/.test(comment) ? "Experience mentioned in the supplied comment" : "No experience duration stated",
    painPoints,
    developmentIntent,
    commercialIntent,
    directOutreachAppropriate: isTrader === "yes" && (painPoints.length > 0 || commercialIntent.length > 0),
    doNotAssume: [
      "Financial capacity or wealth",
      "Trading performance or profitability",
      "Language preference unless explicitly provided",
      "Any personal characteristics beyond the supplied information"
    ],
    recommendedNextStep:
      isTrader === "no"
        ? "Do not pursue. Keep only if a future first-party interaction establishes genuine trading interest."
        : commercialIntent.length > 0
          ? "Prepare a human-reviewed response with the most relevant educational resource."
          : painPoints.length > 0
            ? "Share value first through the recommended research note; do not pitch a programme immediately."
            : "Add to a human review queue before any outreach.",
    contentRecommendation: recommendation
  };
}

export function scoreImportedComment(row: SocialCommentImportRow) {
  const analysis = analyseImportedComment(row);
  const text = `${row.comment} ${row.notes}`.toLowerCase();
  const explicitExperience = /\b(\d+\+?\s*(years?|yrs?)|months?)\b/.test(text);
  const processSignals = analysis.developmentIntent.length;
  const painSignals = analysis.painPoints.length;
  const commercialSignals = analysis.commercialIntent.length;
  const traderFit = clampScore(
    (analysis.isTrader === "yes" ? 28 : analysis.isTrader === "unclear" ? 8 : 0) +
      Math.min(16, analysis.markets.length * 8) +
      (explicitExperience ? 18 : 5) +
      Math.min(24, processSignals * 8) +
      Math.min(14, painSignals * 5)
  );
  const intent = clampScore(
    Math.min(20, analysis.markets.length * 7) +
      Math.min(28, painSignals * 10) +
      Math.min(28, processSignals * 9) +
      Math.min(24, commercialSignals * 12)
  );
  const readiness = clampScore(
    (explicitExperience ? 18 : 4) +
      Math.min(25, processSignals * 10) +
      Math.min(18, painSignals * 6) +
      (analysis.isTrader === "yes" ? 16 : 0)
  );
  const scores: AudienceScores = {
    traderFit,
    intent,
    readiness,
    overall: clampScore(traderFit * 0.4 + intent * 0.4 + readiness * 0.2)
  };

  return { analysis, scores, status: prospectStatusForScore(scores.overall) };
}

export function prospectStatusForScore(score: number): ProspectStatus {
  if (score < 40) return "LOW_PRIORITY";
  if (score < 60) return "NURTURE";
  if (score < 75) return "QUALIFIED";
  return "HIGH_PRIORITY";
}
