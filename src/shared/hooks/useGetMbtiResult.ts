// useGetMbtiResult.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";

interface MbtiResult {
  firstMbti?: string;
  secondMbti?: string;
}

export const useGetMbtiResult = ({ firstMbti, secondMbti }: MbtiResult) => {
  return useQuery({
    queryKey: ["mbtiResult", firstMbti, secondMbti],
    queryFn: async () => {
      const res = await api.get(
        `/mbti/compatibility?firstMbti=${firstMbti}&secondMbti=${secondMbti}`,
      );
      return res.data;
    },
    enabled: !!firstMbti && !!secondMbti,
  });
};
