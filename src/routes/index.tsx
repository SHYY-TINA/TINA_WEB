import StartLogin from "../pages/StartLogin";
import InputUserDetail from "../pages/InputUserDetail";
import Home from "../pages/Home";
import InputOtherDetail from "../pages/InputOtherDetail";
import UploadFile from "../pages/UploadFile";
import AnalysisResult from "../pages/AnalysisResult";
import ResultDetail from "../pages/ResultDetail";
import GatherResult from "../pages/GatherResult";
import Mbti from "../pages/Mbti";
import MbtiResult from "../pages/MbtiResult";
import UserProfileEdit from "../pages/UserProfileEdit";
import { useRoutes } from "react-router-dom";

function Router() {
  return useRoutes([
    {
      path: "/",
      children: [{ index: true, element: <StartLogin /> }],
    },
    { path: "/input-user-detail", element: <InputUserDetail /> },
    { path: "/home", element: <Home /> },
    { path: "/input-other-detail", element: <InputOtherDetail /> },
    { path: "/upload-file", element: <UploadFile /> },
    { path: "/other-result", element: <AnalysisResult isOther /> },
    { path: "/my-result", element: <AnalysisResult /> },
    { path: "/detail-result", element: <ResultDetail /> },
    { path: "/gather-result", element: <GatherResult /> },
    { path: "/mbti-match", element: <Mbti /> },
    { path: "/mbti-result", element: <MbtiResult heartNum={4} /> },
    {
      path: "/profile-edit",
      element: (
        <UserProfileEdit userMbti="ISTP" userName="예진" jender="여성" />
      ),
    },
    // { path: '*', element: <NotFound /> }
  ]);
}

export default Router;
