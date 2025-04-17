import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import { useAuthStore } from "../store/auth";

export const useUserBasicInfo = () => {
  const { accessToken } = useAuthStore();

  return useQuery({
    queryKey: ["user-basic-info"],
    queryFn: async () => {
      const res = await api.get("/user/basic-info", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    },
    enabled: !!accessToken,
  });
};
