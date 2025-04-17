import styled from "styled-components";
import Edit from "@/assets/icons/edit";
import Logout from "@/assets/icons/logout";
import flex from "@/shared/style/flex";
import theme from "@/shared/style/theme";
import { useLogout } from "@/shared/lib/useLogout";

const Layout = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: #fff;
  border: 1px solid ${theme.brown1};
  border-radius: 12px;
  z-index: 999;
  width: max-content;
`;

const EditContainer = styled.div`
  ${flex.CENTER}
  padding: 4px 17px 4px 8px;
  gap: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.brown1};
    border-radius: 12px 12px 0 0;
  }
`;

const LogoutContainer = styled.div`
  ${flex.FLEX}
  width: 100%;
  padding: 4px 17px 4px 8px;
  gap: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.brown1};
    border-radius: 0 0 12px 12px;
  }
`;

const Text = styled.span`
  ${flex.CENTER}
  font-size: 12px;
  font-weight: 400;
  color: ${theme.brown5};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.brown1};
`;

const ProfileEdit = () => {
  const { mutate: logout } = useLogout();
  return (
    <Layout>
      <EditContainer>
        <Edit />
        <Text>프로필 수정</Text>
      </EditContainer>
      <Line />
      <LogoutContainer onClick={() => logout()}>
        <Logout />
        <Text>로그아웃</Text>
      </LogoutContainer>
    </Layout>
  );
};

export default ProfileEdit;
