/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

"use client";


import { useChallenges } from "@/hooks/useChallenges";
import { useSolutions } from "@/hooks/useSolutions";
import { useFeatures } from "@/hooks/useFeatures";
import { useQrCards } from "@/hooks/useQrCards";
import { sliderService } from "@/services/slider.service";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import FeaturesHeader from "@/components/Features/FeaturesHeader";

export default function Home() {
  /* ================= HOOKS EN HAUT ================= */

  const { solutions, fetchActive: fetchActiveSolutions } = useSolutions();
  const { features, fetchAll: fetchAllFeatures } = useFeatures();


  /* ================= FETCH CHALLENGES ================= */

  useEffect(() => {
    fetchAllFeatures();
  }, []);

  return (
    <>
      {/* <Breadcrumb
        pageName={CONTACT.SECTION?.KICKER || "Nous contacter"}
        description={CONTACT.SECTION?.DESCRIPTION || CONTACT.FORM.SUBTITLE}
      /> */}
      <FeaturesHeader features={features} />
    </>
  );
}
