/* eslint-disable no-unused-vars */
import { WeatherData } from '@/types/Weather';
import { create } from 'zustand';
import weatherJson from '../data/Weather.json';
import { persist } from 'zustand/middleware';

interface SystemStore {
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
  vsCode: boolean;
  setVsCode: (vsCode: boolean) => void;
}

export const useSystem = create<SystemStore>()(
  persist(
    (set) => ({
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
      vsCode: false,
      setVsCode: (vsCode) => set({ vsCode })
    }),
    {
      name: 'use-system'
    }
  )
);
