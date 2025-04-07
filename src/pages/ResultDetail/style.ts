import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_FLEX}
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
      83.5% 30.97% at 50.13% 50%,
      #fec9d0 0%,
      #fef6f3 68%
    ),
    #fff;
`;
export const Header = styled.header`
  ${flex.COLUMN_FLEX}
  width: 100%;
  padding: 53px 20px 7px 20px;
  gap: 7px;
  border-radius: 0 0 16px 16px;
  background-color: ${theme.white};
`;
export const HighHeader = styled.div`
  ${flex.CENTER}
  position: relative;
  width: 100%;
`;
export const FromContainer = styled.div`
  ${flex.CENTER}
  color: ${theme.brown9};
  font-size: 14px;
  font-weight: 400;
`;
export const LowHeader = styled.div`
  width: 100%;
  ${flex.CENTER}
`;
export const HeartContainer = styled.div`
  ${flex.CENTER}
  font-size: 12px;
  color: #ab6e6b;
  font-weight: 500;
`;
export const Main = styled.div`
  ${flex.COLUMN_CENTER}
  width: 100%;
  padding: 16px 23px 99px 20px;
  gap: 16px;
`;
export const TitleContainer = styled.div`
  ${flex.COLUMN_CENTER}
  font-size: 12px;
  color: ${theme.primaryPink};
  font-weight: 500;
`;
export const ChatContainer = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  gap: 4px;
`;
export const ExplanationBox = styled.div``;
