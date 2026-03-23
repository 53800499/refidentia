/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

"use client";

import Cta from "@/components/cta";
import FeaturesHeader from "@/components/Features/FeaturesHeader";
import PricingContainer from "@/components/Pricing/PriceContainer";
import { useFeatures } from "@/hooks/useFeatures";

export default function Home() {
    const { features } = useFeatures();
  
  return (
    <>
      <PricingContainer />
      <FeaturesHeader features={features} />
      <Cta className="mb-20" />
    </>
  );
}
