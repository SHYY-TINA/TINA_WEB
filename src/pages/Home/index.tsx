import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Word from "@/assets/illustration/word";
import UserProfile from "@/assets/icons/userProfile";
import Choice from "@/components/Choice";
import ProfileEdit from "@/components/ProfileEdit";
import { useAuthStore } from "@/shared/store/auth";

const Home = () => {
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const profileRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshToken = useAuthStore((state) => state.refreshToken);
  console.log("accessToken:", accessToken);
  console.log("refreshToken:", refreshToken);

  const ChoiceDetail = [
    { url: "/input-other-detail" },
    { url: "/input-other-detail" },
    { url: "/gather-result" },
    { url: "/mbti-match" },
  ];

  const handleNavigate = () => {
    const selected = ChoiceDetail[index];
    if (selected) navigate(selected.url);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setShowProfileEdit(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.Layout>
      <S.Header>
        <Word />
        <S.ProfileWrapper ref={profileRef}>
          <S.Profile onClick={() => setShowProfileEdit((prev) => !prev)}>
            <UserProfile />
          </S.Profile>
          {showProfileEdit && <ProfileEdit />}
        </S.ProfileWrapper>
      </S.Header>
      <S.Main>
        <Choice index={index} setIndex={setIndex} />
        <S.Button onClick={handleNavigate}>바로가기</S.Button>
      </S.Main>
    </S.Layout>
  );
};

export default Home;
