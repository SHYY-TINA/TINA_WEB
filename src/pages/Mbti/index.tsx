import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/input";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/icons/leftArrow";

const Mbti = () => {
  const [myMbti, setmyMbti] = useState("");
  const [otherMbti, setotherMbti] = useState("");

  const isValid = myMbti && otherMbti;
  const navigate = useNavigate();
  const handleClick = () => {
    if (isValid) {
      navigate("/mbti-result");
    }
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.Layout>
      <S.Header>
        <div onClick={goBack}>
          <LeftArrow />
        </div>
      </S.Header>
      <S.Title>MBTI 궁합</S.Title>
      <S.SubTitleContainer>
        <span>MBTI를 통해 궁합을 알아볼 수 있어요.</span>
        <span>짧은 테스트로 두 사람의 케미를 확인해보세요!</span>
      </S.SubTitleContainer>
      <S.InputContainer>
        <S.Container>
          <S.InputTitle>내 MBTI</S.InputTitle>
          <Input
            placeholder="본인의 MBTI를 알려주세요 ex)ISTJ"
            value={myMbti}
            onChange={(e) => setmyMbti(e.target.value)}
          />
        </S.Container>
        <S.Container>
          <S.InputTitle>상대방 MBTI</S.InputTitle>
          <Input
            placeholder="사용자의 MBTI를 알려주세요  ex)ISTJ"
            value={otherMbti}
            onChange={(e) => setotherMbti(e.target.value)}
          />
        </S.Container>
      </S.InputContainer>
      <S.BtnContainer>
        <Button
          mode="BIGPINK"
          text="궁합보기"
          isActive={!!isValid}
          onClick={handleClick}
        />
      </S.BtnContainer>
    </S.Layout>
  );
};

export default Mbti;
