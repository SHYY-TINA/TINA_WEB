import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

export const useLogout = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
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
      localStorage.clear();
      window.location.href = "/";
    },
    onError: () => {
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
