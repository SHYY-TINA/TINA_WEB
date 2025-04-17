import Button from "../../components/Button";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/icons/leftArrow";
import { useUserDelete } from "@/shared/hooks/useUserDelete";

const Withdrawal = () => {
  const navigate = useNavigate();
  const { mutate: withdrawal } = useUserDelete();

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
      <S.Title>회원 탈퇴하기</S.Title>
      <S.SubTitleContainer>
        <span>회원 탈퇴를 하면 분석 기록이 전부 사라져요.</span>
        <span>그래도 진행하시나요?</span>
      </S.SubTitleContainer>
      <S.BtnContainer>
        <Button mode="BIGPINK" text="탈퇴하기" onClick={() => withdrawal()} />
        <S.GoWithdrawal onClick={goBack}>취소하기</S.GoWithdrawal>
      </S.BtnContainer>
    </S.Layout>
  );
};

export default Withdrawal;
