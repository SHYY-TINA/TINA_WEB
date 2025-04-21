import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

export interface ChatItem {
  text: string;
  meaning: string;
}

export interface ObserverDetail {
  userNickname: string;
  partnerName: string;
  partnerMbti: string;
  charmScore: number;
  feedbackTitle: string;
  feedbackContent: string;
  charmPointTitle: string;
  charmPointContent: string;
  chats: ChatItem[];
}

export const useGetMyAnalysisDetail = (emotionId: number, isOther: boolean) => {
  return useQuery<ObserverDetail>({
    queryKey: ["observerDetail", emotionId],
    queryFn: async () => {
      const response = await api.get(`/emotion/user/{emotionId}`);
      return response.data;
    },
    enabled: !isOther && !!emotionId,
  });
};
