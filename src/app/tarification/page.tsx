/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

"use client";

import Cta from "@/components/cta";
import FeaturesHeader from "@/components/Features/FeaturesHeader";
import Counter from "@/components/Home/Counter";
import Hero from "@/components/Pricing/Hero";
// import PricingContainer from "@/components/Pricing/PriceContainer";
import { useFeatures } from "@/hooks/useFeatures";

export default function Home() {
  const { features } = useFeatures();

  return (
    <>
      {/* <PricingContainer /> */}
      <Hero />
      <Counter />

      <FeaturesHeader features={features} />
      <Cta className="mb-20" />
    </>
  );
}
