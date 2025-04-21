import * as S from "./style";

interface NoticeModalProps {
  name?: string;
  isResult: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const NoticeModal = ({
  name,
  isResult,
  onConfirm,
  onCancel,
}: NoticeModalProps) => {
  const ModalDetail = [
    {
      id: 1,
      mainText: `${name}님의 분석결과를 <br> 삭제할까요?`,
      subText: "삭제하면 복구할 수 없어요",
      pinkBtnText: "네",
      blackBtnText: "아니요",
    },
    {
      id: 2,
      mainText: "주의사항",
      subText: (
        <>
          로그인을 진행하지 않으면 <br />
          분석 결과를 <S.Highlight>저장할 수 없습니다</S.Highlight>
        </>
      ),
      pinkBtnText: "로그인",
      blackBtnText: "괜찮아요",
    },
  ];

  const { mainText, subText, pinkBtnText, blackBtnText } = isResult
    ? ModalDetail[0]
    : ModalDetail[1];

  return (
    <S.Layout>
      <S.TextContainer isResult={isResult}>
        <S.MainText dangerouslySetInnerHTML={{ __html: mainText }} />
        <S.SubText>{subText}</S.SubText>
      </S.TextContainer>
      <S.ButtonContainer>
        <S.PinkBtn onClick={onConfirm}>{pinkBtnText}</S.PinkBtn>
        <S.Line />
        <S.BlackBtn onClick={onCancel}>{blackBtnText}</S.BlackBtn>
      </S.ButtonContainer>
    </S.Layout>
  );
};

export default NoticeModal;
