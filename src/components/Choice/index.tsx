import * as S from "./style";
import YoutHeart from "@/assets/illustration/yourHeart.png";
import MyHeart from "@/assets/illustration/myHeart.png";
import RecordHeart from "@/assets/illustration/recordHeart.png";
import MBTI from "@/assets/illustration/mbti.png";
import LeftArrowBigGray from "@/assets/icons/leftArrowBigGray";
import RightArrowBigGray from "@/assets/icons/rightArrowBigGray";
import LeftArrowBigWhite from "@/assets/icons/leftArrowBigWhite";
import RightArrowBigWhite from "@/assets/icons/rightArrowBigWhite";

const Choice = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (idx: number) => void;
}) => {
  const ChoiceDetail = [
    {
      title: "너의 속마음",
      subTitle: "상대방의 숨겨진 마음을 <br> 티나가 읽어줘요",
      icon: YoutHeart,
    },
    {
      title: "진짜 내 마음",
      subTitle: "내가 알지 못했던 <br> 감정의 흐름을 알려줘요",
      icon: MyHeart,
    },
    {
      title: "기록된 마음들",
      subTitle: "지금까지의 분석 결과를 <br> 한눈에 모아볼 수 있어요",
      icon: RecordHeart,
    },
    {
      title: "MBTI 궁합",
      subTitle: "MBTI로 알아보는 <br> 우리 둘의 케미!",
      icon: MBTI,
    },
  ];

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < ChoiceDetail.length - 1) setIndex(index + 1);
  };

  const { title, subTitle, icon } = ChoiceDetail[index];

  return (
    <S.Layout>
      <S.Arrow onClick={handlePrev}>
        {index === 0 ? <LeftArrowBigWhite /> : <LeftArrowBigGray />}
      </S.Arrow>
      <S.MainContainer>
        <S.Title>{title}</S.Title>
        <img src={icon} alt={title} />
        <S.SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
      </S.MainContainer>
      <S.Arrow onClick={handleNext}>
        {index === ChoiceDetail.length - 1 ? (
          <RightArrowBigWhite />
        ) : (
          <RightArrowBigGray />
        )}
      </S.Arrow>
    </S.Layout>
  );
};

export default Choice;
