/* eslint-disable no-unused-vars */
import { StoreApi, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialIterm2Data } from './initialData';

export interface ItermStore {
  iterm2: {
    history: { command: string; dir?: string }[];
    curDir?: string;
    curCommand?: number;
    visibleHistory: number;
  };
  addHistory: (history: {
    command: string;
    dir?: string;
    index: number;
  }) => void;
  setCurDir: (dir: string) => void;
  setVisibleHistory: (index: number) => void;
  resetItermStore: () => void;
}

export const createItermStore = (): StoreApi<ItermStore> => {
  return create<ItermStore>()(
    persist(
      (set) => ({
        iterm2: initialIterm2Data,
        addHistory: (entry) =>
          set((state) => ({
            iterm2: {
              ...state.iterm2,
              history: [...state.iterm2.history, entry],
              curCommand: entry.index
            }
          })),
        setCurDir: (dir) =>
          set((state) => ({
            iterm2: {
              ...state.iterm2,
              curDir: dir
            }
          })),
        setVisibleHistory: (index) =>
          set((state) => ({
            iterm2: {
              ...state.iterm2,
              visibleHistory: index
            }
          })),
        resetItermStore: () => set({ iterm2: initialIterm2Data })
      }),
      { name: 'iterm-store' }
    )
  );
};
