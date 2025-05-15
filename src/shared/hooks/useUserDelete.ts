import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { useUserInfoStore } from "../store/user"; 

export const useUserDelete = () => {
  const clearUserInfo = useUserInfoStore((state) => state.clearUserInfo);

  return useMutation({
    mutationFn: async () => {
      const accessToken = localStorage.getItem("accessToken");
      await api.delete("/auth/quit", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      localStorage.clear();
      clearUserInfo();
      window.location.href = "/";
    },
    onError: () => {
      alert("회원탈퇴에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
