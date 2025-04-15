import styled from "styled-components";
import flex from "@/shared/style/flex";
import theme from "@/shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_CENTER}
  background-color: rgba(255, 255, 255, 0.90);
  border-radius: 12px;
`;
export const TextContainer = styled.div<{ isResult: boolean }>`
  ${flex.COLUMN_CENTER}
  gap: 16px;
  text-align: center;
  padding: ${({ isResult }) =>
    isResult ? "24px 30px 19px 30px" : "24px 30px 26px 30px"};
`;
export const MainText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.brown9};
`;
export const SubText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.brown8};
`;
export const ButtonContainer = styled.div`
  ${flex.FLEX}
  width: 100%;
  border-top: 1px solid ${theme.white};
  font-size: 12px;
  font-weight: 500;
`;
export const PinkBtn = styled.button`
  outline: none;
  border: none;
  width: 50%;
  padding: 11px 0;
  border-radius: 0 0 0 12px;
  color: ${theme.primaryPink};
  cursor: pointer;
  background-color: transparent;
`;
export const Line = styled.div`
  border-left: 1px solid ${theme.white};
`;
export const BlackBtn = styled.button`
  outline: none;
  border: none;
  width: 50%;
  padding: 11px 0;
  border-radius: 0 0 12px 0;
  color: ${theme.brown4};
  cursor: pointer;
  background-color: transparent;
`;
export const Highlight = styled.span`
  color: ${theme.primaryPink};
`;
