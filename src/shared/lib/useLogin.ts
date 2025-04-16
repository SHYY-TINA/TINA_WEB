import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (code: string) => {
      const res = await api.get(`/auth/login?code=${code}`);
      const { accessToken, refreshToken } = res.data.tokenResponse;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return res.data;
    },
  });
};
