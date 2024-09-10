/* eslint-disable no-unused-vars */
import { StoreApi, create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  initialSystemData,
  initialWeatherData,
  initialNameOfTheDay
} from './initialData';
import { WeatherData } from '@/types/Weather';
import { SystemData, SystemPage } from '@/components/apps/system';

export interface SystemStore {
  closedIsPhone: boolean;
  setIsClosedPhone: (closedIsPhone: boolean) => void;
  isSleeping: boolean;
  setIsSleeping: (isSleeping: boolean) => void;
  bootProgress: number;
  setBootProgress: (bootProgress: number) => void;
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
  weather: WeatherData;
  setWeather: (weather: WeatherData) => void;
  nameOfTheDay: string[];
  setNameOfTheDay: (names: string[]) => void;
  launchPad: boolean;
  setLaunchPad: (launchPad: boolean) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
  activePage: SystemPage;
  setActivePage: (page: SystemPage) => void;
  systemHistory: string[];
  addToHistory: (id: string) => void;
  historyPosition: number;
  setHistoryPosition: (position: number) => void;
  resetSystemStore: () => void;
}

export const createSystemStore = (): StoreApi<SystemStore> => {
  return create<SystemStore>()(
    persist(
      (set, get) => ({
        ...initialSystemData,
        closedIsPhone: false,
        isSleeping: false,
        setIsSleeping: (isSleeping: boolean) => {
          console.log(isSleeping);
          set({ isSleeping });
          if (isSleeping) {
            console.log('display 0');

            set({ display: 0 });
          }
        },
        setIsClosedPhone: () => set({ closedIsPhone: true }),
        weather: initialWeatherData,
        nameOfTheDay: initialNameOfTheDay,
        setBootProgress: (bootProgress) => set({ bootProgress }),
        setBooted: (booted) => set({ booted }),
        setLogedIn: (logedIn) => set({ logedIn }),
        setWifi: (wifi) => set({ wifi }),
        setBluetooth: (bluetooth) => set({ bluetooth }),
        setAirdrop: (airdrop) => set({ airdrop }),
        setVolume: (volume) => set({ volume }),
        setDisplay: (display) => set({ display }),
        setWeather: (weather) => set({ weather }),
        setNameOfTheDay: (nameOfTheDay) => set({ nameOfTheDay }),
        setLaunchPad: (launchPad) => set({ launchPad }),
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
        toggle: () => set({ isOpen: !get().isOpen }),
        activePage: SystemData[0],
        setActivePage: (page: SystemPage) =>
          set((state) => {
            return { ...state, activePage: page };
          }),
        systemHistory: [],
        addToHistory: (id: string) =>
          set((state) => {
            if (state.historyPosition < state.systemHistory.length - 1) {
              state.systemHistory.splice(state.historyPosition + 1);
            }
            return {
              systemHistory: [...state.systemHistory, id]
            };
          }),
        setHistoryPosition: (position: number) =>
          set(() => ({
            historyPosition: position
          })),
        historyPosition: 0,
        resetSystemStore: () =>
          set({
            ...initialSystemData,
            weather: initialWeatherData,
            nameOfTheDay: initialNameOfTheDay
          })
      }),
      { name: 'system-store' }
    )
  );
};
