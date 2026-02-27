/** @format */

import { apiRequest, USE_MOCK } from "@/lib/api";
import { challengesData } from "@/mocks/Home/challengesData";
import { Challenge } from "@/types/challenge";

export const challengeService = {
  getAll: async (): Promise<Challenge[]> => {
    return apiRequest("/challenges");
  },
  getActive: async (): Promise<Challenge[]> => {
    try {
      if (USE_MOCK) {
        return challengesData;
      }
      return apiRequest("/challenges?active=true");
    } catch (error) {
      console.warn("API unavailable → fallback to mock");
      return challengesData;
    }
  }
};
