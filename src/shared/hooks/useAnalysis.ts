import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import {
  EmotionRequest,
  OtherEmotionResponse,
  MyEmotionResponse,
} from "../types/emotion";

type AnalysisType = "user" | "observer";

type ResponseType<T extends AnalysisType> = T extends "user"
  ? MyEmotionResponse
  : OtherEmotionResponse;

export function useAnalysis<T extends AnalysisType>(type: T) {
  return useMutation<ResponseType<T>, Error, EmotionRequest>({
    mutationFn: async ({ partnerName, partnerMbti, file }) => {
      const formData = new FormData();
      formData.append("partnerName", partnerName);
      formData.append("partnerMbti", partnerMbti);
      formData.append("file", file);

      const endpoint = type === "user" ? "/emotion/user" : "/emotion/observer";

      const response = await api.post<ResponseType<T>>(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data;
    },
  });
}
