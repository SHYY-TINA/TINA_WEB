import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/shared/lib/useLogin";
import { useAuthStore } from "@/shared/store/auth";

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const { setTokens } = useAuthStore();

  const { mutate, data, isPending, isError, error } = useLogin();

  useEffect(() => {
    if (code) {
      mutate(code);
    }
  }, [code, mutate]);

  useEffect(() => {
    const access = data?.tokenResponse?.accessToken;
    const refresh = data?.tokenResponse?.refreshToken;

    if (access && refresh) {
      setTokens(access, refresh);
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      const destination = data.detail ? "/home" : "/input-user-detail";
      navigate(destination);
    }
  }, [data, navigate, setTokens]);

  useEffect(() => {
    if (isError) {
      alert("로그인 실패! 다시 시도해주세요.");
      navigate("/");
    }
  }, [isError, error, navigate]);

  if (isPending) return <div>로그인 처리 중입니다...</div>;

  return null;
};

export default KakaoRedirect;
