import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_FLEX}
  width: 100vw;
  height: 100vh;
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
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.014px;
`;
export const InputContainer = styled.div`
  ${flex.COLUMN_FLEX}
  padding: 12px 0 100px 0;
  width: 100%;
  gap: 10px;
`;
export const Container = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  gap: 2px;
`;
export const InputTitle = styled.span`
  color: ${theme.brown6};
  font-size: 14px;
  font-weight: 400;
`;
export const BtnContainer = styled.div`
  ${flex.CENTER}
  width: 100%;
`;
