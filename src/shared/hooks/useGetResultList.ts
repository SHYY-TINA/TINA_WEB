import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

export interface EmotionRecord {
  id: number;
  userNickname: string;
  partnerName: string;
  partnerMbti: string;
  charmScore: number;
}

export const useGetResultList = () => {
  return useQuery<EmotionRecord[]>({
    queryKey: ["userEmotions"],
    queryFn: async () => {
      const response = await api.get("/emotion/observer");
      return response.data;
    },
  });
};
