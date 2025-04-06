import styled from "styled-components";
import theme from "../shared/style/theme";
import flex from "../shared/style/flex";
import Heart from "../assets/icons/heart";
import Trash from "../assets/icons/trash.svg";

interface ResultProps {
  name: string;
  mbti: string;
  percent?: number;
  editMode?: boolean;
}

const Layout = styled.main`
  ${flex.COLUMN_CENTER}
  background-color: ${theme.white};
  padding: 16px 24px 9px 24px;
  border-radius: 12px;
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

const Result = ({ name, mbti, editMode, percent }: ResultProps) => {
  return (
    <Layout>
      <Text>{name}</Text>
      <MBTI>{mbti}</MBTI>
      {editMode ? (
        <Trash />
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
