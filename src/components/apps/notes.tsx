'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/apple_accordion';
import { ScrollArea } from '../ui/scroll-area';
import { IoFolderOutline } from 'react-icons/io5';
import { PiUserCircleFill } from 'react-icons/pi';
import { DraggableItem } from './draggable-item';
import { AppProps } from '@/data/Apps';
import { useSystem } from '@/hooks/useSystem';
import { NoteAppProps, FolderProps, Note } from '@/data/notes';
import {
  format,
  isToday,
  isYesterday,
  isThisYear,
  differenceInCalendarDays
} from 'date-fns';
import { Separator } from '../ui/separator';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export function Notes({ appData }: AppProps) {
  const {
    notes,
    selectedNotes,
    setSelectedNotes,
    selectedNote,
    setSelectedNote,
    updateNoteById,
    getNoteById
  } = useSystem();

  const note = getNoteById(selectedNote);

  return (
    <DraggableItem appData={appData}>
      <div className="w-full h-full bg-transparent">
        <div className="flex h-full">
          <ScrollArea className="w-80 bg-slate-800/90 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/90 py-4">
            <div className="flex flex-row items-center justify-between py-2 px-4">
              <div className="flex flex-row items-center space-x-2">
                <PiUserCircleFill className="text-yellow-500" />
                <span>Shared</span>
              </div>

              <span className="text-neutral-400">1</span>
            </div>

            <Folders data={notes} setSelectedNotes={setSelectedNotes} />
          </ScrollArea>
          <ScrollArea className=" w-96 bg-neutral-800 p-4">
            <MonthList
              notes={selectedNotes}
              setSelectedNote={setSelectedNote}
              getNoteById={getNoteById}
            />
          </ScrollArea>
          <ScrollArea className="flex w-full p-4 bg-neutral-100 dark:bg-neutral-900">
            <Content note={note} updateNoteById={updateNoteById} />
          </ScrollArea>
        </div>
      </div>
    </DraggableItem>
  );
}

const FolderAccordion = ({
  folders,
  setSelectedNotes
}: {
  folders: FolderProps[];
  // eslint-disable-next-line no-unused-vars
  setSelectedNotes: (noteIds: string[]) => void;
}) => {
  return (
    <>
      {folders.map((folder) => (
        <Accordion
          key={folder.id}
          type="single"
          collapsible
          className="w-full pl-2"
        >
          <AccordionItem value={folder.id}>
            <AccordionTrigger
              className="flex flex-row items-center space-x-1 text-sm text-neutral-300 py-2"
              chevronPosition={folder.folder ? 'left' : 'none'}
              onClick={() =>
                setSelectedNotes(folder.notes.map((note) => note.id))
              }
            >
              <div className="flex flex-row items-center justify-between w-full pr-2">
                <div className="flex flex-row items-center space-x-2">
                  <IoFolderOutline className="size-[18px] text-yellow-500" />
                  <span className="line-clamp-1">{folder.title}</span>
                </div>
                <span className="line-clamp-1">{folder.notes.length}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {folder.folder && (
                <FolderAccordion
                  folders={folder.folder}
                  setSelectedNotes={setSelectedNotes}
                />
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

const Folders = ({
  data,
  setSelectedNotes
}: {
  data: NoteAppProps[];
  // eslint-disable-next-line no-unused-vars
  setSelectedNotes: (noteIds: string[]) => void;
}) => {
  return (
    <>
      {data.map((accordion, index) => (
        <Accordion
          key={accordion.dir}
          type="single"
          collapsible
          className="w-full"
          defaultValue={`item-${index}`}
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="text-sm text-neutral-300 px-4">
              {accordion.dir}
            </AccordionTrigger>
            <AccordionContent>
              {accordion.folders.length > 0 && (
                <FolderAccordion
                  folders={accordion.folders}
                  setSelectedNotes={setSelectedNotes}
                />
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

interface MonthListProps {
  notes: string[];
  // eslint-disable-next-line no-unused-vars
  setSelectedNote: (noteId: string) => void;
  // eslint-disable-next-line no-unused-vars
  getNoteById: (noteId: string) => Note | undefined;
}

interface GroupedNotes {
  [key: string]: Note[];
}

function getDateCategory(timeStamp: Date): string {
  const now = new Date();

  if (isToday(timeStamp)) {
    return 'Today';
  }

  if (isYesterday(timeStamp)) {
    return 'Yesterday';
  }

  const dayDiff = differenceInCalendarDays(now, timeStamp);
  if (dayDiff < 30) {
    return 'Last 30 days';
  } else if (isThisYear(timeStamp)) {
    return format(timeStamp, 'MMMM');
  } else {
    return format(timeStamp, 'yyyy');
  }
}

function compareCategories(a: string, b: string): number {
  if (a === 'Today') return -1;
  if (b === 'Today') return 1;
  if (a === 'Yesterday') return -1;
  if (b === 'Yesterday') return 1;
  if (a === 'Last 30 days') return -1;
  if (b === 'Last 30 days') return 1;
  if (a.match(/^\d{4}$/) && b.match(/^\d{4}$/)) {
    return b.localeCompare(a);
  }
  if (a.match(/^[A-Z][a-z]+$/) && b.match(/^[A-Z][a-z]+$/)) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return months.indexOf(b) - months.indexOf(a);
  }
  return 0;
}

const MonthList = ({ notes, setSelectedNote, getNoteById }: MonthListProps) => {
  const allNotes = notes.map((id) => getNoteById(id)).filter(Boolean) as Note[];

  const sortedNotes = [...allNotes].sort(
    (a, b) => new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()
  );
  const groupedNotes = sortedNotes.reduce<GroupedNotes>((acc, note) => {
    const category = getDateCategory(note.timeStamp);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(note);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedNotes).sort(compareCategories);

  return (
    <div className="space-y-4">
      {sortedCategories.map((category, index) => (
        <div key={category}>
          <span className="font-bold text-sm text-neutral-400">{category}</span>
          {index === 0 && <Separator className="bg-neutral-400/20 my-2" />}
          {groupedNotes[category].map((note, index, array) => (
            <>
              <NoteCard
                key={note.id}
                title={note.title}
                date={format(note.timeStamp, 'yyyy-MM-dd')}
                preview={note.content}
                onClick={() => setSelectedNote(note.id)}
              />
              {index !== array.length - 1 && (
                <Separator className="bg-neutral-400/20 mx-4 my-2" />
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

interface NoteCardProps {
  title: string;
  date: string;
  preview: string;
  onClick(): void;
}

function NoteCard({ title, date, preview, onClick }: NoteCardProps) {
  return (
    <div className="hover:bg-yellow-500 rounded-lg px-4 py-2" onClick={onClick}>
      <span className="font-bold line-clamp-1">{title}</span>
      <div className="space-x-2 text-sm line-clamp-1">
        <span>{date}</span>
        <span className="text-neutral-400">{preview}</span>
      </div>
    </div>
  );
}

interface ContentProps {
  note: Note | undefined;
  // eslint-disable-next-line no-unused-vars
  updateNoteById: (noteId: string, noteData: Partial<Note>) => void;
}

function Content({ note, updateNoteById }: ContentProps) {
  if (!note) {
    return;
  }
  const formattedDate = format(
    new Date(note.timeStamp),
    "d MMMM yyyy 'at' HH:mm"
  );

  const initialConfig = {
    namespace: 'NoteContent',
    theme: {
      paragraph: 'text-md'
    },
    onError: (error: Error) => {
      console.error('Lexical editor encountered an error:', error);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    if (newTitle !== note.title) {
      updateNoteById(note.id, { title: newTitle });
    }
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="flex flex-col space-y-2 caret-yellow-400 selection:bg-yellow-400/50">
        <span className="text-neutral-400 text-sm flex justify-center">
          {formattedDate}
        </span>
        <input
          className="text-2xl font-bold outline-none w-full bg-transparent"
          value={note.title}
          onChange={handleTitleChange}
          placeholder="Enter title..."
        />
        <Editor note={note} updateNoteById={updateNoteById} />
      </div>
    </LexicalComposer>
  );
}

interface EditorProps {
  note: Note;
  // eslint-disable-next-line no-unused-vars
  updateNoteById: (noteId: string, noteData: Partial<Note>) => void;
}

function Editor({ note, updateNoteById }: EditorProps) {
  const editor = useLexicalComposerContext()[0];

  useEffect(() => {
    editor.update(() => {
      const root = $getRoot();
      root.clear();
      const paragraphNode = $createParagraphNode();
      paragraphNode.append($createTextNode(note.content));
      root.append(paragraphNode);
    });
  }, [editor, note.content]);

  const handleBlur = () => {
    editor.update(() => {
      const editorState = editor.getEditorState();
      editorState.read(() => {
        const root = $getRoot();
        const updatedContent = root.getTextContent();
        if (updatedContent !== note.content) {
          updateNoteById(note.id, {
            content: updatedContent,
            timeStamp: new Date()
          });
        }
      });
    });
  };

  return (
    <RichTextPlugin
      contentEditable={
        <ContentEditable
          className="prose prose-lg focus:outline-none"
          onBlur={handleBlur}
        />
      }
      placeholder={null}
      ErrorBoundary={LexicalErrorBoundary}
    />
  );
}
