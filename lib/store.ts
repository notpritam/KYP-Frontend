import { log } from "console";
import { use } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Store {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
export enum Role {
  USER = "user",
  RESTAURANT = "restaurant",
}

interface User {
  id: number;
  name: string;
  role: Role;
}

export const useKYPStore = create<Store>(
  persist(
    (set, get) => ({
      user: null,
      login: (user: User) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "kyp", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  ) as any // Add this type assertion to fix the error
);
