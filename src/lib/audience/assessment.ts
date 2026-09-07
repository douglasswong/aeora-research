import type { AssessmentAnswers } from "@/lib/audience/types";

export const ASSESSMENT_OPTIONS = {
  marketExperience: ["Less than a year", "1-2 years", "3-5 years", "5+ years"],
  markets: ["Forex", "Gold", "Indices", "Futures", "Options", "Crypto", "Stocks", "Other"],
  approach: [
    "No consistent strategy",
    "Technical setup-based",
    "Signal/community dependent",
    "Systematic trading plan",
    "Macro + technical",
    "Professional / institutional process"
  ],
  challenge: [
    "Consistency",
    "Risk management",
    "Psychology",
    "Overtrading",
    "Market context",
    "Strategy",
    "Execution",
    "Prop-firm performance",
    "Capital",
    "Other"
  ],
  reviewFrequency: ["Never", "Occasionally", "Monthly", "Weekly", "After every trading session"],
  riskLimits: ["No", "Sometimes", "Yes"],
  objectives: [
    "Improve consistency",
    "Pass prop evaluation",
    "Become a serious part-time trader",
    "Transition toward professional trading",
    "Manage larger capital",
    "Understand institutional markets",
    "Other"
  ],
  weeklyCommitment: ["<2 hours", "2-5 hours", "5-10 hours", "10+ hours"],
  educationHistory: ["No", "Yes - small courses", "Yes - multiple programmes", "Yes - professional mentoring"],
  investmentComfort: [
    "Below RM2,000",
    "RM2,000-RM5,000",
    "RM5,000-RM10,000",
    "RM10,000-RM20,000",
    "RM20,000+",
    "Prefer to discuss privately"
  ]
} as const;

export const EMPTY_ASSESSMENT: AssessmentAnswers = {
  marketExperience: "",
  markets: [],
  approach: "",
  challenge: "",
  reviewFrequency: "",
  riskLimits: "",
  objectives: [],
  weeklyCommitment: "",
  educationHistory: "",
  investmentComfort: "",
  contactPreference: "no",
  fullName: "",
  email: "",
  country: "",
  preferredLanguage: "",
  marketingConsent: false
};

export const COUNTRY_OPTIONS = ["Malaysia", "Singapore", "Brunei", "Indonesia", "Thailand", "Other"] as const;

export const LANGUAGE_OPTIONS = ["English", "Mandarin Chinese", "Malay", "Other"] as const;

export function isAssessmentComplete(answers: AssessmentAnswers) {
  return Boolean(
    answers.marketExperience &&
      answers.markets.length > 0 &&
      answers.markets.length <= 2 &&
      answers.approach &&
      answers.challenge &&
      answers.reviewFrequency &&
      answers.riskLimits &&
      answers.objectives.length > 0 &&
      answers.objectives.length <= 2 &&
      answers.weeklyCommitment &&
      answers.educationHistory
  );
}
