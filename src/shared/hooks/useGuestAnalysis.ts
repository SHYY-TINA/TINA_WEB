import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import {
  GuestEmotionResquest,
  MyEmotionResponse,
  OtherEmotionResponse,
} from "../types/emotion";

type GuestTarget = "user" | "observer";
type GuestResponse = MyEmotionResponse | OtherEmotionResponse;

export const useGuestAnalysis = (target: GuestTarget) => {
  return useMutation<GuestResponse, Error, GuestEmotionResquest>({
    mutationFn: async ({
      userName,
      userMbti,
      partnerName,
      partnerMbti,
      file,
    }) => {
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("userMbti", userMbti);
      formData.append("partnerName", partnerName);
      formData.append("partnerMbti", partnerMbti);
      formData.append("file", file);

      const response = await api.post<GuestResponse>(
        `/guest/emotion/${target}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      return response.data;
    },
  });
};
