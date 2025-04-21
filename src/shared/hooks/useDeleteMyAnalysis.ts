import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";

export const useDeleteMyAnalysis = (emotionId: number) => {
  return useMutation({
    mutationFn: async () => {
      await api.delete(`/emotion/user?emotionId=${emotionId}`);
    },
    onError: () => {
      alert("회원탈퇴에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
