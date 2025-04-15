import styled from "styled-components";
import flex from "@/shared/style/flex";
import theme from "@/shared/style/theme";

export const Layout = styled.main`
  ${flex.COLUMN_CENTER}
`;

export const CharacterWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  ${flex.CENTER}
`;

export const ImgBackGround = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 1000px;
  background: linear-gradient(
    180deg,
    rgba(255, 132, 145, 0.16) 0%,
    rgba(255, 132, 145, 0.03) 100%
  );
  filter: blur(6px);
  z-index: 0;
`;

export const MbtiCharacter = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const UserDetail = styled.div`
  ${flex.CENTER}
  gap: 4px;
`;

export const User = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.brown5};
`;

export const Mbti = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.brown4};
`;
