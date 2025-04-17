import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import { useAuthStore } from "@/shared/store/auth";

export const useLogout = () => {
  const { accessToken, refreshToken, clear } = useAuthStore();
  return useMutation({
    mutationFn: async () => {
      await api.post(
        "/auth/logout",
        { refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    },
    onSuccess: () => {
      clear();
      localStorage.clear();
      window.location.href = "/";
    },
    onError: (err) => {
      console.error("로그아웃 실패:", err);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
