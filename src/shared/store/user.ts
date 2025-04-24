import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserInfoState {
  nickname: string;
  mbti: string;
  gender: string;
  setUserInfo: (info: {
    nickname: string;
    mbti: string;
    gender: string;
  }) => void;
  clearUserInfo: () => void;
}

export const useUserInfoStore = create<UserInfoState>()(
  persist(
    (set) => ({
      nickname: "",
      mbti: "",
      gender: "",
      setUserInfo: ({ nickname, mbti, gender }) =>
        set({ nickname, mbti, gender }),
      clearUserInfo: () => set({ nickname: "", mbti: "", gender: "" }),
    }),
    {
      name: "user-info-storage",
    },
  ),
);
