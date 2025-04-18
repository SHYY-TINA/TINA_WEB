import styled from "styled-components";
import flex from "@/shared/style/flex";
import theme from "@/shared/style/theme";

export const Layout = styled.main`
  width: 100%;
  height: fit-content;
  background: radial-gradient(
      83.5% 30.97% at 50.13% 50%,
      #fec9d0 0%,
      #fef6f3 68%
    ),
    #fff;
`;
export const Header = styled.header`
  ${flex.BETWEEN}
  width: 100%;
  padding: 53px 20px 19px 20px;
  background-color: ${theme.white};
  border-radius: 0 0 12px 12px;
`;
export const Edit = styled.span`
  color: ${theme.brown6};
  font-size: 12px;
  font-weight: 500;
  &:hover {
    color: ${theme.primaryPink};
  }
`;
export const Main = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 24px;
  padding: 24px 20px;
`;
export const TitleContainer = styled.div`
  ${flex.COLUMN_FLEX}
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.014px;
  color: ${theme.brown6};
`;
export const CategoryContainer = styled.div`
  ${flex.FLEX}
  gap: 8px;
`;
export const HeartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 6px;
  gap: 20px 12px;
`;
