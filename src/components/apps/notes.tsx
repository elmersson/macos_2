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

export function Notes({ appData }: AppProps) {
  const {
    notes,
    selectedNotes,
    setSelectedNotes,
    selectedNote,
    setSelectedNote
  } = useSystem();

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
            />
          </ScrollArea>
          <ScrollArea className="flex w-full p-4 bg-neutral-100 dark:bg-neutral-900">
            <Content note={selectedNote} />
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
  setSelectedNotes: (notes: Note[]) => void;
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
              onClick={() => setSelectedNotes(folder.notes)}
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
  setSelectedNotes: (notes: Note[]) => void;
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
  notes: Note[];
  // eslint-disable-next-line no-unused-vars
  setSelectedNote: (note: Note) => void;
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

const MonthList = ({ notes, setSelectedNote }: MonthListProps) => {
  const sortedNotes = [...notes].sort(
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
                preview={note.id}
                onClick={() => setSelectedNote(note)}
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

function Content({ note }: { note: Note }) {
  const formattedDate = format(
    new Date(note.timeStamp),
    "d MMMM yyyy 'at' HH:mm"
  );

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-neutral-400 text-sm flex justify-center">
        {formattedDate}
      </span>
      <span className="text-2xl font-bold">{note.title}</span>
      <span>{note.id}</span>
    </div>
  );
}
