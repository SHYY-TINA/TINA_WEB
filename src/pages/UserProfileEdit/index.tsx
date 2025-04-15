import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/input";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/icons/leftArrow";

interface ProfileEditProps {
  userName: string;
  userMbti: string;
  jender: string;
}

const UserProfileEdit = ({ userName, userMbti, jender }: ProfileEditProps) => {
  const [name, setName] = useState(userName);
  const [mbti, setMbti] = useState(userMbti);
  const [gender, setGender] = useState(jender);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setIsModified(name !== userName || mbti !== userMbti || gender !== jender);
  }, [name, mbti, gender, userName, userMbti, jender]);

  const isValid = !!(name && mbti && gender);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isValid && isModified) {
      navigate("/upload-file");
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
        <S.Container>
          <S.InputTitle>성별</S.InputTitle>
          <S.FlexContainer>
            <S.JenderInputBox>
              <S.Radio
                type="radio"
                name="gender"
                value="남성"
                checked={gender === "남성"}
                onChange={(e) => setGender(e.target.value)}
              />
              남성
            </S.JenderInputBox>
            <S.JenderInputBox>
              <S.Radio
                type="radio"
                name="gender"
                value="여성"
                checked={gender === "여성"}
                onChange={(e) => setGender(e.target.value)}
              />
              여성
            </S.JenderInputBox>
          </S.FlexContainer>
        </S.Container>
      </S.InputContainer>
      <S.BtnContainer>
        <Button
          mode="BIGPINK"
          text="수정하기"
          isActive={isModified && isValid}
          onClick={handleClick}
        />
      </S.BtnContainer>
    </S.Layout>
  );
};

export default UserProfileEdit;
