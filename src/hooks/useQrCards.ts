/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */
"use client";
import { useCallback, useState } from "react";
import { QrCard } from "@/types/QrCardType";
import { qrCardService } from "@/services/qrCard.service";

export function useQrCards() {
  const [items, setItems] = useState<QrCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await qrCardService.getAll();
      setItems(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch qr cards");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchActive = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await qrCardService.getActive();
      setItems(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch active qr cards");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    items,
    loading,
    error,
    fetchAll,
    fetchActive
  };
}
