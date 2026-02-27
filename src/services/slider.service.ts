/** @format */

import { apiRequest, USE_MOCK } from "@/lib/api";
import { slides } from "@/mocks/Home/heroData";
import { SliderType } from "@/types/SliderType";

export const sliderService = {
  getAll: async (): Promise<SliderType[]> => {
    return apiRequest("/sliders");
  },

  getActive: async (): Promise<SliderType[]> => {
    try {
      if (USE_MOCK) {
        return slides;
      }

      return await apiRequest("/sliders?active=true");
    } catch (error) {
      console.warn("API unavailable → fallback to mock");
      return slides;
    }
  },

  getById: async (id: string): Promise<SliderType> => {
    return apiRequest(`/sliders/${id}`);
  }
};
