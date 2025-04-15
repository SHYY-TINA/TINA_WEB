import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_FLEX}
  width: 100%;
  height: 100%;
  padding: 47px 20px;
  background-color: ${theme.white};
`;
export const Header = styled.header`
  padding: 6px 0 33px 0;
`;
export const TitleContainer = styled.div`
  ${flex.COLUMN_CENTER}
  width: 100%;
`;
export const SubTitle = styled.span`
  color: ${theme.brown4};
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.014px;
`;
export const Title = styled.span`
  color: ${theme.primaryPink};
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.15px;
  padding-top: 4px;
`;
export const HeartContainer = styled.div`
  padding-top: 8px;
`;
export const CharContainer = styled.div`
  ${flex.CENTER}
  width: 100%;
  padding: 32px 0 52px 0;
  gap: 8px;
`;
export const Main = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  gap: 32px;
`;
export const Content = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  gap: 12px;
`;
export const ContentHeader = styled.div`
  ${flex.CENTER}
  gap: 6px;
`;
export const ContentTitle = styled.span`
  color: ${theme.brown6};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.15px;
`;
export const Text = styled.div<{ backgroundColor: string; color: string }>`
  ${flex.COLUMN_FLEX}
  color: ${theme.brown7};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 12px;
  border-radius: 16px;
  width: 100%;
`;
export const DotResult = styled.span`
  width: 100%;
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${theme.brown7};

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 16px;
    line-height: 160%;
  }
`;
