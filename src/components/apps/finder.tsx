import { MdWifiTethering } from 'react-icons/md';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/apple_accordion';
import { ScrollArea } from '../ui/scroll-area';
import { IoTimeOutline } from 'react-icons/io5';
import { PiAppStoreLogoBold, PiFolderSimpleUserFill } from 'react-icons/pi';
import { BsWindowDesktop } from 'react-icons/bs';
import { HiOutlineDocument } from 'react-icons/hi2';
import {
  MdOutlineDownloadForOffline,
  MdOutlineSplitscreen
} from 'react-icons/md';
import { CiCloudOn } from 'react-icons/ci';
import { DraggableItem } from './draggable-item';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsGrid } from 'react-icons/bs';

import {
  IoListSharp,
  IoSearchSharp,
  IoPricetagOutline,
  IoAppsOutline
} from 'react-icons/io5';
import { BsLayoutThreeColumns, BsFillFolderFill } from 'react-icons/bs';
import { MdOutlineIosShare } from 'react-icons/md';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { FaHardDrive } from 'react-icons/fa6';

import { AppProps } from '@/data/Apps';

export function Finder({ appData, closeApp, bringToFront }: AppProps) {
  return (
    <DraggableItem
      onclose={closeApp}
      className="bg-transparent"
      actionButtonStyle="w-[161px] bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 h-full"
      barItem={barItem()}
      appData={appData}
      bringToFront={bringToFront}
    >
      <div className="w-full h-full bg-transparent">
        <div className="flex h-full">
          <ScrollArea className="w-40 bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 p-4">
            <Favorites />
            <ICloud />
            <Tags />
          </ScrollArea>

          <div className="flex flex-col w-full h-full">
            <ScrollArea className="p-4 bg-neutral-100 dark:bg-neutral-900 w-full h-full flex">
              <div className="grid grid-col-fit gap-4">
                <div className="w-32 h-32 bg-white p-2 rounded shadow">
                  File 1
                </div>
                <div className="w-32 h-32 bg-white p-2 rounded shadow">
                  File 2
                </div>
                <div className="w-32 h-32 bg-white p-2 rounded shadow">
                  File 3
                </div>
                <div className="w-32 h-32 bg-white p-2 rounded shadow">
                  File 4
                </div>
              </div>
            </ScrollArea>
            <div className="text-sm items-center">
              <div className="bg-neutral-900 border-t border-white/20 py-1 px-2 text-white/60 flex flex-row items-center space-x-1">
                <FaHardDrive className="text-gray-400 size-[15px]" />
                <span>Macintosh HD</span>
                <IoIosArrowForward />
                <BsFillFolderFill className="text-blue-400 size-[15px]" />
                <span>Users</span>
                <IoIosArrowForward />
                <BsFillFolderFill className="text-blue-400 size-[15px]" />
                <span>rasmuselmersson</span>
                <IoIosArrowForward />
                <BsFillFolderFill className="text-blue-400 size-[15px]" />
                <span>Desktop</span>
              </div>
              <div className="bg-neutral-800 py-1 px-2 flex justify-center text-white/30">
                26 items, 520,64 GB avalible
              </div>
            </div>
          </div>
        </div>
      </div>
    </DraggableItem>
  );
}

function barItem() {
  return (
    <div className="bg-neutral-800 flex flex-row w-full h-full items-center justify-between p-3">
      <div className="flex flex-row items-center space-x-3">
        <IoIosArrowBack className="text-lg opacity-40" />
        <IoIosArrowForward className="text-lg" />
        <span className="font-bold">Desktop</span>
      </div>
      <div className="flex flex-row items-center space-x-10 text-xl">
        <div className="flex flex-row items-center space-x-4">
          <BsGrid />
          <IoListSharp />
          <BsLayoutThreeColumns />
          <MdOutlineSplitscreen />
        </div>
        <div className="flex flex-row items-center space-x-2">
          <IoAppsOutline />
          <MdOutlineIosShare />
          <IoPricetagOutline />
          <HiOutlineDotsCircleHorizontal />
        </div>
        <IoSearchSharp />
      </div>
    </div>
  );
}

function Favorites() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-neutral-300">
          Favorites
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-4">
            <li className="flex flex-row items-center space-x-1">
              <MdWifiTethering className=" size-[18px] text-blue-500" />
              <span>AirDrop</span>
            </li>
            <li className="flex flex-row items-center space-x-1">
              <IoTimeOutline className=" size-[18px] text-blue-500" />
              <span>Recent</span>
            </li>
            <li className="flex flex-row items-center space-x-1">
              <PiAppStoreLogoBold className=" size-[18px] text-blue-500" />
              <span>Applications</span>
            </li>
            <li className="flex flex-row items-center space-x-1">
              <BsWindowDesktop className=" size-[18px] text-blue-500" />
              <span>Desktop</span>
            </li>
            <li className="flex flex-row items-center space-x-1">
              <HiOutlineDocument className=" size-[18px] text-blue-500" />
              <span>Documents</span>
            </li>
            <li className="flex flex-row items-center space-x-1">
              <MdOutlineDownloadForOffline className=" size-[18px] text-blue-500" />
              <span>Downloads</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function ICloud() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-neutral-300">
          iCloud
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-4">
            <li className="flex flex-row items-center space-x-1">
              <CiCloudOn className=" size-[18px] text-teal-500" />
              <span>iCloud Drive</span>
            </li>
            <li className="flex flex-row items-center space-x-1">
              <PiFolderSimpleUserFill className=" size-[18px] text-teal-500" />
              <span>Shared</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function Tags() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-neutral-300">
          Tags
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-4 ml-1">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Red</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Orange</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Yellow</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Green</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Blue</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Purple</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span>Gray</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
