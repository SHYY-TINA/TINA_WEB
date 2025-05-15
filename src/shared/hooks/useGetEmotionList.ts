import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import { EmotionRecord } from "../types/emotion";

export const useGetEmotionList = (isOther: boolean) => {
  return useQuery<EmotionRecord[]>({
    queryKey: [isOther ? "userEmotions" : "myEmotions"],
    queryFn: async () => {
      const endpoint = isOther ? "/emotion/observer" : "/emotion/user";
      const response = await api.get(endpoint);
      return response.data;
    },
  });
};
