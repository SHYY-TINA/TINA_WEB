import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/input";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/icons/leftArrow";
import { useUserBasicInfo } from "@/shared/hooks/useUserBasicInfo";

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useUserBasicInfo();

  const [name, setName] = useState("");
  const [mbti, setMbti] = useState("");
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (data) {
      setName(data.nickname);
      setMbti(data.mbti);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setIsModified(name !== data.nickname || mbti !== data.mbti);
    }
  }, [name, mbti, data]);

  const isValid = !!(name && mbti);

  const handleClick = () => {
    if (isValid && isModified) {
      navigate("/upload-file");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) return <div>불러오는 중...</div>;

  return (
    <S.Layout>
      <S.Header>
        <div onClick={goBack}>
          <LeftArrow />
        </div>
      </S.Header>
      <S.Title>프로필 수정</S.Title>
      <S.SubTitleContainer>
        달라진 정보가 있다면 사용해 주세요!
      </S.SubTitleContainer>
      <S.InputContainer>
        <S.Container>
          <S.InputTitle>이름</S.InputTitle>
          <Input
            placeholder="카카오톡에 저장된 이름을 입력해 주세요  ex)예진"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.Container>
        <S.Container>
          <S.InputTitle>MBTI</S.InputTitle>
          <Input
            placeholder="사용자의 MBTI를 알려주세요  ex)ISTJ"
            value={mbti}
            onChange={(e) => setMbti(e.target.value)}
          />
        </S.Container>
      </S.InputContainer>
      <S.BtnContainer>
        <Button
          mode="BIGPINK"
          text="수정하기"
          isActive={isModified && isValid}
          onClick={handleClick}
        />
        <S.GoWithdrawal onClick={() => navigate("/withdrawal")}>
          회원 탈퇴하기
        </S.GoWithdrawal>
      </S.BtnContainer>
    </S.Layout>
  );
};

export default UserProfileEdit;
