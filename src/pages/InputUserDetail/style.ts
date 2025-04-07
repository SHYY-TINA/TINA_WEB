import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_FLEX}
  width: 100vw;
  height: 100vh;
  padding: 126px 20px 0 20px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 57.26%,
      rgba(252, 235, 241, 0.5) 99.97%
    ),
    #fff;
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
`;
export const InputContainer = styled.div`
  ${flex.COLUMN_FLEX}
  padding: 12px 0 44px 0;
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
export const FlexContainer = styled.div`
  ${flex.FLEX}
  margin-top: 1px;
  gap: 16px;
`;
export const JenderInputBox = styled.div`
  ${flex.CENTER}
  gap: 4px;
  color: ${theme.brown6};
  font-size: 14px;
  font-weight: 400;
`;
export const Radio = styled.input`
  flex-shrink: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border: 1px solid ${theme.brown3};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: ${theme.primaryPink};
    border: 3px solid #fff;
    box-shadow: 0 0 0 1px ${theme.primaryPink};
  }
`;
export const BtnContainer = styled.div`
  ${flex.CENTER}
  width: 100%;
`;
