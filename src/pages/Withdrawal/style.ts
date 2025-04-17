import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_FLEX}
  width: 100%;
  height: 100%;
  padding: 47px 20px 0 20px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 57.26%,
      rgba(252, 235, 241, 0.5) 99.97%
    ),
    #fff;
`;
export const Header = styled.header`
  padding: 6px 0;
  padding-bottom: 33px;
`;
export const Title = styled.span`
  color: ${theme.brown8};
  font-size: 20px;
  font-weight: 600;
`;
export const SubTitleContainer = styled.span`
  ${flex.COLUMN_FLEX}
  padding-top: 4px;
  color: ${theme.brown4};
  font-size: 14px;
  font-weight: 400;
  gap: 3px;
`;
export const BtnContainer = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 10px;
  width: 100%;
  padding-top: 248px;
`;
export const GoWithdrawal = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.014px;
  color: ${theme.brown5};
`;
