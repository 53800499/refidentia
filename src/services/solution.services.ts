/** @format */

import { apiRequest, USE_MOCK } from "@/lib/api";
import { solutions } from "@/mocks/Home/solutionData";
import { Solution } from "@/types/SolutionType";

export const solutionServices = {
  getAll: async (): Promise<Solution[]> => {
    try {
      if (USE_MOCK) {
        return solutions;
      }
      return await apiRequest("/solutions");
    } catch (error) {
      console.warn("API unavailable → fallback to mock");
      return solutions;
    }
  },
  getActive: async (): Promise<Solution[]> => {
    try {
      if (USE_MOCK) {
        return solutions;
      }
      return apiRequest("/solutions?active=true");
    } catch (error) {
      console.warn("API unavailable → fallback to mock");
      return solutions;
    }
  }
};
