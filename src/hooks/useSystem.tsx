/* eslint-disable no-unused-vars */
import { WeatherData } from '@/types/Weather';
import { create } from 'zustand';
import weatherJson from '../data/Weather.json';
import { persist } from 'zustand/middleware';
import { AppData, apps } from '@/data/Apps';

interface SystemStore {
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
  apps: AppData[];
  setApps: (apps: AppData[]) => void;
  bringToFront: (id: string) => void;
  closeApp: (id: string) => void;
  openApp: (id: string) => void;
  setSize: (id: string, size: { width: number; height: number }) => void;
  setPosition: (id: string, position: { x: number; y: number }) => void;
  resetStore: () => void;
}

export const useSystem = create<SystemStore>()(
  persist(
    (set, get) => ({
      bootProgress: 0,
      setBootProgress: (bootProgress) => set({ bootProgress }),
      booted: false,
      setBooted: (booted) => set({ booted }),
      logedIn: false,
      setLogedIn: (logedIn) => set({ logedIn }),
      wifi: true,
      setWifi: (wifi) => set({ wifi }),
      bluetooth: true,
      setBluetooth: (bluetooth) => set({ bluetooth }),
      airdrop: true,
      setAirdrop: (airdrop) => set({ airdrop }),
      volume: 50,
      setVolume: (volume) => set({ volume }),
      display: 100,
      setDisplay: (display) => set({ display }),
      weather: weatherJson,
      setWeather: (weather) => set({ weather }),
      nameOfTheDay: ['Rasmus', 'Amanda'],
      setNameOfTheDay: (nameOfTheDay) => set({ nameOfTheDay }),
      launchPad: false,
      setLaunchPad: (launchPad) => set({ launchPad }),
      apps,
      setApps: (apps) => set({ apps }),
      bringToFront: (id) => {
        const apps = get().apps;
        const maxZ = Math.max(...apps.map((app) => app.z)) + 1;
        const newApps = apps.map((app) =>
          app.id === id ? { ...app, z: maxZ } : app
        );
        set({ apps: newApps });
      },
      closeApp: (id) => {
        const apps = get().apps.map((app) =>
          app.id === id ? { ...app, isOpen: false } : app
        );
        set({ apps });
      },
      openApp: (id) => {
        const apps = get().apps.map((app) =>
          app.id === id ? { ...app, isOpen: true } : app
        );
        set({ apps });
      },
      setSize: (id, size) => {
        const newApps = get().apps.map((app) =>
          app.id === id ? { ...app, size } : app
        );
        set({ apps: newApps });
      },
      setPosition: (id, position) => {
        const newApps = get().apps.map((app) =>
          app.id === id ? { ...app, position } : app
        );
        set({ apps: newApps });
      },
      resetStore: () => {
        set({
          booted: false,
          logedIn: false,
          wifi: true,
          bluetooth: true,
          airdrop: true,
          volume: 50,
          display: 100,
          launchPad: false,
          apps: apps.map((app) => ({ ...app, isOpen: false }))
        });
      }
    }),
    {
      name: 'use-system-2'
    }
  )
);
