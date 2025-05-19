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
  const userName = location.state?.userName ?? "";
  const userMbti = location.state?.userMbti ?? "";

  const goBack = () => navigate("/home");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일이 업로드되지 않았습니다.");
      return;
    }

    const fileExt = file.name.split(".").pop()?.toLowerCase();
    let processedFile: File = file;

    if (fileExt === "csv") {
      try {
        const text = await file.text();
        const lines = text.split("\n").slice(1);

        const messages = lines
          .map((line) => {
            const cells = line.split(",");
            return cells[3]?.trim();
          })
          .filter((msg) => !!msg)
          .join("\n");

        const blob = new Blob([messages], { type: "text/plain" });
        processedFile = new File([blob], file.name.replace(".csv", ".txt"), {
          type: "text/plain",
        });
      } catch {
        alert("CSV 파일 처리 중 오류가 발생했습니다.");
        return;
      }
    }

    navigate("/result", {
      state: {
        isOther,
        partnerName: name,
        partnerMbti: mbti,
        uploadedFile: processedFile,
        userName,
        userMbti,
      },
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
          <span>.txt 또는 .csv 파일을 업로드 해주세요</span>
        </S.SubText>
      </S.MainContainer>

      <S.Center>
        <S.UploadBtn onClick={handleUploadClick}>파일 업로드</S.UploadBtn>
        <input
          type="file"
          accept=".txt,.csv"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </S.Center>
    </S.Layout>
  );
};

export default UploadFile;
