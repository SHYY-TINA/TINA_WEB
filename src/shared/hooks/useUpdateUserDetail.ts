import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import { useAuthStore } from "@/shared/store/auth";

interface UpdateUserDetailRequest {
  nickname: string;
  mbti: string;
}

export const useUpdateUserDetail = () => {
  const { accessToken } = useAuthStore();

  return useMutation({
    mutationFn: async (body: UpdateUserDetailRequest) => {
      return await api.patch("/auth/detail", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  });
};
