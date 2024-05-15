/* eslint-disable no-unused-vars */
import { WeatherData } from '@/types/Weather';
import { create } from 'zustand';
import weatherJson from '../data/Weather.json';
import { persist } from 'zustand/middleware';
import { AppData, apps } from '@/data/Apps';
import { starterNotes, NoteAppProps, Note } from '@/data/notes';

interface SystemStore {
  bootProgress: number;
  setBootProgress: (bootProgress: number) => void;
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
  apps: AppData[];
  setApps: (apps: AppData[]) => void;
  bringToFront: (id: string) => void;
  closeApp: (id: string) => void;
  openApp: (id: string) => void;
  minimizeApp: (id: string) => void;
  setSize: (id: string, size: { width: number; height: number }) => void;
  setPosition: (id: string, position: { x: number; y: number }) => void;
  resetStore: () => void;
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
  notes: NoteAppProps[];
  selectedNotes: string[];
  selectedNote: string;
  setSelectedNotes: (notes: string[]) => void;
  setSelectedNote: (note: string) => void;
  getNoteById: (noteId: string) => Note | undefined;
  updateNoteById: (noteId: string, noteData: Partial<Note>) => void;
  selectedFinderId: string;
  setSelectedFinderId: (finderId: string) => void;
}

export const useSystem = create<SystemStore>()(
  persist(
    (set, get) => ({
      bootProgress: 0,
      setBootProgress: (bootProgress) => set({ bootProgress }),
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
      apps,
      setApps: (apps) => set({ apps }),
      bringToFront: (id) => {
        const apps = get().apps;
        const maxZ = Math.max(...apps.map((app) => app.z)) + 1;
        const newApps = apps.map((app) =>
          app.id === id ? { ...app, z: maxZ } : app
        );
        set({ apps: newApps });
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
      resetStore: () => {
        set({
          booted: false,
          logedIn: false,
          wifi: true,
          bluetooth: true,
          airdrop: true,
          volume: 50,
          display: 100,
          launchPad: false,
          iterm2: {
            history: [],
            curDir: undefined,
            curCommand: undefined,
            visibleHistory: 0
          },
          apps: apps.map((app) => ({ ...app, isOpen: false })),
          selectedNotes: [
            'work-meeting-notes',
            'work-project-ideas',
            'work-cv',
            'work-personal-letter'
          ],
          selectedNote: 'work-meeting-notes'
        });
      },
      iterm2: {
        history: [],
        curDir: undefined,
        curCommand: undefined,
        visibleHistory: 0
      },
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
      notes: [{ dir: 'ICloud', folders: starterNotes }],
      selectedNotes: [
        'work-meeting-notes',
        'work-project-ideas',
        'work-cv',
        'work-personal-letter'
      ],
      selectedNote: 'work-meeting-notes',
      setSelectedNote: (noteId) => set({ selectedNote: noteId }),
      setSelectedNotes: (noteIds) => set({ selectedNotes: noteIds }),
      getNoteById: (noteId) => {
        const allNotes = get().notes.flatMap((folder) =>
          folder.folders.flatMap((f) => f.notes)
        );
        return allNotes.find((note) => note.id === noteId);
      },
      updateNoteById: (noteId, noteData) => {
        console.log('Updating note:', noteId, noteData);
        const updatedNotes = get().notes.map((folder) => ({
          ...folder,
          folders: folder.folders.map((folder) => ({
            ...folder,
            notes: folder.notes.map((note) =>
              note.id === noteId ? { ...note, ...noteData } : note
            )
          }))
        }));
        set({ notes: updatedNotes });
      },
      selectedFinderId: 'recent',
      setSelectedFinderId: (id) => set({ selectedFinderId: id })
    }),
    {
      name: 'use-system-8'
    }
  )
);
