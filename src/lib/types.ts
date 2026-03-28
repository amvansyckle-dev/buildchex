export interface Builder {
  id: string;
  name: string;
  llc?: string;
  county: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BuilderAggregate {
  builder: Builder;
  overallRating: number;
  reviewCount: number;
  wouldHireAgainPercentage: number;
  averageDelay: number;
  averageCostOverrun: number;
  topIssues: string[];
}

export interface Review {
  id: string;
  builderId: string;
  projectType: string;
  costRange: string;
  county: string;
  rating: number;
  issues: string[];
  wouldHireAgain: "yes" | "no" | "unsure";
  comment: string;
  positiveHighlights?: string;
  approved: boolean;
  aiModeration?: {
    status: "pending" | "approved" | "flagged";
    flags?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewFormData {
  builderName: string;
  projectType: string;
  costRange: string;
  county: string;
  rating: number;
  issues: string[];
  wouldHireAgain: "yes" | "no" | "unsure";
  comment: string;
  positiveHighlights?: string;
  consentChecked: boolean;
}

export interface AISignals {
  sentiment: "positive" | "neutral" | "negative";
  confidence: number;
  flags: string[];
  issuesDetected: string[];
}
