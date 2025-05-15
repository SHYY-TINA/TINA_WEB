import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/input";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateUserDetail } from "@/shared/hooks/useUpdateUserDetail";
import { useUserInfoStore } from "@/shared/store/user";

const InputUserDetail = () => {
  const [name, setName] = useState("");
  const [mbti, setMbti] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
  const isValid = name && mbti && gender;

  const location = useLocation();
  const isOther = location.state?.isOther;

  const { mutate } = useUpdateUserDetail();

  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  const handleClick = () => {
    if (!isValid) return;

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      navigate("/input-other-detail", {
        state: { userName: name, userMbti: mbti, isOther },
      });
      return;
    }

    mutate(
      { nickname: name, mbti },
      {
        onSuccess: () => {
          setUserInfo({ nickname: name, mbti, gender });
          navigate("/home");
        },
        onError: () => {
          alert("정보 입력에 실패했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  return (
    <S.Layout>
      <S.Title>사용자 정보 입력</S.Title>
      <S.SubTitleContainer>
        <span>알려주신 정보는 정확한 분석을 위해 사용해요</span>
        <span>언제든지 정보를 수정할 수 있어요</span>
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
          text="완료하기"
          isActive={!!isValid}
          onClick={handleClick}
        />
      </S.BtnContainer>
    </S.Layout>
  );
};

export default InputUserDetail;
