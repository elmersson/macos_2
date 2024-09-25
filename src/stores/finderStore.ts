/* eslint-disable no-unused-vars */
import type { FinderData } from '@/data/finderData';
import { create, type StoreApi } from 'zustand';
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
  recent: FinderData[];
  addToRecent: (data: FinderData) => void;
  bin: FinderData;
  removeById: (id: string) => void;
  restoreFromBin: (id: string) => void;
  permanentlyDeleteFromBin: (id: string) => void;
  resetFinderStore: () => void;
  airdropSetting: 'No One' | 'Contacts Only' | 'Everyone';
  setAirdropSetting: (setting: 'No One' | 'Contacts Only' | 'Everyone') => void;
}

export const createFinderStore = (): StoreApi<FinderStore> => {
  return create<FinderStore>()(
    persist(
      (set) => ({
        ...initialFinderData,
        airdropSetting: 'Contacts Only',
        setAirdropSetting: (setting) =>
          set(() => ({ airdropSetting: setting })),
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
        recent: [],
        addToRecent: (data: FinderData) =>
          set((state) => {
            const existingIndex = state.recent.findIndex(
              (item) => item.id === data.id
            );
            if (existingIndex !== -1) {
              state.recent.splice(existingIndex, 1);
            }
            return {
              recent: [data, ...state.recent]
            };
          }),
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
