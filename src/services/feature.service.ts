/** @format */

import { apiRequest, USE_MOCK } from "@/lib/api";
import { featuresData, featuresDataALL } from "@/mocks/Home/featuresData";
import { Feature } from "@/types/FeatureType";

export const featureService = {
  getAll: async (): Promise<Feature[]> => {
    try {
      if (USE_MOCK) {
        return featuresDataALL;
      }
      return await apiRequest("/features");
    } catch (error) {
      console.warn("API unavailable → fallback to mock", error);
      return featuresDataALL;
    }
  },

  getActive: async (): Promise<Feature[]> => {
    try {
      if (USE_MOCK) {
        return featuresData;
      }
      return await apiRequest("/features?active=true");
    } catch (error) {
      console.warn("API unavailable → fallback to mock", error);
      return featuresData;
    }
  }
};
