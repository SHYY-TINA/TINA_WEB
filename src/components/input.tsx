import styled from "styled-components";
import theme from "@/shared/style/theme";
import InputWarningIcon from "@/assets/icons/inputWarning.png";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasWarning?: boolean;
}

interface StyledInputProps {
  hasValue: boolean;
  hasWarning?: boolean;
}

const InputWrapper = styled.div`
  position: relative;
  width: 335px;
`;

const Layout = styled.input<StyledInputProps>`
  width: 100%;
  height: 40px;
  padding: 13px 12px;
  border: 1px solid
    ${({ hasWarning, hasValue }) =>
      hasWarning ? theme.primaryPink : hasValue ? theme.brown4 : theme.brown2};
  border-radius: 4px;
  color: ${theme.brown8};
  font-family: "Paperlogy";
  ::placeholder {
    color: ${theme.brown3};
  }
  font-size: 12px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;

const WarningIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = ({
  placeholder,
  value,
  onChange,
  hasWarning = false,
}: InputProps) => {
  const hasValue = value.trim() !== "";

  return (
    <InputWrapper>
      <Layout
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasValue={hasValue}
        hasWarning={hasWarning}
      />
      {hasWarning && <WarningIcon src={InputWarningIcon} />}
    </InputWrapper>
  );
};

export default Input;
