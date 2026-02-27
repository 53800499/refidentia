/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */
"use client";
import { useCallback, useState } from "react";
import { Challenge } from "@/types/challenge";
import { challengeService } from "@/services/challenge.service";

export function useChallenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await challengeService.getAll();
      setChallenges(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch challenges");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchActive = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await challengeService.getActive();
      setChallenges(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch active challenges");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    challenges,
    loading,
    error,
    fetchAll,
    fetchActive
  };
}
