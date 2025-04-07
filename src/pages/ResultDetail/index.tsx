import { useNavigate } from "react-router-dom";
import Heart from "../../assets/icons/heart";
import LeftArrow from "../../assets/icons/leftArrow";
import ChatBox from "../../components/ChatBox";
import Arrow from "../../assets/icons/arrow";
import * as S from "./style";

const ResultDetail = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const ChatData = [
    {
      id: 1,
      text: "안녕하세요 반갑고ㅁㄴㅇ러미나;얼;ㅣㅁㄴ아ㅓㄹ;닝럼ㄴㅇㄹㅁㄴㅇㄹ",
      isMyChat: false,
      isFirstChat: true,
      date: "오전 12시",
    },
    {
      id: 2,
      text: "안녕하세요 반갑고",
      isMyChat: false,
      isFirstChat: false,
      date: "오전 12시",
    },
    {
      id: 3,
      text: "안녕하세요 반갑고",
      isMyChat: true,
      isFirstChat: true,
      date: "오전 12시",
    },
    {
      id: 4,
      text: "안녕하세요 반갑고",
      isMyChat: true,
      isFirstChat: false,
      date: "오전 12시",
    },
    {
      id: 5,
      text: "안녕하세요 반갑고",
      isMyChat: false,
      isFirstChat: false,
      date: "오전 12시",
    },
  ];
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
      <S.Main>
        <S.TitleContainer>
          <span>속마음이 궁금한 말풍선을</span>
          <span>클릭해 보세요!</span>
        </S.TitleContainer>
        <S.ChatContainer>
          {ChatData.map((data, index) => (
            <ChatBox
              key={data.id}
              chatData={data.text}
              date={data.date}
              isFirstChat={data.isFirstChat}
              isMyChat={data.isMyChat}
              prevIsMyChat={
                index > 0 ? ChatData[index - 1].isMyChat : undefined
              }
              enableReveal
            />
          ))}
        </S.ChatContainer>
      </S.Main>
    </S.Layout>
  );
};

export default ResultDetail;
