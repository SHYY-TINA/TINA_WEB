import { useAnalysis } from "@/shared/hooks/useAnalysis";
import { useGuestAnalysis } from "@/shared/hooks/useGuestAnalysis";
import { useGetAnalysisDetail } from "@/shared/hooks/useGetAnalysisDetail";

export function useAnalysisData(
  isOther: boolean,
  id: number,
  uploadedFile?: File,
  partnerName?: string,
  partnerMbti?: string,
  userName?: string,
  userMbti?: string,
) {
  const isGuest =
    !localStorage.getItem("accessToken") ||
    !localStorage.getItem("refreshToken");

  const guestMutation = useGuestAnalysis(isOther ? "observer" : "user");
  const observerMutation = useAnalysis("observer");
  const userMutation = useAnalysis("user");

  const detail = useGetAnalysisDetail(id, isOther);

  const isPending = isOther
    ? isGuest
      ? guestMutation.status === "pending"
      : observerMutation.status === "pending"
    : isGuest
    ? guestMutation.status === "pending"
    : userMutation.status === "pending";

  const emotionData =
    (isOther
      ? isGuest
        ? guestMutation.data
        : observerMutation.data
      : isGuest
      ? guestMutation.data
      : userMutation.data) ?? detail.data;

  const mutate = () => {
    if (!uploadedFile || !partnerName || !partnerMbti) return;

    if (isGuest) {
      if (!userName || !userMbti) {
        console.warn("게스트 요청에 필요한 userName 또는 userMbti가 없음");
        return;
      }
      guestMutation.mutate({
        userName,
        userMbti,
        partnerName,
        partnerMbti,
        file: uploadedFile,
      });
      return;
    }

    if (isOther) {
      observerMutation.mutate({ partnerName, partnerMbti, file: uploadedFile });
    } else {
      userMutation.mutate({ partnerName, partnerMbti, file: uploadedFile });
    }
  };

  return { emotionData, isPending, mutate };
}
