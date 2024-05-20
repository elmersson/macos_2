/* eslint-disable no-unused-vars */
import { finderData, FinderData } from '@/data/finderData';
import { create, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialFinderData } from './initialData';

export interface FinderStore {
  finderDataSet: FinderData[];
  selectedFinderId: string;
  setSelectedFinderId: (id: string) => void;
  finderHistory: string[];
  addToHistory: (id: string) => void;
  historyPosition: number;
  setHistoryPosition: (position: number) => void;
  resetFinderStore: () => void;
}

export const createFinderStore = (): StoreApi<FinderStore> => {
  return create<FinderStore>()(
    persist(
      (set) => ({
        ...initialFinderData,
        setSelectedFinderId: (id) =>
          set((state) => {
            state.addToHistory(state.selectedFinderId);
            return { selectedFinderId: id };
          }),
        addToHistory: (id: string) =>
          set((state) => ({
            finderHistory: [...state.finderHistory, id],
            historyPosition: state.historyPosition + 1
          })),
        setHistoryPosition: (position: number) =>
          set((state) => ({
            historyPosition: state.historyPosition + position
          })),
        resetFinderStore: () => set({ ...initialFinderData })
      }),
      { name: 'finder-store-2' }
    )
  );
};
