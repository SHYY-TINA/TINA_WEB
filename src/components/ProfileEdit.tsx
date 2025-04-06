import styled from "styled-components";
import Edit from "../assets/icons/edit";
import Logout from "../assets/icons/logout";
import flex from "../shared/style/flex";
import theme from "../shared/style/theme";

const Layout = styled.main`
  ${flex.COLUMN_CENTER}
  border-radius: 12px;
  border: 1px solid ${theme.brown1};
`;
const EditContainer = styled.div`
  ${flex.CENTER}
  padding: 4px 17px 4px 8px;
  gap: 4px;
  cursor: pointer;
`;
const Text = styled.span`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  color: ${theme.brown5};
`;
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.brown1};
`;
const LogoutContainer = styled.div`
  ${flex.CENTER}
  padding: 4px 28px 4px 8px;
  gap: 4px;
  cursor: pointer;
`;

const ProfileEdit = () => {
  return (
    <Layout>
      <EditContainer>
        <Edit />
        <Text>프로필 수정</Text>
      </EditContainer>
      <Line />
      <LogoutContainer>
        <Logout />
        <Text>로그아웃</Text>
      </LogoutContainer>
    </Layout>
  );
};

export default ProfileEdit;
