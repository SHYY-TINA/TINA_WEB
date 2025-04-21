import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

interface EmotionRequest {
  partnerName: string;
  partnerMbti: string;
  file: File;
}

interface Chat {
  text: string;
  meaning: string;
}

interface EmotionResponse {
  userNickname: string;
  partnerName: string;
  partnerMbti: string;
  charmScore: number;
  feedbackTitle: string;
  feedbackContent: string;
  tipTitle: string;
  tipContent: string;
  cautionTitle: string;
  cautionContent: string;
  chats: Chat[];
}

export const useOtherAnalysis = () => {
  return useMutation({
    mutationFn: async ({ partnerName, partnerMbti, file }: EmotionRequest) => {
      const formData = new FormData();
      formData.append("partnerName", partnerName);
      formData.append("partnerMbti", partnerMbti);
      formData.append("file", file);

      const res = await api.post<EmotionResponse>(
        "/emotion/observer",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return res.data;
    },
  });
};
