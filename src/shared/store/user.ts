import { create } from "zustand";

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

export const useUserInfoStore = create<UserInfoState>((set) => ({
  nickname: "",
  mbti: "",
  gender: "",
  setUserInfo: ({ nickname, mbti, gender }) => set({ nickname, mbti, gender }),
  clearUserInfo: () => set({ nickname: "", mbti: "", gender: "" }),
}));
