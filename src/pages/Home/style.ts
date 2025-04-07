import styled from "styled-components";
import flex from "../../shared/style/flex";
import theme from "../../shared/style/theme";

export const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 57.26%,
      rgba(252, 235, 241, 0.5) 99.97%
    ),
    #fff;
`;
export const Header = styled.header`
  ${flex.BETWEEN}
  width: 100%;
  padding: 53px 20px 0 20px;
`;
export const ProfileWrapper = styled.div`
  position: relative;
  ${flex.COLUMN_FLEX}
  align-items: flex-end;
  z-index: 10;
`;
export const Profile = styled.div`
  ${flex.CENTER}
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background: rgba(255, 132, 145, 0.6);
  cursor: pointer;
`;
export const Main = styled.div`
  ${flex.COLUMN_CENTER}
  width: 100%;
  padding-top: 54px;
  gap: 40px;
`;
export const Button = styled.button`
  width: 191px;
  padding: 13px 0;
  font-size: 18px;
  background-color: ${theme.primaryPink};
  color: ${theme.white};
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
