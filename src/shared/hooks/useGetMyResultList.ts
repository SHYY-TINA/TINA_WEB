import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

export interface MyEmotionRecord {
  id: number;
  userNickname: string;
  partnerName: string;
  partnerMbti: string;
  charmScore: number;
}

export const useGetMyResultList = () => {
  return useQuery<MyEmotionRecord[]>({
    queryKey: ["myEmotions"],
    queryFn: async () => {
      const response = await api.get("/emotion/user");
      return response.data;
    },
  });
};
