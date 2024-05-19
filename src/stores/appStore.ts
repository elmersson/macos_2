/* eslint-disable no-unused-vars */
import { StoreApi, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppData } from '@/data/Apps';
import { initialAppData } from './initialData';

export interface AppStore {
  apps: AppData[];
  activeApp: string;
  setActiveApp: (id: string) => void;
  setApps: (apps: AppData[]) => void;
  bringToFront: (id: string) => void;
  closeApp: (id: string) => void;
  openApp: (id: string) => void;
  minimizeApp: (id: string) => void;
  setSize: (id: string, size: { width: number; height: number }) => void;
  setPosition: (id: string, position: { x: number; y: number }) => void;
  resetAppStore: () => void;
}

export const createAppStore = (): StoreApi<AppStore> => {
  return create<AppStore>()(
    persist(
      (set, get) => ({
        apps: initialAppData,
        activeApp: 'finder',
        setActiveApp: (id) => set({ activeApp: id }),
        setApps: (apps) => set({ apps }),
        bringToFront: (id) => {
          const apps = get().apps;
          const maxZ = Math.max(...apps.map((app) => app.z)) + 1;
          const newApps = apps.map((app) =>
            app.id === id ? { ...app, z: maxZ } : app
          );
          set({ apps: newApps, activeApp: id });
        },
        closeApp: (id) => {
          const apps = get().apps.map((app) =>
            app.id === id ? { ...app, isOpen: false } : app
          );
          set({ apps });
        },
        openApp: (id) => {
          const apps = get().apps.map((app) =>
            app.id === id ? { ...app, isOpen: true, isMinimized: false } : app
          );
          set({ apps });
        },
        minimizeApp: (id) => {
          const newApps = get().apps.map((app) =>
            app.id === id ? { ...app, isMinimized: true } : app
          );
          set({ apps: newApps });
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
        resetAppStore: () => set({ apps: initialAppData, activeApp: 'finder' })
      }),
      { name: 'apps-store' }
    )
  );
};
