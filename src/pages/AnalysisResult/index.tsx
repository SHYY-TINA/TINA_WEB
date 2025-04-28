import * as S from "./style";
import LeftArrow from "@/assets/icons/leftArrow";
import Arrow from "@/assets/icons/arrow";
import Heart from "@/assets/icons/heart";
import { ChatBox } from "@/components/ChatBox";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserBasicInfo } from "@/shared/hooks/useUserBasicInfo";
import { useEffect, useRef } from "react";
import { useOtherAnalysis } from "@/shared/hooks/useOtherAnalysis";
import { useMyAnalysis } from "@/shared/hooks/useMyAnalysis";
import LoadingPage from "@/components/LoadingPage";
import html2canvas from "html2canvas";

import {
  MyEmotionResponse,
  OtherEmotionResponse,
} from "@/shared/types/emotion";
import { useGetAnalysisDetail } from "@/shared/hooks/useGetAnalysisDetail";

function hasCharmPointContent(
  data: unknown,
): data is { charmPointTitle: string; charmPointContent: string[] } {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Partial<MyEmotionResponse>;
  return (
    typeof obj.charmPointTitle === "string" &&
    Array.isArray(obj.charmPointContent)
  );
}

function hasTipContent(data: unknown): data is OtherEmotionResponse {
  if (typeof data !== "object" || data === null) return false;

  const obj = data as Partial<OtherEmotionResponse>;

  return (
    Array.isArray(obj.tipContent) &&
    Array.isArray(obj.cautionContent) &&
    typeof obj.tipTitle === "string" &&
    typeof obj.cautionTitle === "string"
  );
}

const AnalysisResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOther = location.state?.isOther ?? false;
  const uploadedFile = location.state?.uploadedFile;
  const partnerName = location.state?.partnerName ?? "";
  const partnerMbti = location.state?.partnerMbti ?? "";
  const emotionId = location.state?.id ?? 0;
  const { data: userData } = useUserBasicInfo();
  const nickname = userData?.nickname ?? "홍길동";
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSaveAsImage = async () => {
    if (!resultRef.current) return;

    const element = resultRef.current!;
    const originalHeight = element.style.height;

    element.style.height = `${element.scrollHeight}px`;

    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
    });

    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "analysis_result.png";
    link.click();

    element.style.height = originalHeight;
  };

  const goBack = () => navigate("/home");

  const { data: emotionDetailData } = useGetAnalysisDetail(emotionId, isOther);

  const otherMutation = useOtherAnalysis();
  const userMutation = useMyAnalysis();

  const isPending = isOther
    ? otherMutation.status === "pending"
    : userMutation.status === "pending";

  useEffect(() => {
    if (uploadedFile && partnerName && partnerMbti) {
      if (isOther) {
        otherMutation.mutate({ partnerName, partnerMbti, file: uploadedFile });
      } else {
        userMutation.mutate({ partnerName, partnerMbti, file: uploadedFile });
      }
    }
  }, [uploadedFile, partnerName, partnerMbti, isOther]);

  if (isPending) {
    return <LoadingPage />;
  }

  const emotionData =
    (isOther ? otherMutation.data : userMutation.data) ?? emotionDetailData;
  console.log("emotionData.chat:", emotionData?.chat);
  return (
    <S.Layout ref={resultRef}>
      <S.Header>
        <S.HighHeader>
          <div style={{ position: "absolute", left: 0 }} onClick={goBack}>
            <LeftArrow />
          </div>
          <S.FromContainer>
            {isOther ? (
              <>
                {emotionData?.partnerName}
                <Arrow />
                {nickname}
              </>
            ) : (
              <>
                {nickname}
                <Arrow />
                {emotionData?.partnerName}
              </>
            )}
          </S.FromContainer>
        </S.HighHeader>
        <S.LowHeader>
          <S.HeartContainer>
            <Heart />
            <span>{emotionData?.charmScore ?? 0}</span>%
          </S.HeartContainer>
        </S.LowHeader>
      </S.Header>

      <S.ChatContainer>
        <S.ChatBoxContainer>
          <S.ChatHeaderText>
            <span>속마음이 궁금한 말풍선을</span>
            <span>클릭해 보세요!</span>
          </S.ChatHeaderText>
          <S.Chat isOther={isOther}>
            {emotionData?.chat?.map((chat, idx) => (
              <ChatBox
                key={idx}
                chatData={chat.text}
                date=""
                isFirstChat={idx === 0}
                isMyChat={!isOther}
                enableReveal={isOther}
                meaning={chat.meaning}
              />
            ))}
          </S.Chat>
        </S.ChatBoxContainer>
      </S.ChatContainer>

      <S.Main>
        <S.ResultContainer>
          <S.Title>{emotionData?.feedbackTitle}</S.Title>
          <S.ResultP>{emotionData?.feedbackContent}</S.ResultP>
        </S.ResultContainer>

        {emotionData && isOther && hasTipContent(emotionData) ? (
          <>
            <S.ResultContainer>
              <S.Title>{emotionData.tipTitle}</S.Title>
              <S.ResultY>
                {emotionData.tipContent.map((tip, idx) => (
                  <S.TipResult key={idx}>{tip}</S.TipResult>
                ))}
              </S.ResultY>
            </S.ResultContainer>

            <S.ResultContainer>
              <S.TextContainer>
                <S.Title>{emotionData.cautionTitle}</S.Title>
              </S.TextContainer>
              <S.ResultP>
                {emotionData.cautionContent.map((caution, idx) => (
                  <S.TipResult key={idx}>{caution}</S.TipResult>
                ))}
              </S.ResultP>
            </S.ResultContainer>
          </>
        ) : emotionData && hasCharmPointContent(emotionData) ? (
          <>
            <S.ResultContainer>
              <S.TextContainer>
                <S.Title>{emotionData.charmPointTitle}</S.Title>
              </S.TextContainer>
              <S.ResultP>
                {emotionData.charmPointContent.map((item, idx) => (
                  <S.TipResult key={idx}>{item}</S.TipResult>
                ))}
              </S.ResultP>
            </S.ResultContainer>
          </>
        ) : null}

        <S.BtnContainer>
          <S.SaveBtn onClick={handleSaveAsImage}>결과 저장하기</S.SaveBtn>
        </S.BtnContainer>
      </S.Main>
    </S.Layout>
  );
};

export default AnalysisResult;
