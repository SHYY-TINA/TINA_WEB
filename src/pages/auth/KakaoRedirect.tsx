import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/shared/lib/useLogin";

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const { mutate, data, isPending, isError, error } = useLogin();

  useEffect(() => {
    if (code) {
      mutate(code);
    }
  }, [code, mutate]);

  useEffect(() => {
    if (data?.tokenResponse?.accessToken) {
      const destination = data.detail ? "/home" : "/input-user-detail";
      navigate(destination);
    }
  }, [data, navigate]);

  useEffect(() => {
    if (isError) {
      console.error("로그인 실패:", error);
      alert("로그인 실패! 다시 시도해주세요.");
      navigate("/");
    }
  }, [isError, error, navigate]);

  if (isPending) return <div>로그인 처리 중입니다...</div>;

  return null;
};

export default KakaoRedirect;
