import * as S from "./style";
import LeftArrow from "@/assets/icons/leftArrow";
import Arrow from "@/assets/icons/arrow";
import Heart from "@/assets/icons/heart";
import { ChatBox } from "@/components/ChatBox";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserBasicInfo } from "@/shared/hooks/useUserBasicInfo";
import { useEffect, useRef } from "react";
import { useAnalysisData } from "./useAnalysisData";
import { ScreenshotButton } from "./ScreenshotButton";

import {
  MyEmotionResponse,
  OtherEmotionResponse,
} from "@/shared/types/emotion";
import LoadingPage from "@/components/LoadingPage";

function hasCharmPointContent(data: unknown): data is {
  charmPointTitle: string;
  charmPointContent: string[];
} {
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
  const resultRef = useRef<HTMLDivElement>(null);

  const isOther = location.state?.isOther ?? false;
  const uploadedFile = location.state?.uploadedFile;
  const partnerName = location.state?.partnerName ?? "";
  const partnerMbti = location.state?.partnerMbti ?? "";
  const emotionId = location.state?.id ?? 0;
  const userName = location.state?.userName ?? "";
  const userMbti = location.state?.userMbti ?? "";

  const { data: userData } = useUserBasicInfo();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const isGuest = !accessToken || !refreshToken;
  const nickname = isGuest
    ? userName || "홍길동"
    : userData?.nickname || "홍길동";

  const { emotionData, isPending, mutate } = useAnalysisData(
    isOther,
    emotionId,
    uploadedFile,
    partnerName,
    partnerMbti,
    userName,
    userMbti,
  );

  useEffect(() => {
    mutate();
  }, [uploadedFile, partnerName, partnerMbti, isOther]);

  if (isPending) return <LoadingPage />;

  const partner = emotionData?.partnerName ?? partnerName;

  return (
    <S.Layout ref={resultRef}>
      <S.Header>
        <S.HighHeader>
          <div
            style={{ position: "absolute", left: 0 }}
            onClick={() => navigate("/home")}
          >
            <LeftArrow />
          </div>
          <S.FromContainer>
            {isOther ? (
              <>
                {partner}
                <Arrow />
                {nickname}
              </>
            ) : (
              <>
                {nickname}
                <Arrow />
                {partner}
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
          {isOther && (
            <S.ChatHeaderText>
              <span>속마음이 궁금한 말풍선을</span>
              <span>클릭해 보세요!</span>
            </S.ChatHeaderText>
          )}
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
        ) : null}

        <S.BtnContainer>
          <ScreenshotButton
            targetRef={resultRef as React.RefObject<HTMLDivElement>}
          />
        </S.BtnContainer>
      </S.Main>
    </S.Layout>
  );
};

export default AnalysisResult;
