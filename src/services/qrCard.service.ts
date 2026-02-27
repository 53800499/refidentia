/** @format */

import { apiRequest, USE_MOCK } from "@/lib/api";
import { qrCodeData } from "@/mocks/Home/qrCodeData";
import { QrCard } from "@/types/QrCardType";

export const qrCardService = {
  getAll: async (): Promise<QrCard[]> => {
    try {
      if (USE_MOCK) return qrCodeData;
      return await apiRequest("/qr-cards");
    } catch (error) {
      console.warn("API unavailable → fallback to mock", error);
      return qrCodeData;
    }
  },
  getActive: async (): Promise<QrCard[]> => {
    try {
      if (USE_MOCK) return qrCodeData;
      return await apiRequest("/qr-cards?active=true");
    } catch (error) {
      console.warn("API unavailable → fallback to mock", error);
      return qrCodeData;
    }
  }
};
