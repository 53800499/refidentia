/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */
"use client";
import { useCallback, useState } from "react";
import { Feature } from "@/types/FeatureType";
import { featureService } from "@/services/feature.service";

export function useFeatures() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await featureService.getAll();
      setFeatures(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch features");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchActive = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await featureService.getActive();
      setFeatures(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch active features");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    features,
    loading,
    error,
    fetchAll,
    fetchActive
  };
}
