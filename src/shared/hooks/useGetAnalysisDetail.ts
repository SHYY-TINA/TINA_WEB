import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import {
  MyEmotionResponse,
  OtherEmotionResponse,
} from "@/shared/types/emotion";

export const useGetAnalysisDetail = (emotionId: number, isOther: boolean) => {
  return useQuery<MyEmotionResponse | OtherEmotionResponse>({
    queryKey: [isOther ? "observerDetail" : "myDetail", emotionId],
    queryFn: async () => {
      const url = isOther
        ? `/emotion/observer/${emotionId}`
        : `/emotion/user/${emotionId}`;
      const response = await api.get(url);
      return response.data;
    },
    enabled: !!emotionId,
  });
};
