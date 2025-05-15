import * as S from "./style";
import LeftArrow from "@/assets/icons/leftArrow";
import Button from "@/components/Button";
import Result from "@/components/Result";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NoticeModal from "@/components/NoticeModal";
import { useGetEmotionList } from "@/shared/hooks/useGetEmotionList";
import { useDeleteAnalysis } from "@/shared/hooks/useDeleteAnalysis";

const modalBackgroundStyle: React.CSSProperties = {
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.10)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const GatherResult = () => {
  const [activeButton, setActiveButton] = useState<
    "상대의 마음 보기" | "내 마음 보기"
  >("상대의 마음 보기");
  const [editMode, setEditMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalName, setModalName] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleButtonClick = (button: "상대의 마음 보기" | "내 마음 보기") => {
    if (activeButton !== button) setActiveButton(button);
  };

  const handleEditButtonClick = () => setEditMode(!editMode);

  const handleTrashClick = (id: number, name: string) => {
    setSelectedId(id);
    setModalName(name);
    setIsModalVisible(true);
  };

  const handleModalClose = () => setIsModalVisible(false);

  const handleResultClick = (id: number) => {
    const isOther = activeButton === "상대의 마음 보기";
    navigate("/result", { state: { id, isOther } });
  };

  const isOther = activeButton === "상대의 마음 보기";
  const { data: resultList = [] } = useGetEmotionList(isOther);

  const { mutate: deleteAnalysis } = useDeleteAnalysis(
    selectedId ?? 0,
    isOther,
  );

  const handleDelete = () => {
    if (!selectedId) return;

    deleteAnalysis(undefined, {
      onSuccess: () => {
        window.location.reload();
      },
    });

    handleModalClose();
  };

  return (
    <S.Layout>
      <S.Header>
        <div onClick={goBack}>
          <LeftArrow />
        </div>
        <S.Edit onClick={handleEditButtonClick}>
          {editMode ? "완료" : "편집"}
        </S.Edit>
      </S.Header>
      <S.Main>
        <S.TitleContainer>
          <span>티나가 기억하고 있어요</span>
          <span>다시 보고 싶은 결과를 골라봐요!</span>
        </S.TitleContainer>
        <S.CategoryContainer>
          <Button
            mode="SMALLGRAY"
            text="상대의 마음 보기"
            isActive={activeButton === "상대의 마음 보기"}
            onClick={() => handleButtonClick("상대의 마음 보기")}
          />
          <Button
            mode="SMALLGRAY"
            text="내 마음 보기"
            isActive={activeButton === "내 마음 보기"}
            onClick={() => handleButtonClick("내 마음 보기")}
          />
        </S.CategoryContainer>
        <S.HeartContainer>
          {resultList.map((user) => (
            <Result
              key={user.id}
              name={user.partnerName}
              mbti={user.partnerMbti}
              percent={user.charmScore}
              editMode={editMode}
              onTrashClick={() => handleTrashClick(user.id, user.partnerName)}
              onClick={() => handleResultClick(user.id)}
            />
          ))}
        </S.HeartContainer>
      </S.Main>

      {isModalVisible && (
        <div onClick={handleDelete} style={modalBackgroundStyle}>
          <NoticeModal name={modalName} isResult={true} />
        </div>
      )}
    </S.Layout>
  );
};

export default GatherResult;
