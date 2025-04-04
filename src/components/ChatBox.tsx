import styled from "styled-components";
import flex from "../shared/style/theme";
import theme from "../shared/style/flex";

interface ChatBoxProps {
  chatData: string;
  date: string;
  isFirstChat: boolean;
  isMyChat: boolean;
}

const Layout = styled.main`
  ${flex.FLEX}
  gap: 4px;
  font-family: Paperlogy;
`;

const ChatBoxContainer = styled.div<{ radios: boolean; color: boolean }>`
  padding: 8px 7px;
  border-radius: 16px;
  background-color: ${({ color }) => (color ? theme.primaryPink : theme.white)};
  color: ${({ color }) => (color ? theme.white : theme.black)};
  border-radius: ${({ radios }) => (radios ? "0px 16px 16px 16px" : "16px")};
  font-size: 14px;
  font-style: normal;
  font-weight: regular;
  line-height: 160%;
  letter-spacing: -0.014px;
`;

const DateContainer = styled.span`
  margin-top: auto;
  color: #969696;
  font-size: 10px;
  font-weight: 400;
`;

const ChatBox = ({ chatData, date, isFirstChat, isMyChat }: ChatBoxProps) => {
  return (
    <Layout>
      {isMyChat ? (
        <>
          <DateContainer>{date}</DateContainer>
          <ChatBoxContainer radios={isFirstChat} color={isMyChat}>
            {chatData}
          </ChatBoxContainer>
        </>
      ) : (
        <>
          <ChatBoxContainer radios={isFirstChat} color={isMyChat}>
            {chatData}
          </ChatBoxContainer>
          <DateContainer>{date}</DateContainer>
        </>
      )}
    </Layout>
  );
};

export default ChatBox;
