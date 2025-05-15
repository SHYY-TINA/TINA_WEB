import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";

export const useDeleteAnalysis = (emotionId: number, isOther: boolean) => {
  return useMutation({
    mutationFn: async () => {
      const endpoint = isOther
        ? `/emotion/observer?emotionId=${emotionId}`
        : `/emotion/user?emotionId=${emotionId}`;
      await api.delete(endpoint);
    },
    onError: () => {
      alert("삭제에 실패했습니다.");
    },
  });
};
