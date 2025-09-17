import { create } from "zustand";

interface UserState {
  user: string | null;         
  login: (user: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null}),
}));