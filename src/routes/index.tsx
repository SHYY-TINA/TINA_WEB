import StartLogin from "../pages/StartLogin";
import InputUserDetail from "../pages/InputUserDetail";
import Home from "../pages/Home";
import InputOtherDetail from "../pages/InputOtherDetail";
import UploadFile from "../pages/UploadFile";
import GatherResult from "../pages/GatherResult";
import Mbti from "../pages/Mbti";
import MbtiResult from "../pages/MbtiResult";
import UserProfileEdit from "../pages/UserProfileEdit";
import { useRoutes } from "react-router-dom";
import KakaoRedirect from "@/pages/auth/KakaoRedirect";
import ProtectedRoute from "@/components/ProtectedRoute";
import Withdrawal from "@/pages/Withdrawal";
import AnalysisResult from "@/pages/AnalysisResult";

function Router() {
  return useRoutes([
    {
      path: "/",
      children: [{ index: true, element: <StartLogin /> }],
    },
    { path: "/oauth/code", element: <KakaoRedirect /> },
    {
      path: "/input-user-detail",
      element: <InputUserDetail />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/input-other-detail",
      element: <InputOtherDetail />,
    },
    {
      path: "/upload-file",
      element: <UploadFile />,
    },
    {
      path: "/result",
      element: <AnalysisResult />,
    },
    {
      path: "/gather-result",
      element: (
        <ProtectedRoute>
          <GatherResult />
        </ProtectedRoute>
      ),
    },
    {
      path: "/mbti-match",
      element: <Mbti />,
    },
    {
      path: "/mbti-result",
      element: <MbtiResult />,
    },
    {
      path: "/profile-edit",
      element: (
        <ProtectedRoute>
          <UserProfileEdit />
        </ProtectedRoute>
      ),
    },
    {
      path: "/withdrawal",
      element: (
        <ProtectedRoute>
          <Withdrawal />
        </ProtectedRoute>
      ),
    },
  ]);
}

export default Router;
