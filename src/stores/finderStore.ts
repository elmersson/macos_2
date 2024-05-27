/* eslint-disable no-unused-vars */
import { FinderData } from '@/data/finderData';
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
  removeById: (id: string) => void;
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
          set((state) => {
            if (state.historyPosition < state.finderHistory.length - 1) {
              state.finderHistory.splice(state.historyPosition + 1);
            }
            return {
              finderHistory: [...state.finderHistory, id]
            };
          }),
        setHistoryPosition: (position: number) =>
          set(() => ({
            historyPosition: position
          })),
        removeById: (id: string) =>
          set((state) => {
            const removeNodeById = (data: FinderData[]): FinderData[] => {
              return data
                .filter((item) => item.id !== id)
                .map((item) => ({
                  ...item,
                  children: item.children ? removeNodeById(item.children) : []
                }));
            };
            return {
              finderDataSet: removeNodeById(state.finderDataSet)
            };
          }),
        resetFinderStore: () => set({ ...initialFinderData })
      }),
      { name: 'finder-store-2' }
    )
  );
};
