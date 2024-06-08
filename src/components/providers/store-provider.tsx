/* eslint-disable no-unused-vars */
'use client';

import { createContext, useRef, useContext, ReactNode } from 'react';
import { StoreApi, useStore } from 'zustand';
import { createSystemStore, SystemStore } from '@/stores/systemStore';
import { createAppStore, AppStore } from '@/stores/appStore';
import { createItermStore, ItermStore } from '@/stores/itermStore';
import { createNoteStore, NoteStore } from '@/stores/noteStore';
import { FinderStore, createFinderStore } from '@/stores/finderStore';
import { OutlookStore, createOutlookStore } from '@/stores/outlookStore';

const SystemStoreContext = createContext<StoreApi<SystemStore> | null>(null);
const AppStoreContext = createContext<StoreApi<AppStore> | null>(null);
const ItermStoreContext = createContext<StoreApi<ItermStore> | null>(null);
const NoteStoreContext = createContext<StoreApi<NoteStore> | null>(null);
const FinderStoreContext = createContext<StoreApi<FinderStore> | null>(null);
const OutlookStoreContext = createContext<StoreApi<OutlookStore> | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const systemStoreRef = useRef<StoreApi<SystemStore>>();
  const appStoreRef = useRef<StoreApi<AppStore>>();
  const itermStoreRef = useRef<StoreApi<ItermStore>>();
  const noteStoreRef = useRef<StoreApi<NoteStore>>();
  const finderStoreRef = useRef<StoreApi<FinderStore>>();
  const outlookStoreRef = useRef<StoreApi<OutlookStore>>();

  if (!systemStoreRef.current) {
    systemStoreRef.current = createSystemStore();
  }

  if (!appStoreRef.current) {
    appStoreRef.current = createAppStore();
  }

  if (!itermStoreRef.current) {
    itermStoreRef.current = createItermStore();
  }

  if (!noteStoreRef.current) {
    noteStoreRef.current = createNoteStore();
  }

  if (!finderStoreRef.current) {
    finderStoreRef.current = createFinderStore();
  }

  if (!outlookStoreRef.current) {
    outlookStoreRef.current = createOutlookStore();
  }

  return (
    <SystemStoreContext.Provider value={systemStoreRef.current}>
      <AppStoreContext.Provider value={appStoreRef.current}>
        <ItermStoreContext.Provider value={itermStoreRef.current}>
          <NoteStoreContext.Provider value={noteStoreRef.current}>
            <FinderStoreContext.Provider value={finderStoreRef.current}>
              <OutlookStoreContext.Provider value={outlookStoreRef.current}>
                {children}
              </OutlookStoreContext.Provider>
            </FinderStoreContext.Provider>
          </NoteStoreContext.Provider>
        </ItermStoreContext.Provider>
      </AppStoreContext.Provider>
    </SystemStoreContext.Provider>
  );
};

export const useSystemStore = <T,>(selector: (state: SystemStore) => T): T => {
  const context = useContext(SystemStoreContext);
  if (!context) {
    throw new Error('useSystemStore must be used within a StoreProvider');
  }
  return useStore(context, selector);
};

export const useAppStore = <T,>(selector: (state: AppStore) => T): T => {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new Error('useAppStore must be used within a StoreProvider');
  }
  return useStore(context, selector);
};

export const useItermStore = <T,>(selector: (state: ItermStore) => T): T => {
  const context = useContext(ItermStoreContext);
  if (!context) {
    throw new Error('useItermStore must be used within a StoreProvider');
  }
  return useStore(context, selector);
};

export const useNoteStore = <T,>(selector: (state: NoteStore) => T): T => {
  const context = useContext(NoteStoreContext);
  if (!context) {
    throw new Error('useNoteStore must be used within a StoreProvider');
  }
  return useStore(context, selector);
};

export const useFinderStore = <T,>(selector: (state: FinderStore) => T): T => {
  const context = useContext(FinderStoreContext);
  if (!context) {
    throw new Error('useFinderStore must be used within a StoreProvider');
  }
  return useStore(context, selector);
};

export const useOutlookStore = <T,>(
  selector: (state: OutlookStore) => T
): T => {
  const context = useContext(OutlookStoreContext);
  if (!context) {
    throw new Error('useOutlookStore must be used within a StoreProvider');
  }
  return useStore(context, selector);
};
