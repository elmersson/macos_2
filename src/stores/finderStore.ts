/* eslint-disable no-unused-vars */
import { create, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FinderStore {
  selectedFinderId: string;
  setSelectedFinderId: (id: string) => void;
}

export const createFinderStore = (): StoreApi<FinderStore> => {
  return create<FinderStore>()(
    persist(
      (set) => ({
        selectedFinderId: 'recent',
        setSelectedFinderId: (id) => set({ selectedFinderId: id })
      }),
      { name: 'finder-store' }
    )
  );
};
