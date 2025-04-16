import { useState } from "react";
import * as S from "./style";
import Symbol from "../../assets/illustration/symbol.png";
import Kakao from "../../assets/icons/kakao";
import NoticeModal from "../../components/NoticeModal";

const StartLogin = () => {
  const [showModal, setShowModal] = useState(false);

  const handleNoLoginClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const KAKAO_AUTH_URL = import.meta.env.VITE_KAKAO_AUTH_URL;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL!;
  };

  return (
    <S.Layout>
      <S.SymbolImg src={Symbol} />
      <S.TextContainer>
        <span>그 말, 무슨 의미일까?</span>
        <span>티나가 알려줄게요</span>
      </S.TextContainer>
      <S.LoginContainer onClick={kakaoLogin}>
        <S.LoginCenter>
          <Kakao />
          <S.Login>카카오 로그인</S.Login>
        </S.LoginCenter>
      </S.LoginContainer>
      <S.NoLogin onClick={handleNoLoginClick}>로그인 없이 진행하기</S.NoLogin>
      {showModal && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <NoticeModal isResult={false} />
          </div>
        </S.ModalOverlay>
      )}
    </S.Layout>
  );
};

export default StartLogin;
