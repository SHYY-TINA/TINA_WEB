import styled from "styled-components";
import theme from "../../shared/style/theme";
import flex from "../../shared/style/flex";

export const Layout = styled.main`
  ${flex.CENTER}
  gap: 32px;
`;

export const MainContainer = styled.div`
  ${flex.COLUMN_CENTER}
`;

export const Title = styled.span`
  padding-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
  color: ${theme.brown6};
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${theme.brown5};
  padding-top: 8px;
  text-align: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;
