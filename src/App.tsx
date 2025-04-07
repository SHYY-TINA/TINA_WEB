import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartLogin from "./pages/StartLogin";
import InputUserDetail from "./pages/InputUserDetail";
import Home from "./pages/Home";
import InputOtherDetail from "./pages/InputOtherDetail";
import UploadFile from "./pages/UploadFile";
import AnalysisResult from "./pages/AnalysisResult";
import ResultDetail from "./pages/ResultDetail";
import GatherResult from "./pages/GatherResult";
import Mbti from "./pages/Mbti";
import MbtiResult from "./pages/MbtiResult";
import UserProfileEdit from "./pages/UserProfileEdit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartLogin />} />
        <Route path="/input-user-detail" element={<InputUserDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/input-other-detail" element={<InputOtherDetail />} />
        <Route path="/upload-file" element={<UploadFile />} />
        <Route path="/other-result" element={<AnalysisResult isOther />} />
        <Route path="/my-result" element={<AnalysisResult />} />
        <Route path="/detail-result" element={<ResultDetail />} />
        <Route path="/gather-result" element={<GatherResult />} />
        <Route path="/match-mbti" element={<Mbti />} />
        <Route path="/mbti-result" element={<MbtiResult heartNum={4} />} />
        <Route
          path="/profile-edit"
          element={
            <UserProfileEdit userMbti="ISTP" userName="예진" jender="여성" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
