import StartLogin from "../pages/StartLogin";
import InputUserDetail from "../pages/InputUserDetail";
import Home from "../pages/Home";
import InputOtherDetail from "../pages/InputOtherDetail";
import UploadFile from "../pages/UploadFile";
import AnalysisResult from "../pages/AnalysisResult";
import GatherResult from "../pages/GatherResult";
import Mbti from "../pages/Mbti";
import MbtiResult from "../pages/MbtiResult";
import UserProfileEdit from "../pages/UserProfileEdit";
import { useRoutes } from "react-router-dom";
import KakaoRedirect from "@/pages/auth/KakaoRedirect";
import ProtectedRoute from "@/components/ProtectedRoute";
import Withdrawal from "@/pages/Withdrawal";

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
      element: (
        // <ProtectedRoute>
        <InputOtherDetail />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/upload-file",
      element: (
        // <ProtectedRoute>
        <UploadFile />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/other-result",
      element: (
        // <ProtectedRoute>
        <AnalysisResult isOther />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/my-result",
      element: (
        // <ProtectedRoute>
        <AnalysisResult />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/gather-result",
      element: (
        // <ProtectedRoute>
        <GatherResult />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/mbti-match",
      element: (
        // <ProtectedRoute>
        <Mbti />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/mbti-result",
      element: (
        // <ProtectedRoute>
        <MbtiResult heartNum={4} />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/profile-edit",
      element: (
        <ProtectedRoute>
          <UserProfileEdit />
        </ProtectedRoute>
      ),
    },
    { path: "/withdrawal", element: <Withdrawal /> },
    // { path: '*', element: <NotFound /> }
  ]);
}

export default Router;
