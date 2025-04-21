import * as S from "./style";
import LeftArrow from "@/assets/icons/leftArrow";
import Arrow from "@/assets/icons/arrow";
import Heart from "@/assets/icons/heart";
import { ChatBox } from "@/components/ChatBox";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserBasicInfo } from "@/shared/hooks/useUserBasicInfo";
import { useEffect } from "react";
import { useOtherAnalysis } from "@/shared/hooks/useOtherAnalysis";
import { useMyAnalysis } from "@/shared/hooks/useMyAnalysis";
import {
  MyEmotionResponse,
  OtherEmotionResponse,
} from "@/shared/types/emotion";
import { useGetOtherAnalysisDetail } from "@/shared/hooks/useGetOtherAnalysisDetail";
import { useGetMyAnalysisDetail } from "@/shared/hooks/useGetMyAnalysisDetail";
import html2canvas from "html2canvas";
import { useRef } from "react";

const AnalysisResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOther = location.state?.isOther ?? false;
  const uplocatedFile = location.state?.uploadedFile;
  const partnerName = location.state?.partnerName ?? "";
  const partnerMbti = location.state?.partnerMbti ?? "";
  const emotionId = location.state?.id ?? 0;
  const { data: userData } = useUserBasicInfo();
  const nickname = userData?.nickname ?? "홍길동";
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSaveAsImage = async () => {
    if (!resultRef.current) return;

    const canvas = await html2canvas(resultRef.current);
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "analysis_result.png";
    link.click();
  };

  const goBack = () => navigate("/home");

  const { mutate: mutateOther, data: emotionOtherData } = useOtherAnalysis();
  const { mutate: mutateUser, data: emotionUserData } = useMyAnalysis();

  const { data: emotionOtherDetailData } = useGetOtherAnalysisDetail(
    emotionId,
    isOther,
  );
  const { data: emotionMyDetailData } = useGetMyAnalysisDetail(
    emotionId,
    !isOther,
  );

  useEffect(() => {
    if (uplocatedFile && partnerName && partnerMbti) {
      if (isOther) {
        mutateOther({ partnerName, partnerMbti, file: uplocatedFile });
      } else {
        mutateUser({ partnerName, partnerMbti, file: uplocatedFile });
      }
    }
  }, [uplocatedFile, partnerName, partnerMbti, isOther]);

  const emotionData: MyEmotionResponse | OtherEmotionResponse | undefined =
    isOther && emotionId
      ? emotionOtherDetailData
      : !isOther && emotionId
      ? emotionMyDetailData
      : isOther
      ? emotionOtherData
      : emotionUserData;

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
                {partnerName}
                <Arrow />
                {nickname}
              </>
            ) : (
              <>
                {nickname}
                <Arrow />
                {partnerName}
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
        {isOther ? (
          <S.ChatBoxContainer>
            <S.ChatHeaderText>
              <span>속마음이 궁금한 말풍선을</span>
              <span>클릭해 보세요!</span>
            </S.ChatHeaderText>
            <S.Chat>
              {emotionData?.chats?.map((chat, idx) => (
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
        ) : (
          <S.Chat>
            {emotionData?.chats?.map((chat, idx) => (
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
        )}
      </S.ChatContainer>

      <S.Main>
        <S.ResultContainer>
          <S.Title>{emotionData?.feedbackTitle}</S.Title>
          <S.ResultP>{emotionData?.feedbackContent}</S.ResultP>
        </S.ResultContainer>

        {isOther && emotionData && "tipTitle" in emotionData && (
          <>
            <S.ResultContainer>
              <S.Title>{emotionData.tipTitle}</S.Title>
              <S.ResultY>
                <S.TipResult>{emotionData.tipContent}</S.TipResult>
              </S.ResultY>
            </S.ResultContainer>
            <S.ResultContainer>
              <S.TextContainer>
                <S.Title>{emotionData.cautionTitle}</S.Title>
              </S.TextContainer>
              <S.ResultP>
                <S.TipResult>{emotionData.cautionContent}</S.TipResult>
              </S.ResultP>
            </S.ResultContainer>
          </>
        )}

        {!isOther && emotionData && "charmPointTitle" in emotionData && (
          <S.ResultContainer>
            <S.TextContainer>
              <S.Title>{emotionData.charmPointTitle}</S.Title>
            </S.TextContainer>
            <S.ResultP>
              <S.TipResult>{emotionData.charmPointContent}</S.TipResult>
            </S.ResultP>
          </S.ResultContainer>
        )}

        <S.BtnContainer>
          <S.SaveBtn onClick={handleSaveAsImage}>결과 저장하기</S.SaveBtn>
        </S.BtnContainer>
      </S.Main>
    </S.Layout>
  );
};

export default AnalysisResult;
