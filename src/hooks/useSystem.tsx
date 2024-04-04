import { create } from "zustand";

type SystemStore = {
  booted: boolean;
  setBooted: (booted: boolean) => void;
  logedIn: boolean;
  setLogedIn: (logedIn: boolean) => void;
  wifi: boolean;
  setWifi: (wifi: boolean) => void;
  bluetooth: boolean;
  setBluetooth: (bluetooth: boolean) => void;
  airdrop: boolean;
  setAirdrop: (airdrop: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  display: number;
  setDisplay: (display: number) => void;
};

export const useSystem = create<SystemStore>((set) => ({
  booted: false,
  setBooted: (booted: boolean) => set({ booted }),
  logedIn: false,
  setLogedIn: (logedIn: boolean) => set({ logedIn }),
  wifi: true,
  setWifi: (wifi: boolean) => set({ wifi }),
  bluetooth: true,
  setBluetooth: (bluetooth: boolean) => set({ bluetooth }),
  airdrop: true,
  setAirdrop: (airdrop: boolean) => set({ airdrop }),
  volume: 50,
  setVolume: (volume: number) => set({ volume }),
  display: 100,
  setDisplay: (display: number) => set({ display }),
}));
