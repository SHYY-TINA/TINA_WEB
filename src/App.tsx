import styled from "styled-components";
import Router from "./routes";
import flex from "./shared/style/flex";

const RouteLayout = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${flex.COLUMN_CENTER}
  background-color: aliceblue;
`;

const PhoneLayout = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

function App() {
  return (
    <RouteLayout>
      <PhoneLayout>
        <Router />
      </PhoneLayout>
    </RouteLayout>
  );
}

export default App;
