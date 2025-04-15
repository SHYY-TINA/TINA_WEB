import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_FLEX}
  padding: 47px 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 57.26%,
      rgba(252, 235, 241, 0.5) 99.97%
    ),
    #fff;
`;
export const Header = styled.header`
  padding: 6px 0 14px 0;
`;
export const MainContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 4px;
  padding: 33px 0 226px 0;
`;
export const Title = styled.span`
  color: ${theme.brown8};
  font-size: 20px;
  font-weight: 600;
`;
export const SubText = styled.span`
  ${flex.COLUMN_FLEX}
  color: ${theme.brown4};
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
`;
export const Center = styled.div`
  ${flex.CENTER}
  width: 100%;
`;
export const UploadBtn = styled.button`
  ${flex.CENTER}
  width: 191px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: ${theme.primaryPink};
  color: ${theme.white};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
