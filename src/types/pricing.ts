/** @format */

export type FeatureStatus = "active" | "inactive";

export type Feature = {
  TEXT: string;
  STATUS: FeatureStatus;
};

export type Plan = {
  NAME: string;
  PRICE_MONTHLY: string;
  PRICE_YEARLY: string;
  DURATION_MONTHLY: string;
  DURATION_YEARLY: string;
  SUBTITLE: string;
  FEATURES: Feature[];
};
