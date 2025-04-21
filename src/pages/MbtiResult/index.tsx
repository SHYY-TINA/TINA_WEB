import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useGetMbtiResult } from "@/shared/hooks/useGetMbtiResult";

interface MbtiResultProps {
  heartNum: number;
}

const MbtiResult = ({ heartNum }: MbtiResultProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { myMbtiValue, otherMbti } = location.state || {};

  const { data: resultData, isLoading } = useGetMbtiResult({
    firstMbti: myMbtiValue,
    secondMbti: otherMbti,
  });

  const heartIcons = Array.from({ length: 5 }, (_, i) =>
    i < heartNum ? (
      <Heart key={`filled-${i}`} />
    ) : (
      <HeartEmpty key={`empty-${i}`} />
    ),
  );

  const ResultDetail = [
    {
      id: 1,
      icon: <Bubble />,
      title: "대화 스타일",
      text:
        resultData?.communicationStyle ||
        (isLoading
          ? "대화 스타일을 불러오는 중입니다."
          : "데이터를 찾을 수 없습니다."),
      color: theme.resultPink,
    },
    {
      id: 2,
      icon: <Relation />,
      title: "관계 장점",
      text: (
        <S.DotResult>
          {resultData?.strengthInRelationship ||
            (isLoading
              ? "관계 장점을 불러오는 중입니다."
              : "데이터를 찾을 수 없습니다.")}
        </S.DotResult>
      ),
      color: theme.resultYellow,
    },
    {
      id: 3,
      icon: <Warning />,
      title: "주의할 점",
      text:
        resultData?.caution ||
        (isLoading
          ? "주의할 점을 불러오는 중입니다."
          : "데이터를 찾을 수 없습니다."),
      color: theme.resultPink,
    },
    {
      id: 4,
      icon: <Light />,
      title: "맞춤 TIP",
      text: (
        <S.DotResult>
          {resultData?.tip ||
            (isLoading
              ? "맞춤 TIP을 불러오는 중입니다."
              : "데이터를 찾을 수 없습니다.")}
        </S.DotResult>
      ),
      color: theme.resultYellow,
    },
  ];

  const goBack = () => navigate(-1);

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
        <MbtiResultChar isMine mbti={myMbtiValue} />
        <ArrowLeftRight />
        <MbtiResultChar mbti={otherMbti} />
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
