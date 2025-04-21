import { useRef } from "react";
import * as S from "./style";
import LeftArrow from "../../assets/icons/leftArrow";
import { useLocation, useNavigate } from "react-router-dom";

const UploadFile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const location = useLocation();
  const isOther = location.state?.isOther ?? false;
  const name = location.state?.partnerName ?? "";
  const mbti = location.state?.partnerMbti ?? "";

  const goBack = () => navigate("/home");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일이 업로드되지 않았습니다.");
      return;
    }

    navigate("/other-result", {
      state: { isOther, partnerName: name, partnerMbti:mbti , uploadedFile:file },
    });
  };

  return (
    <S.Layout>
      <S.Header>
        <div onClick={goBack}>
          <LeftArrow />
        </div>
      </S.Header>
      <S.MainContainer>
        <S.Title>대화 파일 업로드</S.Title>
        <S.SubText>
          <span>카카오톡 대화방 - 메뉴 - 채팅방 설정 - 대화 내용 관리</span>
          <span>- 대화 내용 텍스트 파일로 저장 후,</span>
          <span>.txt 파일을 업로드 해주세요</span>
        </S.SubText>
      </S.MainContainer>

      <S.Center>
        <S.UploadBtn onClick={handleUploadClick}>파일 업로드</S.UploadBtn>
        <input
          type="file"
          accept=".txt"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </S.Center>
    </S.Layout>
  );
};

export default UploadFile;
