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
        setAirdropSetting: (
          setting: 'No One' | 'Contacts Only' | 'Everyone'
        ): void => set(() => ({ airdropSetting: setting })),
        setSelectedFinderId: (id: string): void => {
          set((state) => {
            state.addToHistory(state.selectedFinderId);
            return { selectedFinderId: id };
          });
        },
        addToHistory: (id: string): void => {
          set((state) => {
            const newHistory = state.finderHistory.slice(
              0,
              state.historyPosition + 1
            );
            return {
              finderHistory: [...newHistory, id],
              historyPosition: newHistory.length
            };
          });
        },
        setHistoryPosition: (position: number): void =>
          set((state) => ({
            historyPosition: Math.min(position, state.finderHistory.length - 1)
          })),
        recent: [],
        addToRecent: (data: FinderData): void => {
          set((state) => {
            const existingIndex = state.recent.findIndex(
              (item) => item.id === data.id
            );
            const newRecent =
              existingIndex !== -1
                ? [
                    data,
                    ...state.recent.filter(
                      (_, index) => index !== existingIndex
                    )
                  ]
                : [data, ...state.recent];
            return {
              recent: newRecent
            };
          });
        },
        bin: {
          id: 'bin',
          title: 'Bin',
          type: 'folder',
          iconImg: Trashcan,
          children: []
        },
        removeById: (id: string): void => {
          set((state) => {
            const removeNodeById = (data: FinderData[]): FinderData[] => {
              const updatedData: FinderData[] = [];
              for (const item of data) {
                if (item.id === id) {
                  set((state) => ({
                    bin: {
                      ...state.bin,
                      children: [...(state.bin.children || []), item]
                    }
                  }));
                  continue;
                }
                updatedData.push({
                  ...item,
                  children: item.children
                    ? removeNodeById(item.children)
                    : undefined
                });
              }
              return updatedData;
            };

            return {
              finderDataSet: removeNodeById(state.finderDataSet)
            };
          });
        },
        restoreFromBin: (id: string): void => {
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
          });
        },
        permanentlyDeleteFromBin: (id: string): void => {
          set((state) => ({
            bin: {
              ...state.bin,
              children: (state.bin.children || []).filter(
                (item) => item.id !== id
              )
            }
          }));
        },
        resetFinderStore: (): void => set({ ...initialFinderData })
      }),
      { name: 'finder-store-2' }
    )
  );
};
