/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

"use client";

import Cta from "@/components/cta";
import Blogs from "@/components/Home/blogs";
import Challenges from "@/components/Home/Challenge";
import Counter from "@/components/Home/Counter";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import QRCardSection from "@/components/Home/QRCard";
import SolutionSection from "@/components/Home/Solution";
import Testimonial from "@/components/Home/testimonial";

import { useChallenges } from "@/hooks/useChallenges";
import { useSolutions } from "@/hooks/useSolutions";
import { useFeatures } from "@/hooks/useFeatures";
import { useQrCards } from "@/hooks/useQrCards";
import { sliderService } from "@/services/slider.service";
import { useEffect, useState } from "react";

export default function Home() {
  /* ================= HOOKS EN HAUT ================= */

  const { challenges: apiChallenges, error, fetchActive } = useChallenges();
  const { solutions, fetchActive: fetchActiveSolutions } = useSolutions();
  const { features, fetchActive: fetchActiveFeatures } = useFeatures();
  const { items: qrItems, fetchActive: fetchActiveQr } = useQrCards();

  const [sliders, setSliders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH SLIDERS ================= */

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        setLoading(true);
        const data = await sliderService.getActive();
        setSliders(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  /* ================= FETCH CHALLENGES ================= */

  useEffect(() => {
    fetchActive();
    fetchActiveSolutions();
    fetchActiveFeatures();
    fetchActiveQr();
  }, []);

  if (error) {
    console.error("Error fetching challenges:", error);
  }

  return (
    <>
      <Hero sliders={sliders} />
      <Counter />
      <Challenges challenges={apiChallenges} />
      <SolutionSection solutions={solutions} />
      <Features features={features} />
      <QRCardSection items={qrItems} />
      <Testimonial />
      <Pricing />
      <Cta />
      <Blogs />
    </>
  );
}
