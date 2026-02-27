/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

"use client";

import Cta from "@/components/cta";
import SolutionSection from "@/components/Home/Solution";
import { useSolutions } from "@/hooks/useSolutions";
import { useEffect } from "react";

export default function Home() {

  const { solutions, fetchActive: fetchActiveSolutions } = useSolutions();


  useEffect(() => {
    fetchActiveSolutions();
  }, []);

  return (
    <>
      <SolutionSection solutions={solutions} />
      <Cta />
    </>
  );
}
