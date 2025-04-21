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
  charmPointTitle: string;
  charmPointContent: string;
  chats: Chat[];
}

export const useMyAnalysis = () => {
  return useMutation({
    mutationFn: async ({ partnerName, partnerMbti, file }: EmotionRequest) => {
      const formData = new FormData();
      formData.append("partnerName", partnerName);
      formData.append("partnerMbti", partnerMbti);
      formData.append("file", file);

      const res = await api.post<EmotionResponse>("/emotion/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
  });
};
