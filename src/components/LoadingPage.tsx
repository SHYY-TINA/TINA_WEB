import styled from "styled-components";
import Loading from "@/assets/gif/loading.gif";
import flex from "@/shared/style/flex";

const Wrapper = styled.div`
  ${flex.COLUMN_CENTER}
  width: 100%;
  height: 100%;
  background: radial-gradient(
      83.5% 30.97% at 50.13% 50%,
      #fec9d0 0%,
      #fef6f3 68%
    ),
    #fff;
`;

const Message = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const LoadingImage = styled.img`
  width: 140px;
  height: 140px;
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <LoadingImage src={Loading} alt="로딩 중" />
      <Message>분석 결과는 2~3분이 소요됩니다.</Message>
    </Wrapper>
  );
};

export default LoadingPage;
