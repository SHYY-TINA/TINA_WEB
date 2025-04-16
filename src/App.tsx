import styled from "styled-components";
import Router from "./routes";
import flex from "./shared/style/flex";
import PhoneImg from "@/assets/illustration/phoneImg.png";

const RouteLayout = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${flex.COLUMN_CENTER}
  background-color: aliceblue;
`;
const PhoneLayout = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhoneBackground = styled.img`
  position: absolute;
  width: 379.53px;
  height: 779px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 440px) {
    display: none;
  }
`;
const RouterWrapper = styled.div`
  position: relative;
  z-index: 0;
  @media (min-width: 441px) {
    width: 345px;
    height: 779px;
    border-radius: 80px;
    overflow: hidden;
  }
  @media (max-width: 440px) {
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <RouteLayout>
      <PhoneLayout>
        <PhoneBackground src={PhoneImg} />
        <RouterWrapper>
          <Router />
        </RouterWrapper>
      </PhoneLayout>
    </RouteLayout>
  );
}

export default App;
