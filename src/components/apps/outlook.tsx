import { FaGlobe } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { BsArchive, BsCalendar3, BsFlag } from 'react-icons/bs';
import { RiFolderSharedLine } from 'react-icons/ri';
import { HiOutlineUsers } from 'react-icons/hi2';
import { TiStarOutline } from 'react-icons/ti';
import { PiCheckFatLight } from 'react-icons/pi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import { LuPanelRightClose } from 'react-icons/lu';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/outlook_accordion';
import { DraggableItem } from './draggable-item';
import { useSystem } from '@/hooks/useSystem';

const SIDE_BAR_WIDTH = 320;

export function Outlook() {
  const { closeApp } = useSystem();
  return (
    <DraggableItem onclose={() => closeApp('mail')}>
      <div className="w-full h-full bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl flex flex-row">
        <AppBar />
        <div className="w-full">
          <TopBar />
          <MainPane />
        </div>
      </div>
    </DraggableItem>
  );
}

function TopBar() {
  return (
    <div className="p-2 flex flex-row items-center justify-between">
      <div
        className={`flex flex-row items-center w-[${SIDE_BAR_WIDTH}px] space-x-2`}
      >
        <RxHamburgerMenu className="size-[1.35rem]" />
        <button className="flex flex-row bg-blue-500 rounded-lg space-x-2 px-3 py-1 items-center">
          <FiEdit className="size-[1.35rem]" />
          <span className="">New Email</span>
        </button>
      </div>
      <div className="flex flex-row items-center space-x-7">
        <div className="flex flex-row space-x-2">
          <HiOutlineTrash className="size-[1.35rem]" />
          <span>Delete</span>
        </div>
        <div className="flex flex-row space-x-2">
          <BsArchive className="size-[1.35rem]" />
          <span>Archive</span>
        </div>
        <div className="flex flex-row space-x-2">
          <RiFolderSharedLine className="size-[1.35rem]" />
          <span>Move</span>
        </div>
        <div className="flex flex-row space-x-2">
          <BsFlag className="size-[1.35rem]" />
          <span>Flag</span>
        </div>
        <div className="flex flex-row space-x-2">
          <HiOutlineTrash className="size-[1.35rem]" />
          <span>Mark as Unread</span>
        </div>
        <div className="flex flex-row space-x-2">
          <HiOutlineTrash className="size-[1.35rem]" />
          <span>Sync</span>
        </div>
        <div>
          <HiDotsHorizontal className="size-[1.35rem]" />
        </div>
      </div>
      <div className="p-2">
        <LuPanelRightClose className="size-4" />
      </div>
    </div>
  );
}

function AppBar() {
  return (
    <div className="p-2 space-y-4 bg-neutral-700/20">
      <div className="space-y-1 bg-neutral-700 rounded-full p-1 shadow-md">
        <div className="bg-neutral-800 p-2 rounded-full shadow-md">
          <FaGlobe className="size-5 text-blue-500" />
        </div>
        <div className="bg-neutral-700 p-2 rounded-full shadow-md shadow-white/30 border border-white/10">
          <BsPlusLg className="size-5 text-white" />
        </div>
      </div>
      <div className="text-white flex flex-col space-y-1">
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <GrMail className="size-5 m-2 text-blue-500" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <BsCalendar3 className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <HiOutlineUsers className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <TiStarOutline className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <PiCheckFatLight className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <HiDotsHorizontal className="size-5 m-2" />
        </div>
      </div>
    </div>
  );
}

function MainPane() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full px-2 h-screen"
    >
      <MailList />
      <ResizableHandle />
      <MailContent />
      <ResizableHandle />
      <Agenda />
    </ResizablePanelGroup>
  );
}

function MailList() {
  return (
    <ResizablePanel defaultSize={50}>
      <div className="p-2 h-full rounded-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              Favorites
            </AccordionTrigger>
            <AccordionContent>
              <div>Content</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              All Accounts
            </AccordionTrigger>
            <AccordionContent>
              <div>Content</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white truncate">
              rasmus.elmersson@regent.se
            </AccordionTrigger>
            <AccordionContent>
              <div>Content</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              rasmus.elmersson@martinservera.se
            </AccordionTrigger>
            <AccordionContent>
              <div>Content</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              Saved Searches
            </AccordionTrigger>
            <AccordionContent>
              <div>Content</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ResizablePanel>
  );
}

function MailContent() {
  return (
    <ResizablePanel defaultSize={50}>
      <div className="p-2 h-full rounded-md bg-neutral-800">
        <div className="flex flex-col justify-center items-center space-y-2">
          <span className="text-lg">No Conversation Selected</span>
          <span className="text-sm">Select a conversation to read.</span>
        </div>
      </div>
    </ResizablePanel>
  );
}

function Agenda() {
  return (
    <ResizablePanel defaultSize={25}>
      <div className="p-2 h-full rounded-md bg-neutral-800">
        <span className="font-semibold">Three</span>
      </div>
    </ResizablePanel>
  );
}
