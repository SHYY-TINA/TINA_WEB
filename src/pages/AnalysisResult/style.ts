import styled from "styled-components";
import theme from "@/shared/style/theme";
import flex from "@/shared/style/flex";

export const Layout = styled.main`
  ${flex.COLUMN_FLEX}
  width: 100%;
  height: 100%;
  background: radial-gradient(
      60.13% 15.23% at 50.13% 21.53%,
      #fec9d0 0%,
      #fef6f3 100%
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
export const ChatContainer = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  padding: 32px 20px;
  gap: 4px;
`;
export const Main = styled.div`
  ${flex.COLUMN_CENTER}
  padding: 42px 18px 50px 19px;
  background-color: ${theme.white};
  border-radius: 16px 16px 0 0;
  gap: 32px;
`;
export const ResultContainer = styled.div`
  ${flex.COLUMN_CENTER}
  width: 100%;
  gap: 12px;
`;
export const Title = styled.span`
  color: ${theme.brown6};
  font-size: 18px;
  font-weight: 600;
`;
export const ResultP = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  background-color: ${theme.resultPink};
  border-radius: 16px;
  padding: 12px 19px;
  color: ${theme.brown7};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`;
export const ResultY = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  background-color: ${theme.resultYellow};
  border-radius: 16px;
  padding: 12px 19px;
  color: ${theme.brown7};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`;
export const TipResult = styled.span`
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
export const TextContainer = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 8px;
`;
export const SubText = styled.span`
  color: ${theme.brown6};
  font-size: 12px;
  font-weight: 400;
`;
export const BtnContainer = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 12px;
  width: 191px;
`;
export const SaveBtn = styled.button`
  width: 100%;
  padding: 14px 0 13px 0;
  border: 1px solid ${theme.primaryPink};
  border-radius: 12px;
  color: ${theme.primaryPink};
  background-color: ${theme.white};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
export const More = styled.button`
  width: 100%;
  padding: 14px 0 13px 0;
  border: 1px solid ${theme.primaryPink};
  border-radius: 12px;
  color: ${theme.white};
  background-color: ${theme.primaryPink};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
