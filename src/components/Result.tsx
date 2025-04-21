import styled from "styled-components";
import theme from "@/shared/style/theme";
import flex from "@/shared/style/flex";
import Heart from "@/assets/icons/heart";
import Trash from "@/assets/icons/trashEmpty";

interface ResultProps {
  name: string;
  mbti: string;
  percent?: number;
  editMode?: boolean;
  onTrashClick?: () => void;
  onClick?: () => void;
}

const Layout = styled.main`
  ${flex.COLUMN_CENTER}
  background-color: ${theme.white};
  width: 100%;
  padding: 16px 20px 9px 20px;
  border-radius: 12px;
  cursor: pointer;
`;

const Text = styled.span`
  padding-bottom: 4px;
  color: ${theme.brown8};
  font-size: 18px;
  font-weight: 400;
`;

const MBTI = styled.span`
  color: ${theme.brown4};
  font-size: 14px;
  padding-bottom: 16px;
  font-weight: 400;
`;

const HeartContainer = styled.div`
  ${flex.CENTER}
  font-size: 12px;
  color: #ab6e6b;
  font-weight: 500;
`;

const TrashContainer = styled.div`
  cursor: pointer;

  &:hover {
    & > svg {
      opacity: 0.8;
    }
  }
`;

const Result = ({
  name,
  mbti,
  percent,
  editMode,
  onTrashClick,
  onClick,
}: ResultProps) => {
  return (
    <Layout onClick={onClick}>
      <Text>{name}</Text>
      <MBTI>{mbti}</MBTI>
      {editMode ? (
        <TrashContainer onClick={(e) => {
          e.stopPropagation();
          onTrashClick?.();
        }}>
          <Trash />
        </TrashContainer>
      ) : (
        <HeartContainer>
          <Heart />
          <span>{percent}</span>%
        </HeartContainer>
      )}
    </Layout>
  );
};

export default Result;
