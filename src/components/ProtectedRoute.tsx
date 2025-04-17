import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/shared/store/auth";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { accessToken } = useAuthStore();

  if (!accessToken) {
    alert("로그인이 필요합니다!");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
