import * as S from "./style";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/icons/leftArrow";
import Heart from "../../assets/icons/heart";
import HeartEmpty from "../../assets/icons/heartEmpty";
import MbtiResultChar from "../../components/\bMbtiResultChar";
import ArrowLeftRight from "../../assets/icons/arrowLeftRight";
import Bubble from "../../assets/icons/bubble";
import Relation from "../../assets/icons/relation";
import Warning from "../../assets/icons/warning";
import Light from "../../assets/icons/light";
import theme from "../../shared/style/theme";

interface MbtiResultProps {
  heartNum: number;
}

const MbtiResult = ({ heartNum }: MbtiResultProps) => {
  const ResultDetail = [
    {
      id: 1,
      icon: <Bubble />,
      title: "대화 스타일",
      text: "서로 닮아 공감은 잘 되지만 지루할 수도",
      color: theme.resultPink,
    },
    {
      id: 2,
      icon: <Relation />,
      title: "관계 장점",
      text: (
        <>
          <S.DotResult>감정 공감력이 뛰어남</S.DotResult>
          <S.DotResult>비슷한 가치관을 공유함</S.DotResult>
        </>
      ),
      color: theme.resultYellow,
    },
    {
      id: 3,
      icon: <Warning />,
      title: "주의할 점",
      text: "서로의 사고방식을 이해하기 어려움",
      color: theme.resultPink,
    },
    {
      id: 4,
      icon: <Light />,
      title: "맞춤 TIP",
      text: (
        <>
          <S.DotResult>
            INFP는 ISTJ에게 즉흥적 행동 전, 상대 입장 한 번 생각하기
          </S.DotResult>
          <S.DotResult>ISTJ는 INFP에게 피드백은 부드럽게 전하기</S.DotResult>
        </>
      ),
      color: theme.resultYellow,
    },
  ];

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const heartIcons = [];
  for (let i = 0; i < heartNum; i++) {
    heartIcons.push(<Heart key={`filled-${i}`} />);
  }
  for (let i = heartNum; i < 5; i++) {
    heartIcons.push(<HeartEmpty key={`empty-${i}`} />);
  }

  return (
    <S.Layout>
      <S.Header>
        <div onClick={goBack}>
          <LeftArrow />
        </div>
      </S.Header>
      <S.TitleContainer>
        <S.SubTitle>우리의 MBTI 궁합은..?</S.SubTitle>
        <S.Title>친구같은 연인, 설레는 케미</S.Title>
        <S.HeartContainer>{heartIcons}</S.HeartContainer>
      </S.TitleContainer>
      <S.CharContainer>
        <MbtiResultChar isMine mbti="ISTP" />
        <ArrowLeftRight />
        <MbtiResultChar mbti="ESFP" />
      </S.CharContainer>
      <S.Main>
        {ResultDetail.map((detail) => (
          <S.Content key={detail.id}>
            <S.ContentHeader>
              {detail.icon}
              <S.ContentTitle>{detail.title}</S.ContentTitle>
            </S.ContentHeader>
            <S.Text backgroundColor={detail.color} color={detail.color}>
              {detail.text}
            </S.Text>
          </S.Content>
        ))}
      </S.Main>
    </S.Layout>
  );
};

export default MbtiResult;
