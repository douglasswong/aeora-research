export const PROSPECT_STATUSES = [
  "NEW",
  "RESEARCHED",
  "LOW_PRIORITY",
  "NURTURE",
  "QUALIFIED",
  "HIGH_PRIORITY",
  "CONTACT_DRAFTED",
  "CONTACT_APPROVED",
  "CONTACTED",
  "RESPONDED",
  "ASSESSMENT_SENT",
  "ASSESSMENT_COMPLETED",
  "CONSULTATION",
  "PROGRAMME_FIT",
  "ENROLLED",
  "NOT_INTERESTED",
  "DO_NOT_CONTACT"
] as const;

export type ProspectStatus = (typeof PROSPECT_STATUSES)[number];

export type AssessmentAnswers = {
  marketExperience: string;
  markets: string[];
  approach: string;
  challenge: string;
  reviewFrequency: string;
  riskLimits: string;
  objectives: string[];
  weeklyCommitment: string;
  educationHistory: string;
  investmentComfort: string;
  contactPreference: "yes" | "no";
  fullName: string;
  email: string;
  country: string;
  preferredLanguage: string;
  marketingConsent: boolean;
};

export type AudienceScores = {
  traderFit: number;
  intent: number;
  readiness: number;
  overall: number;
};

export type AssessmentCategory =
  | "FOUNDATION"
  | "DEVELOPING_TRADER"
  | "PROCESS_DRIVEN_TRADER"
  | "INSTITUTIONAL_TRANSITION_CANDIDATE"
  | "ADVANCED_PROFESSIONAL_TRACK";

export type AssessmentResult = {
  category: AssessmentCategory;
  scores: AudienceScores;
  strengths: string[];
  focusAreas: string[];
  feedback: string;
  recommendedNextStep: string;
};

export type ProspectSource = {
  platform: string;
  profileUrl?: string;
  sourceDate?: string;
  evidence: string;
};

export type ContentRecommendation = {
  title: string;
  href: string;
  reason: string;
  tags: string[];
};

export type ProspectAnalysis = {
  isTrader: "yes" | "no" | "unclear";
  markets: string[];
  experienceSignal: string;
  painPoints: string[];
  developmentIntent: string[];
  commercialIntent: string[];
  directOutreachAppropriate: boolean;
  doNotAssume: string[];
  recommendedNextStep: string;
  contentRecommendation: ContentRecommendation | null;
};

export type ProspectRecord = {
  id: string;
  displayName: string;
  publicHandle?: string;
  source: ProspectSource;
  country?: string;
  preferredLanguage?: string;
  tradingInterest: string[];
  experienceSignal: string;
  painPoints: string[];
  developmentIntent: string[];
  commercialIntent: string[];
  scores: AudienceScores;
  status: ProspectStatus;
  firstSeen: string;
  lastSeen: string;
  analysis: ProspectAnalysis;
  synthetic?: boolean;
};

export type AudienceDashboardSnapshot = {
  mode: "synthetic" | "live" | "database-not-configured";
  prospects: ProspectRecord[];
  captureEnabled: boolean;
  databaseConfigured: boolean;
};

export type SocialCommentImportRow = {
  name: string;
  handle: string;
  platform: string;
  comment: string;
  profileUrl: string;
  date: string;
  notes: string;
};

export const OUTREACH_AUTO_SEND = false;
export const OUTREACH_HUMAN_APPROVAL_REQUIRED = true;
