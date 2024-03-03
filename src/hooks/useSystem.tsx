import { create } from "zustand";

type SystemStore = {
  booted: boolean;
  setBooted: (booted: boolean) => void;
  logedIn: boolean;
  setLogedIn: (logedIn: boolean) => void;
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
};

export const useSystem = create<SystemStore>((set) => ({
  booted: false,
  setBooted: (booted: boolean) => set({ booted }),
  logedIn: false,
  setLogedIn: (logedIn: boolean) => set({ logedIn }),
  darkmode: true,
  setDarkmode: (darkmode: boolean) => set({ darkmode }),
}));
