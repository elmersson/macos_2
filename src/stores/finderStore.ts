/* eslint-disable no-unused-vars */
import { FinderData } from '@/data/finderData';
import { create, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialFinderData } from './initialData';
import Trashcan from '@/assets/apps/trashcan.png';

export interface FinderStore {
  finderDataSet: FinderData[];
  selectedFinderId: string;
  setSelectedFinderId: (id: string) => void;
  finderHistory: string[];
  addToHistory: (id: string) => void;
  historyPosition: number;
  setHistoryPosition: (position: number) => void;
  bin: FinderData;
  removeById: (id: string) => void;
  restoreFromBin: (id: string) => void;
  permanentlyDeleteFromBin: (id: string) => void;
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
        bin: {
          id: 'bin',
          title: 'Bin',
          type: 'folder',
          iconImg: Trashcan,
          children: []
        },
        removeById: (id: string) =>
          set((state) => {
            const removeNodeById = (data: FinderData[]): FinderData[] => {
              return data.filter((item) => {
                if (item.id === id) {
                  set((state) => ({
                    bin: {
                      ...state.bin,
                      children: state.bin.children
                        ? [...state.bin.children, item]
                        : [item]
                    }
                  }));
                  return false;
                }
                if (item.children) {
                  item.children = removeNodeById(item.children);
                }
                return true;
              });
            };
            return {
              finderDataSet: removeNodeById(state.finderDataSet)
            };
          }),
        restoreFromBin: (id: string) =>
          set((state) => {
            const binChildren = state.bin.children || [];
            const itemToRestore = binChildren.find((item) => item.id === id);
            if (!itemToRestore) return state;

            const removeFromBin = binChildren.filter((item) => item.id !== id);
            return {
              bin: {
                ...state.bin,
                children: removeFromBin
              },
              finderDataSet: [...state.finderDataSet, itemToRestore]
            };
          }),
        permanentlyDeleteFromBin: (id: string) =>
          set((state) => ({
            bin: {
              ...state.bin,
              children: state.bin.children
                ? state.bin.children.filter((item) => item.id !== id)
                : []
            }
          })),
        resetFinderStore: () => set({ ...initialFinderData })
      }),
      { name: 'finder-store-2' }
    )
  );
};
