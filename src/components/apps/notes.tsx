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

export function Notes({ appData }: AppProps) {
  return (
    <DraggableItem appData={appData}>
      <div className="w-full h-full bg-transparent">
        <div className="flex h-full">
          <ScrollArea className="w-80 bg-slate-800/90 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/90 p-4">
            <div className="flex flex-row items-center justify-between py-2">
              <div className="flex flex-row items-center space-x-2">
                <PiUserCircleFill className="text-yellow-500" />
                <span>Shared</span>
              </div>

              <span className="text-neutral-400">1</span>
            </div>

            <ICloud />
          </ScrollArea>
          <ScrollArea className=" w-96 bg-neutral-800 p-4">
            <MonthList month="March" />
          </ScrollArea>
          <ScrollArea className="flex w-full p-4 bg-neutral-100 dark:bg-neutral-900">
            <Content />
          </ScrollArea>
        </div>
      </div>
    </DraggableItem>
  );
}

function ICloud() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-neutral-300">
          iCloud
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-4">
            <li className="flex flex-row items-center space-x-1">
              <IoFolderOutline className=" size-[18px] text-yellow-500" />
              <span>iCloud Drive</span>
            </li>
            <li className="flex flex-row items-center space-x-1">
              <IoFolderOutline className=" size-[18px] text-yellow-500" />
              <span>Shared</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

interface MonthListProps {
  month: string;
}
function MonthList({ month }: MonthListProps) {
  return (
    <div>
      <span className="text-neutral-400 text-sm">{month}</span>
      <NoteCard title="Notes" date="2024-03-15" preview="SRE ?" />
    </div>
  );
}

interface NoteCardProps {
  title: string;
  date: string;
  preview: string;
}

function NoteCard({ title, date, preview }: NoteCardProps) {
  return (
    <div className="hover:bg-yellow-500 rounded-lg px-4 py-2">
      <span className="font-bold">{title}</span>
      <div className="space-x-2 text-sm">
        <span className="font-bold">{date}</span>
        <span className="text-neutral-400">{preview}</span>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-neutral-400 text-sm flex justify-center">
        Edited 15 March 2024 at 12:51
      </span>
      <span className="text-2xl font-bold">Title</span>
      <span>Text</span>
    </div>
  );
}
