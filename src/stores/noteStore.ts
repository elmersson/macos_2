/* eslint-disable no-unused-vars */
import { create, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { NoteAppProps, Note, FolderProps } from '@/data/notes';
import {
  initialNotesData,
  initialSelectedNotes,
  initialSelectedNote
} from './initialData';

export interface NoteStore {
  notes: NoteAppProps[];
  selectedNotes: string[];
  selectedNote: string;
  setSelectedNotes: (notes: string[]) => void;
  setSelectedNote: (note: string) => void;
  getNoteById: (noteId: string) => Note | undefined;
  updateNoteById: (noteId: string, noteData: Partial<Note>) => void;
  resetNoteStore: () => void;
}

const findNoteById = (
  folders: FolderProps[],
  noteId: string
): Note | undefined => {
  for (const folder of folders) {
    for (const note of folder.notes) {
      if (note.id === noteId) {
        return note;
      }
    }
    if (folder.folder && folder.folder.length > 0) {
      const foundNote = findNoteById(folder.folder, noteId);
      if (foundNote) {
        return foundNote;
      }
    }
  }
  return undefined;
};

export const createNoteStore = (): StoreApi<NoteStore> => {
  return create<NoteStore>()(
    persist(
      (set, get) => ({
        notes: initialNotesData,
        selectedNotes: initialSelectedNotes,
        selectedNote: initialSelectedNote,
        setSelectedNotes: (notes) => set({ selectedNotes: notes }),
        setSelectedNote: (note) => set({ selectedNote: note }),
        getNoteById: (noteId) => {
          for (const appProps of get().notes) {
            const foundNote = findNoteById(appProps.folders, noteId);
            if (foundNote) {
              return foundNote;
            }
          }
          return undefined;
        },
        updateNoteById: (noteId, noteData) => {
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
        resetNoteStore: () =>
          set({
            notes: initialNotesData,
            selectedNotes: initialSelectedNotes,
            selectedNote: initialSelectedNote
          })
      }),
      { name: 'note-store' }
    )
  );
};
