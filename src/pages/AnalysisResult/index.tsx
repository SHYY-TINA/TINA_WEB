import * as S from "./style";
import LeftArrow from "@/assets/icons/leftArrow";
import Arrow from "@/assets/icons/arrow";
import Heart from "@/assets/icons/heart";
import ChatBox from "@/components/ChatBox";
import { useNavigate } from "react-router-dom";

interface OtherResultProps {
  isOther?: boolean;
}

const AnalysisResult = ({ isOther = false }: OtherResultProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <S.Layout>
      <S.Header>
        <S.HighHeader>
          <div style={{ position: "absolute", left: 0 }} onClick={goBack}>
            <LeftArrow />
          </div>
          <S.FromContainer>
            시연
            <Arrow />
            예진
          </S.FromContainer>
        </S.HighHeader>
        <S.LowHeader>
          <S.HeartContainer>
            <Heart />
            <span>98</span>%
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
              <ChatBox
                chatData="모든 국민은 보건에 관하여 국가의 보호를 받는다."
                date="오전 12시"
                isFirstChat
                isMyChat={false}
                enableReveal
              />
              <ChatBox
                chatData="모든 국민은 보건에 관하여 국가의 보호를 받는다."
                date="오전 12시"
                isFirstChat={false}
                isMyChat={false}
                enableReveal
              />
            </S.Chat>
          </S.ChatBoxContainer>
        ) : (
          <>
            <ChatBox
              chatData="모든 국민은 보건에 관하여 국가의 보호를 받는다."
              date="오전 12시"
              isFirstChat
              isMyChat
            />
            <ChatBox
              chatData="모든 국민은 보건에 관하여 국가의 보호를 받는다."
              date="오전 12시"
              isFirstChat={false}
              isMyChat
            />
          </>
        )}
      </S.ChatContainer>
      <S.Main>
        <S.ResultContainer>
          <S.Title>호감은 있는데 아직 잘 모르겠어요</S.Title>
          <S.ResultP>
            공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에
            의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우
            공무원 자신의 책임은 면제되지 아니한다. 대통령은 필요하다고 인정할
            때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에
            붙일 수 있다.{" "}
          </S.ResultP>
        </S.ResultContainer>
        <S.ResultContainer>
          <S.Title>대화 TIP</S.Title>
          <S.ResultY>
            <S.TipResult>상대의 말에 진심으로 공감해 주세요</S.TipResult>
            <S.TipResult>상대는 칭찬해 주는 것을 좋아해요</S.TipResult>
          </S.ResultY>
        </S.ResultContainer>
        {isOther && (
          <S.ResultContainer>
            <S.TextContainer>
              <S.Title>주의</S.Title>
              <S.SubText>이 행동이 바뀌지 않으면 차일 가능성 65%</S.SubText>
            </S.TextContainer>
            <S.ResultP>
              <S.TipResult>상대의 말에 진심으로 공감해 주세요</S.TipResult>
              <S.TipResult>상대는 칭찬해 주는 것을 좋아해요</S.TipResult>
            </S.ResultP>
          </S.ResultContainer>
        )}
        <S.BtnContainer>
          <S.SaveBtn>결과 저장하기</S.SaveBtn>
        </S.BtnContainer>
      </S.Main>
    </S.Layout>
  );
};

export default AnalysisResult;
