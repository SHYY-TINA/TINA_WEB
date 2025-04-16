import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (access: string, refresh: string) => void;
  clear: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  setTokens: (access, refresh) =>
    set({ accessToken: access, refreshToken: refresh }),
  clear: () => set({ accessToken: null, refreshToken: null }),
}));
