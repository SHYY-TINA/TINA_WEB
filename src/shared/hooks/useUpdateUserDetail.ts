import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

interface UpdateUserDetailRequest {
  nickname: string;
  mbti: string;
}

export const useUpdateUserDetail = () => {
  const accessToken = localStorage.getItem("accessToken");

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
