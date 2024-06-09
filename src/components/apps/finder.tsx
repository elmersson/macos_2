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
import { BsLayoutThreeColumns } from 'react-icons/bs';
import { MdOutlineIosShare } from 'react-icons/md';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

import { AppProps, apps } from '@/data/Apps';
import { FinderData } from '@/data/finderData';
import { LaunchpadItem } from '../launchpad';
import { useAppStore, useFinderStore } from '../providers/store-provider';
import Image from 'next/image';

const findSelectedItem = (
  id: string,
  items: FinderData[]
): FinderData | undefined => {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.children) {
      const found = findSelectedItem(id, item.children);
      if (found) return found;
    }
  }
  return undefined;
};

interface CountItemsProps {
  item?: FinderData;
  isApplication?: boolean;
}
const countItems = ({ item, isApplication }: CountItemsProps): number => {
  if (isApplication) {
    return apps.length;
  }
  return item?.children?.length || 0;
};

const tracePathToSelectedItem = (
  id: string,
  items: FinderData[],
  path: FinderData[] = []
): FinderData[] => {
  for (const item of items) {
    if (item.id === id) return [...path, item];
    if (item.children) {
      const result = tracePathToSelectedItem(id, item.children, [
        ...path,
        item
      ]);
      if (result.length > 0) return result;
    }
  }
  return [];
};

export function Finder({ appData }: AppProps) {
  const { openApp, bringToFront } = useAppStore((state) => state);
  const {
    finderDataSet,
    selectedFinderId,
    setSelectedFinderId,
    finderHistory,
    historyPosition,
    setHistoryPosition,
    addToHistory,
    bin
  } = useFinderStore((state) => state);

  const selectedItem =
    selectedFinderId === 'bin'
      ? bin
      : findSelectedItem(selectedFinderId, finderDataSet);
  const itemCount = countItems({
    item: selectedItem,
    isApplication: selectedFinderId === 'applications'
  });
  const pathToSelectedItem = tracePathToSelectedItem(
    selectedFinderId,
    finderDataSet
  );

  const handleSetSelectedFinderId = (id: string) => {
    const newPosition = historyPosition + 1;
    setHistoryPosition(newPosition);
    addToHistory(selectedFinderId);
    setSelectedFinderId(id);
  };

  const handleBack = () => {
    if (historyPosition > 0) {
      const newPosition = historyPosition - 1;
      setHistoryPosition(newPosition);
      setSelectedFinderId(finderHistory[newPosition]);
    }
  };

  const handleForward = () => {
    if (historyPosition < finderHistory.length - 1) {
      const newPosition = historyPosition + 1;
      setHistoryPosition(newPosition);
      setSelectedFinderId(finderHistory[newPosition]);
    }
  };

  return (
    <DraggableItem
      className="bg-transparent"
      actionButtonStyle="w-[161px] bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 h-full"
      barItem={
        <BarItem
          title={selectedItem?.title}
          finderHistory={finderHistory}
          handleBack={handleBack}
          handleForward={handleForward}
          historyPosition={historyPosition}
        />
      }
      appData={appData}
    >
      <div className="w-full h-full bg-transparent">
        <div className="flex h-full">
          <ScrollArea className="w-40 bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 p-4">
            <Favorites setSelectedFinderId={handleSetSelectedFinderId} />
            <ICloud />
            <Tags />
          </ScrollArea>

          <div className="flex flex-col w-full h-full">
            <ScrollArea className="p-4 bg-neutral-100 dark:bg-neutral-800 w-full h-full flex">
              <Content
                selectedFinderId={selectedFinderId}
                setSelectedFinderId={handleSetSelectedFinderId}
                openApp={openApp}
                bringToFront={bringToFront}
                selectedItem={selectedItem}
              />
            </ScrollArea>
            <div className="text-sm items-center">
              <div className="bg-neutral-800 border-t border-white/20 py-1 px-2 text-white/60 flex flex-row items-center space-x-1">
                {pathToSelectedItem.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleSetSelectedFinderId(item.id)}
                    className="flex flex-row items-center space-x-1"
                    role="button"
                  >
                    {index > 0 && <IoIosArrowForward />}
                    <Image src={item.iconImg} alt="icon" className="w-4" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="bg-neutral-800 py-1 px-2 flex justify-center text-white/30">
                {itemCount} items, 520,64 GB avalible
              </div>
            </div>
          </div>
        </div>
      </div>
    </DraggableItem>
  );
}

interface BarItemProps {
  title?: string;
  finderHistory: string[];
  handleBack: () => void;
  handleForward: () => void;
  historyPosition: number;
}

function BarItem({
  finderHistory,
  handleBack,
  handleForward,
  historyPosition,
  title
}: BarItemProps) {
  return (
    <div className="bg-neutral-800 flex flex-row w-full h-full items-center justify-between p-3">
      <div className="flex flex-row items-center space-x-3">
        <div
          className={`text-lg ${historyPosition > 0 ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
          role="button"
          onClick={() => {
            handleBack();
          }}
        >
          <IoIosArrowBack />
        </div>

        <div
          className={`text-lg ${historyPosition < finderHistory.length - 1 ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
          role="button"
          onClick={() => {
            handleForward();
          }}
        >
          <IoIosArrowForward />
        </div>
        <span className="font-bold">{title}</span>
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

function Favorites({
  setSelectedFinderId
}: {
  // eslint-disable-next-line no-unused-vars
  setSelectedFinderId: (finderId: string) => void;
}) {
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
            <li
              className="flex flex-row items-center space-x-1"
              onClick={() => setSelectedFinderId('airdrop')}
            >
              <MdWifiTethering className=" size-[18px] text-blue-500" />
              <span>AirDrop</span>
            </li>
            <li
              className="flex flex-row items-center space-x-1"
              onClick={() => setSelectedFinderId('recent')}
            >
              <IoTimeOutline className=" size-[18px] text-blue-500" />
              <span>Recent</span>
            </li>
            <li
              className="flex flex-row items-center space-x-1"
              onClick={() => setSelectedFinderId('applications')}
            >
              <PiAppStoreLogoBold className=" size-[18px] text-blue-500" />
              <span>Applications</span>
            </li>
            <li
              className="flex flex-row items-center space-x-1"
              onClick={() => setSelectedFinderId('desktop')}
            >
              <BsWindowDesktop className=" size-[18px] text-blue-500" />
              <span>Desktop</span>
            </li>
            <li
              className="flex flex-row items-center space-x-1"
              onClick={() => setSelectedFinderId('documents')}
            >
              <HiOutlineDocument className=" size-[18px] text-blue-500" />
              <span>Documents</span>
            </li>
            <li
              className="flex flex-row items-center space-x-1"
              onClick={() => setSelectedFinderId('downloads')}
            >
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

interface ContentProps {
  // eslint-disable-next-line no-unused-vars
  setSelectedFinderId: (finderId: string) => void;
  selectedFinderId: string;
  // eslint-disable-next-line no-unused-vars
  openApp: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  bringToFront: (id: string) => void;
  selectedItem: FinderData | undefined;
}
function Content({
  setSelectedFinderId,
  selectedFinderId,
  openApp,
  bringToFront,
  selectedItem
}: ContentProps) {
  if (selectedFinderId === 'applications') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-14">
        {apps.map((app) => (
          <LaunchpadItem
            key={app.id}
            appData={app}
            openApp={() => openApp(app.id)}
            bringToFront={() => bringToFront(app.id)}
            setLaunchPad={function (): void {}}
          />
        ))}
      </div>
    );
  }

  if (selectedFinderId === 'airdrop') {
    return (
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="text-[80px] text-blue-400">
          <MdWifiTethering />
        </div>
        <span>AirDrop lets you share instantly with people nearby.</span>
        <span className="text-sm text-blue-600">
          Allow me to be discovered by: Contacts Only
        </span>
      </div>
    );
  }

  const handleDoubleClick = (data: FinderData) => {
    if (data.id === 'car') {
      window.open(
        'https://www.youtube.com/watch?v=HmZm8vNHBSU',
        '_blank',
        'noopener,noreferrer'
      );
    } else if (data.type === 'folder') {
      setSelectedFinderId(data.id);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-14 px-8">
      {selectedItem?.children?.map((data) => (
        <div
          key={data.id}
          className={`flex flex-col items-center justify-center ${data.locked && 'opacity-40'}`}
          role="button"
          onDoubleClick={() => handleDoubleClick(data)}
        >
          <Item data={data} />
        </div>
      ))}
    </div>
  );
}

function Item({ data }: { data: FinderData }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={data.iconImg} alt="icon" className="w-20" />
      <span className="text-sm">{data.title}</span>
    </div>
  );
}
