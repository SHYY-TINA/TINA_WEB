import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth";
import { api } from "../lib/axios";

export const useUserDelete = () => {
  const { accessToken, clear } = useAuthStore();
  return useMutation({
    mutationFn: async () => {
      await api.delete("/auth/quit", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      clear();
      localStorage.clear();
      window.location.href = "/";
    },
    onError: () => {
      alert("회원탈퇴에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
