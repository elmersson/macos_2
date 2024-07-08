import { ScrollArea } from '../ui/scroll-area';
import { DraggableItem } from './draggable-item';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { AppProps } from '@/data/Apps';
import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useSystemStore } from '../providers/store-provider';
import { IconType } from 'react-icons';
import { IoIosWifi, IoIosBluetooth, IoIosGlobe } from 'react-icons/io';
import { IoCloseSharp, IoSearchSharp } from 'react-icons/io5';
import Image from 'next/image';
import ProfileImage from '@/assets/images/ProfileImage.png';
import Profile from '../systemPages/Profile';
import Wifi from '../systemPages/Wi-Fi';
import { Network } from '../systemPages/Network';
import Bluetooth from '../systemPages/Bluetooth';
import { Notifications } from '../systemPages/Notifications';
import { IoNotificationsSharp } from 'react-icons/io5';
import { Sound } from '../systemPages/Sound';
import { HiSpeakerWave } from 'react-icons/hi2';

type TailwindBgColor =
  | 'bg-blue-500'
  | 'bg-red-500'
  | 'bg-green-500'
  | 'bg-yellow-500'
  | 'bg-purple-500'
  | 'bg-pink-500';

export interface SystemPage {
  id: string;
  name: string;
  icon: { type: IconType; bg: TailwindBgColor };
  page(): React.JSX.Element;
}

export const SystemData: SystemPage[] = [
  {
    id: 'profile',
    name: 'Profile',
    icon: { type: IoIosWifi, bg: 'bg-blue-500' },
    page: Profile
  },
  {
    id: 'wi-fi',
    name: 'Wi-Fi',
    icon: { type: IoIosWifi, bg: 'bg-blue-500' },
    page: Wifi
  },
  {
    id: 'bluetooth',
    name: 'Bluetooth',
    icon: { type: IoIosBluetooth, bg: 'bg-blue-500' },
    page: Wifi
  },
  {
    id: 'network',
    name: 'Network',
    icon: { type: IoIosGlobe, bg: 'bg-blue-500' },
    page: Wifi
  },
  {
    id: 'notifications',
    name: 'Notifications',
    icon: { type: IoNotificationsSharp, bg: 'bg-red-500' },
    page: Wifi
  },
  {
    id: 'sound',
    name: 'Sound',
    icon: { type: HiSpeakerWave, bg: 'bg-red-500' },
    page: Sound
  }
];

export function System({ appData }: AppProps) {
  return (
    <DraggableItem
      className="bg-transparent"
      actionButtonStyle="w-[260px] bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 h-full"
      barItem={<BarItem />}
      appData={appData}
    >
      <div className="w-full h-full bg-transparent">
        <div className="flex h-full">
          <ScrollArea className="w-64 bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 p-4">
            <SideBar />
          </ScrollArea>

          <div className="flex flex-col w-full h-full">
            <ScrollArea className="p-6 bg-neutral-100 dark:bg-neutral-800 w-full h-full flex">
              <Content />
            </ScrollArea>
          </div>
        </div>
      </div>
    </DraggableItem>
  );
}

function BarItem() {
  const { historyPosition, setHistoryPosition, systemHistory } = useSystemStore(
    (state) => state
  );
  const title = systemHistory[historyPosition];

  const handleBack = () => {
    if (historyPosition > 0) {
      const newPosition = historyPosition - 1;
      setHistoryPosition(newPosition);
    }
  };

  const handleForward = () => {
    if (historyPosition < systemHistory.length - 1) {
      const newPosition = historyPosition + 1;
      setHistoryPosition(newPosition);
    }
  };

  return (
    <div className="bg-neutral-800 flex flex-row w-full h-full items-center p-3">
      <div className="flex flex-row items-center space-x-3 text-lg">
        <div
          className={`text-lg ${historyPosition > 0 ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
          role="button"
          onClick={() => handleBack()}
        >
          <IoIosArrowBack />
        </div>

        <div
          className={`text-lg ${historyPosition < systemHistory.length - 1 ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
          role="button"
          onClick={() => handleForward()}
        >
          <IoIosArrowForward />
        </div>
        <span className="font-bold line-clamp-1">{title}</span>
      </div>
    </div>
  );
}

function SideBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { setActivePage } = useSystemStore((state) => state);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
    setSearchInput('');
  };

  const handleClearSearch = () => {
    setSearchInput('');
    handleSearchToggle();
  };

  const setPage = (page: SystemPage) => {
    setActivePage(page);
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row relative items-center">
        <div className="relative">
          <IoSearchSharp className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-neutral-700 text-white border border-neutral-500 rounded p-1 pl-8 pr-8 shadow-lg text-sm"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <IoCloseSharp
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 cursor-pointer"
            role="button"
            onClick={handleClearSearch}
          />
        </div>
      </div>
      <div
        className="flex flex-row space-x-2"
        onClick={() => setPage(SystemData[0])}
      >
        <div className="w-12 h-12 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2">
          <Image
            src={ProfileImage}
            alt="account image"
            className="rounded-full drop-shadow object-cover object-center"
            fill
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">Rasmus Elmersson</span>
          <span className="text-sm">Apple ID</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {SystemData.slice(1, 4).map((item) => (
          <SideBarItem
            key={item.id}
            title={item.name}
            icon={item.icon}
            onClick={() => setPage(item)}
          />
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        {SystemData.slice(4, 6).map((item) => (
          <SideBarItem
            key={item.id}
            title={item.name}
            icon={item.icon}
            onClick={() => setPage(item)}
          />
        ))}
        <span>Focus</span>
        <span>Screen Time</span>
      </div>

      <div className="flex flex-col">
        <span>General</span>
        <span>Appearance</span>
        <span>Accessibility</span>
        <span>Control Centre</span>
        <span>Siri & Spotlight</span>
        <span>Privacy & Security</span>
      </div>

      <div className="flex flex-col">
        <span>Desktop & Dock</span>
        <span>Displays</span>
        <span>Wallpaper</span>
        <span>Screen Saver</span>
        <span>Battery</span>
      </div>

      <div className="flex flex-col">
        <span>Lock Screen</span>
        <span>Touch ID & Password</span>
        <span>Users & Groups</span>
      </div>

      <div className="flex flex-col">
        <span>Passwords</span>
        <span>Internet Accounts</span>
        <span>Game Center</span>
        <span>Wallet & Apple Pay</span>
      </div>

      <div className="flex flex-col">
        <span>Keyboard</span>
        <span>Trackpad Accounts</span>
        <span>Printers & Scanners</span>
      </div>
    </div>
  );
}

interface SideBarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: { type: IconType; bg: TailwindBgColor };
}

function SideBarItem({
  title,
  icon: { type: Icon, bg },
  ...props
}: SideBarItemProps) {
  return (
    <div
      role="button"
      className="flex flex-row items-center space-x-1"
      onClick={props.onClick}
    >
      <div className={cn('rounded-lg p-0.5 bg-blue-500', props.className, bg)}>
        <Icon className=" size-5" />
      </div>
      <span>{title}</span>
    </div>
  );
}

export function ContentBox({
  children,
  title,
  ...divProps
}: {
  children?: ReactNode;
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="space-y-3">
      {title && <span className="font-bold m-3">{title}</span>}
      <div
        className={cn(
          'w-full border border-white/30 bg-neutral-500/10 rounded p-3',
          divProps.className
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Content() {
  const {
    activePage: { id }
  } = useSystemStore((state) => state);
  return (
    <div className="w-full space-y-3">
      {id === 'profile' && <Profile />}
      {id === 'wi-fi' && <Wifi />}
      {id === 'bluetooth' && <Bluetooth />}
      {id === 'network' && <Network />}
      {id === 'notifications' && <Notifications />}
      {id === 'sound' && <Sound />}
    </div>
  );
}
