import styled, { css } from "styled-components";
import theme from "../shared/style/theme";
import { useState } from "react";

type ButtonMode =
  | "BIGPINK"
  | "BIGWHITE"
  | "SMALLGRAY"
  | "SMALLPINK"
  | "SMALLBACKGRAY";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: ButtonMode;
  text: string;
  isActive?: boolean;
}

interface StyledButtonProps {
  mode: ButtonMode;
  isClicked: boolean;
  isActive: boolean;
}

const Button = ({ mode, text, isActive = false, ...props }: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    props.onClick?.(e);
  };

  return (
    <StyledButton
      mode={mode}
      isClicked={isClicked}
      isActive={isActive}
      onClick={handleClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

const baseStyle = css`
  width: fit-content;
  border-radius: 12px;
  font-family: Paperlogy;
  cursor: pointer;
`;

const bigCommon = css`
  width: 191px;
  padding: 13px 0;
  font-size: 18px;
`;

const smallCommon = css`
  padding: 8px;
  font-size: 12px;
  border: none;
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${baseStyle}

  ${({ mode }) => (mode.startsWith("BIG") ? bigCommon : smallCommon)}

  ${({ mode, isClicked, isActive }) => {
    switch (mode) {
      case "BIGPINK":
        return css`
          background-color: ${isClicked || isActive
            ? theme.primaryPink
            : "#a6a6a6"};
          color: ${theme.white};
          border: none;

          &:hover {
            background-color: ${isClicked ? theme.primaryPink : "#E16471"};
          }
        `;
      case "BIGWHITE":
        return css`
          background-color: ${isClicked ? theme.white : "#a6a6a6"};
          border: ${isClicked
            ? `1px solid ${theme.primaryPink}`
            : "1px solid transparent"};
          color: ${isClicked ? theme.primaryPink : theme.white};

          &:hover {
            background-color: ${isClicked ? theme.white : theme.brown1};
            border: 1px solid ${theme.primaryPink};
            color: ${theme.primaryPink};
          }
        `;
      case "SMALLGRAY":
        return css`
          background-color: transparent;
          color: ${theme.brown3};
        `;
      case "SMALLPINK":
        return css`
          background-color: transparent;
          color: ${theme.primaryPink};
        `;
      case "SMALLBACKGRAY":
        return css`
          background-color: ${theme.brown1};
          color: ${theme.brown4};
        `;
      default:
        return css``;
    }
  }}
`;

export default Button;
