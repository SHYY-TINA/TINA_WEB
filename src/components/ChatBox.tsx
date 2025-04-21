import styled from "styled-components";
import flex from "@/shared/style/flex";
import theme from "@/shared/style/theme";
import { useState } from "react";

interface ChatBoxProps {
  chatData: string;
  meaning?: string; // ✅ 추가
  date: string;
  isFirstChat: boolean;
  isMyChat: boolean;
  prevIsMyChat?: boolean;
  onClick?: () => void;
  enableReveal?: boolean;
}

const Layout = styled.main<{ isMyChat: boolean; showPadding: boolean }>`
  ${flex.FLEX}
  gap: 4px;
  margin-left: ${({ isMyChat }) => isMyChat && "auto"};
  padding-top: ${({ showPadding }) => (showPadding ? "20px" : "0")};
`;

const ChatBoxContainer = styled.div<{ radios: boolean; color: boolean }>`
  max-width: 232px;
  padding: ${({ radios }) => (radios ? "8px 7px" : "8px 12px")};
  border-radius: 16px;
  background-color: ${({ color }) => (color ? theme.primaryPink : theme.white)};
  color: ${({ color }) => (color ? theme.white : theme.black)};
  border-radius: ${({ radios, color }) => {
    if (radios && color) return "12px 0 12px 12px";
    if (radios && !color) return "0px 12px 12px 12px";
    return "12px";
  }};
  font-size: 14px;
  font-style: normal;
  font-weight: regular;
  line-height: 160%;
  letter-spacing: -0.014px;
  cursor: ${({ color }) => (!color ? "pointer" : "default")};
`;

const DateContainer = styled.span`
  margin-top: auto;
  color: #969696;
  font-size: 10px;
  font-weight: 400;
`;

const Highlighted = styled.span`
  color: ${theme.primaryPink};
`;

export const ChatBox = ({
  chatData,
  meaning,
  date,
  isFirstChat,
  isMyChat,
  prevIsMyChat,
  onClick,
  enableReveal = false,
}: ChatBoxProps) => {
  const [revealed, setRevealed] = useState(false);
  const showPadding = prevIsMyChat !== undefined && prevIsMyChat !== isMyChat;

  const handleClick = () => {
    if (!isMyChat && enableReveal && meaning) {
      setRevealed(!revealed);
    }
    onClick?.();
  };

  return (
    <Layout isMyChat={isMyChat} showPadding={showPadding}>
      {isMyChat ? (
        <>
          <DateContainer>{date}</DateContainer>
          <ChatBoxContainer radios={isFirstChat} color={isMyChat}>
            {chatData}
          </ChatBoxContainer>
        </>
      ) : (
        <>
          <ChatBoxContainer
            radios={isFirstChat}
            color={isMyChat}
            onClick={handleClick}
          >
            {revealed && enableReveal && meaning ? (
              <Highlighted>☛ {meaning}</Highlighted>
            ) : (
              chatData
            )}
          </ChatBoxContainer>
          <DateContainer>{date}</DateContainer>
        </>
      )}
    </Layout>
  );
};