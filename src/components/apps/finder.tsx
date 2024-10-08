import { MdWifiTethering } from 'react-icons/md';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/apple_accordion';
import { ScrollArea } from '../ui/scroll-area';
import { IoCloseSharp, IoTimeOutline } from 'react-icons/io5';
import { PiAppStoreLogoBold, PiFolderSimpleUserFill } from 'react-icons/pi';
import { BsWindowDesktop } from 'react-icons/bs';
import { HiOutlineDocument } from 'react-icons/hi2';
import {
  MdOutlineDownloadForOffline,
  MdOutlineSplitscreen
} from 'react-icons/md';
import { CiCloudOn } from 'react-icons/ci';
import { DraggableItem } from './draggable-item';
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward
} from 'react-icons/io';
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

import { type AppProps, apps } from '@/data/Apps';
import type { FinderData } from '@/data/finderData';
import { useAppStore, useFinderStore } from '../providers/store-provider';
import Image from 'next/image';
import {
  type HTMLAttributes,
  type SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '../ui/context-menu';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { FaCheck } from 'react-icons/fa6';

export const findSelectedItem = (
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

export const countItems = ({
  item,
  isApplication
}: {
  item?: FinderData;
  isApplication?: boolean;
}): number => {
  if (isApplication) {
    return item?.children?.length || 0;
  }
  return item?.children?.length || 0;
};

export const tracePathToSelectedItem = (
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

export const filteredItems = (
  items: FinderData[],
  searchInput: string
): FinderData[] => {
  if (!searchInput) return items;
  const lowercasedFilter = searchInput.toLowerCase();

  const filterRecursive = (items: FinderData[]): FinderData[] => {
    return items.reduce((acc: FinderData[], item: FinderData) => {
      if (item.title.toLowerCase().includes(lowercasedFilter)) {
        acc.push(item);
      }
      if (item.children) {
        acc = acc.concat(filterRecursive(item.children));
      }
      return acc;
    }, []);
  };

  return filterRecursive(items);
};

export function Finder({ appData }: AppProps) {
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

  const [searchInput, setSearchInput] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

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
    if (selectedFinderId !== id) {
      addToHistory(selectedFinderId);
      setHistoryPosition(historyPosition + 1);
      setSelectedFinderId(id);
    }
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
    setSearchInput('');
  };

  const displayedItems = isSearching
    ? filteredItems(finderDataSet, searchInput)
    : selectedItem?.children || [];
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
          isSearching={isSearching}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearchChange={handleSearchChange}
          handleSearchToggle={handleSearchToggle}
        />
      }
      appData={appData}
    >
      <div className="w-full h-full bg-transparent">
        <div className="flex h-full">
          <ScrollArea className="w-40 bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 p-4 ">
            <Favorites />
            <ICloud />
            <Tags />
          </ScrollArea>

          <div className="flex flex-col w-full h-full">
            <ScrollArea className="p-4 bg-neutral-100 dark:bg-neutral-800 w-full h-full flex">
              <Content
                displayedItems={displayedItems}
                selectedFinderId={selectedFinderId}
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
                {itemCount} items,{' '}
                {selectedFinderId === 'icloud-drive'
                  ? '38,34 GB avalible on iCloud'
                  : '520,64 GB avalible'}
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
  isSearching: boolean;
  handleSearchToggle: () => void;
  // eslint-disable-next-line no-unused-vars
  setSearchInput: (value: SetStateAction<string>) => void;
  searchInput: string;
  // eslint-disable-next-line no-unused-vars
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function BarItem({
  finderHistory,
  handleBack,
  handleForward,
  historyPosition,
  title,
  isSearching,
  handleSearchToggle,
  setSearchInput,
  searchInput,
  handleSearchChange
}: BarItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleSearchToggle();
      }
    };

    if (isSearching) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearching, handleSearchToggle]);

  const handleClearSearch = () => {
    setSearchInput('');
    handleSearchToggle();
  };

  console.log(
    'historyPosition',
    historyPosition,
    'finderHistory',
    finderHistory
  );
  const canGoBack = historyPosition > 0;
  const canGoForward = historyPosition < finderHistory.length - 1;

  return (
    <div className="bg-neutral-800 flex flex-row w-full h-full items-center justify-between p-3">
      <div className="flex flex-row items-center space-x-3">
        <div
          className={`text-lg ${canGoBack ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
          role="button"
          onClick={() => {
            if (canGoBack) {
              handleBack();
            }
          }}
        >
          <IoIosArrowBack />
        </div>

        <div
          className={`text-lg ${canGoForward ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
          role="button"
          onClick={() => {
            if (canGoForward) {
              handleForward();
            }
          }}
        >
          <IoIosArrowForward />
        </div>
        <span className="font-bold line-clamp-1">
          {isSearching ? 'Searching This Mac' : title}
        </span>
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
        <div className="flex flex-row relative items-center">
          {isSearching && (
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                className="transition-transform transform scale-x-100 origin-right w-64 bg-neutral-700 text-white border border-neutral-500 rounded p-1 pl-8 pr-8 shadow-lg text-sm placeholder-neutral-500/70"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Search"
                style={{ transform: isSearching ? 'scaleX(1)' : 'scaleX(0)' }}
              />
              <IoSearchSharp className="absolute left-2 top-1/2 transform -translate-y-1/2 text-neutral-500" />

              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 cursor-pointer bg-neutral-400 rounded-full text-sm"
              >
                {searchInput ? <IoCloseSharp /> : null}
              </button>
            </div>
          )}
          {!isSearching && (
            <IoSearchSharp role="button" onClick={handleSearchToggle} />
          )}
        </div>
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
          <ul className="space-y-2">
            <FinderItem id="airdrop" icon={MdWifiTethering} label="AirDrop" />
            <FinderItem id="recent" icon={IoTimeOutline} label="Recent" />
            <FinderItem
              id="applications"
              icon={PiAppStoreLogoBold}
              label="Applications"
            />
            <FinderItem id="desktop" icon={BsWindowDesktop} label="Desktop" />
            <FinderItem
              id="documents"
              icon={HiOutlineDocument}
              label="Documents"
            />
            <FinderItem
              id="downloads"
              icon={MdOutlineDownloadForOffline}
              label="Downloads"
            />
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function ICloud() {
  return (
    <Accordion type="single" collapsible className="w-full my-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-neutral-300">
          iCloud
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <FinderItem
              id="icloud-drive"
              icon={CiCloudOn}
              label="iCloud Drive"
              color="text-teal-500"
            />
            <FinderItem
              id="shared"
              icon={PiFolderSimpleUserFill}
              label="Shared"
              color="text-teal-500"
            />
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
          <div className="flex flex-col space-y-1">
            <FinderItem id="red" label="Red" bg="bg-red-500" />
            <FinderItem id="orange" label="Orange" bg="bg-orange-500" />
            <FinderItem id="yellow" label="Yellow" bg="bg-yellow-500" />
            <FinderItem id="green" label="Green" bg="bg-green-500" />
            <FinderItem id="blue" label="Blue" bg="bg-blue-500" />
            <FinderItem id="purple" label="Purple" bg="bg-purple-500" />
            <FinderItem id="gray" label="Gray" bg="bg-gray-500" />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

interface FinderItemProps {
  id: string;
  label: string;
  icon?: React.ElementType;
  color?: string;
  bg?: string;
}

const FinderItem: React.FC<FinderItemProps> = ({
  id,
  label,
  icon: Icon,
  color = 'text-blue-500',
  bg = 'bg-blue-500'
}) => {
  const {
    setSelectedFinderId,
    selectedFinderId,
    addToHistory,
    historyPosition,
    setHistoryPosition
  } = useFinderStore((state) => state);

  const handleSetSelectedFinderId = (id: string) => {
    if (selectedFinderId !== id) {
      addToHistory(selectedFinderId);
      setHistoryPosition(historyPosition + 1);
      setSelectedFinderId(id);
    }
  };

  return (
    <li
      className={cn(
        'flex flex-row items-center space-x-2 p-2 rounded-md cursor-pointer text-white',
        selectedFinderId === id && 'bg-neutral-400/20'
      )}
      onClick={() => handleSetSelectedFinderId(id)}
      role="button"
    >
      {Icon ? (
        <Icon className={cn('size-[18px]', color)} />
      ) : (
        <div className={cn('w-3 h-3 rounded-full', bg)} />
      )}
      <span>{label}</span>
    </li>
  );
};

interface ContentProps {
  displayedItems: FinderData[];
  selectedFinderId: string;
}

function Content({ displayedItems, selectedFinderId }: ContentProps) {
  const { openApp, bringToFront } = useAppStore((state) => state);
  const {
    setSelectedFinderId,
    addToRecent,
    recent,
    airdropSetting,
    setAirdropSetting,
    addToHistory,
    setHistoryPosition,
    historyPosition
  } = useFinderStore((state) => state);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleDoubleClick = (data: FinderData) => {
    if (data.id === 'car') {
      window.open(
        'https://www.youtube.com/watch?v=HmZm8vNHBSU',
        '_blank',
        'noopener,noreferrer'
      );
    } else if (data.type === 'folder') {
      handleSetSelectedFinderId(data.id);
      addToRecent(data);
    }
  };

  const handleSetSelectedFinderId = (id: string) => {
    if (selectedFinderId !== id) {
      addToHistory(selectedFinderId);
      setHistoryPosition(historyPosition + 1);
      setSelectedFinderId(id);
    }
  };

  const handleApplicationClick = (id: string) => {
    openApp(id);
    bringToFront(id);
  };

  if (selectedFinderId === 'airdrop') {
    return (
      <div className="flex flex-col w-full h-full items-center justify-center mt-[50%]">
        <div className="text-[80px] text-blue-400">
          <MdWifiTethering />
        </div>
        <span>AirDrop lets you share instantly with people nearby.</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="text-sm text-blue-400 active:text-blue-200 flex items-center"
            >
              Allow me to be discovered by: {airdropSetting}
              <span className="ml-1">
                <IoIosArrowDown />
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => setAirdropSetting('No One')}>
                <span className="flex items-center">
                  <span className="w-3.5 h-3.5 mr-0.5">
                    {airdropSetting === 'No One' && <FaCheck />}
                  </span>
                  No One
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setAirdropSetting('Contacts Only')}
              >
                <span className="flex items-center">
                  <span className="w-3.5 h-3.5 mr-0.5">
                    {airdropSetting === 'Contacts Only' && <FaCheck />}
                  </span>
                  Contacts Only
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAirdropSetting('Everyone')}>
                <span className="flex items-center">
                  <span className="w-3.5 h-3.5 mr-0.5">
                    {airdropSetting === 'Everyone' && <FaCheck />}
                  </span>
                  Everyone
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  if (selectedFinderId === 'applications') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2 px-2">
        {apps.map((app) => (
          <Item
            key={app.id}
            data={{
              id: app.id,
              iconImg: app.img,
              title: app.title,
              type: 'file'
            }}
            selectedItemId={selectedItemId}
            onClick={() => setSelectedItemId(app.id)}
            onDoubleClick={() => handleApplicationClick(app.id)}
          />
        ))}
      </div>
    );
  }

  if (selectedFinderId === 'recent') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2 px-2">
        {recent.map((data) => (
          <Item
            key={data.id}
            data={data}
            selectedItemId={selectedItemId}
            onClick={() => setSelectedItemId(data.id)}
            onDoubleClick={() => handleDoubleClick(data)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2 px-2">
      {displayedItems.map((data) => (
        <Item
          key={data.id}
          data={data}
          selectedItemId={selectedItemId}
          onClick={() => setSelectedItemId(data.id)}
          onDoubleClick={() => handleDoubleClick(data)}
        />
      ))}
    </div>
  );
}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  data: FinderData;
  selectedItemId: string | null;
}

function Item({ data, selectedItemId, ...props }: ItemProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          {...props}
          className={cn(`flex flex-col items-center justify-center`, {
            'opacity-40': data.locked
          })}
        >
          <div className="flex justify-center items-center flex-col w-24 space-y-0.5">
            <Image
              src={data.iconImg}
              alt="icon"
              className={cn(
                'w-20 p-1',
                data.id === selectedItemId && 'bg-white/10 rounded'
              )}
            />
            <div className="min-h-12">
              <span
                className={cn(
                  'text-sm text-center line-clamp-2 px-1',
                  data.id === selectedItemId && 'bg-blue-700 rounded'
                )}
              >
                {data.title}
              </span>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
