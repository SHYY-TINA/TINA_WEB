import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  ${flex.CENTER}
`;
export const Layout = styled.main`
  ${flex.COLUMN_VERTICAL}
  padding: 0 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 57.26%,
      rgba(252, 235, 241, 0.5) 99.97%
    ),
    #fff;
`;
export const SymbolImg = styled.img`
  padding-top: 145px;
`;
export const TextContainer = styled.div`
  ${flex.COLUMN_CENTER}
  padding: 28px 0 62px 0;
  color: ${theme.brown5};
  font-size: 14px;
  font-weight: 400;
`;
export const LoginContainer = styled.div`
  ${flex.CENTER}
  width: 100%;
  padding: 12.5px 0;
  background-color: ${theme.bg};
  border-radius: 6px;
  cursor: pointer;
`;
export const LoginCenter = styled.div`
  ${flex.CENTER}
  gap: 8px;
`;
export const Login = styled.span`
  font-family: "Apple SD Gothic Neo";
  font-size: 15px;
  font-weight: 600;
`;
export const NoLogin = styled.span`
  padding-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${theme.brown4};
  cursor: pointer;
`;
