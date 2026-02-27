/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */
"use client";
import { useCallback, useState } from "react";
import { Solution } from "@/types/SolutionType";
import { solutionServices } from "@/services/solution.services";

export function useSolutions() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await solutionServices.getAll();
      setSolutions(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch solutions");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchActive = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await solutionServices.getActive();
      setSolutions(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch active solutions");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    solutions,
    loading,
    error,
    fetchAll,
    fetchActive
  };
}
