import { ScrollArea } from '../ui/scroll-area';
import { DraggableItem } from './draggable-item';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { AppProps } from '@/data/Apps';
import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useSystemStore } from '../providers/store-provider';
import { IconType } from 'react-icons';
import {
  IoIosWifi,
  IoIosBluetooth,
  IoIosGlobe,
  IoMdLock,
  IoIosFingerPrint,
  IoIosMoon
} from 'react-icons/io';
import {
  IoCloseSharp,
  IoSearchSharp,
  IoInvertModeOutline,
  IoScale,
  IoNotificationsSharp,
  IoHourglassOutline,
  IoCog,
  IoSunny,
  IoFlowerOutline,
  IoKey
} from 'react-icons/io5';
import Image from 'next/image';
import ProfileImage from '@/assets/images/ProfileImage.png';
import Profile from '../systemPages/Profile';
import Wifi from '../systemPages/Wi-Fi';
import { Network } from '../systemPages/Network';
import Bluetooth from '../systemPages/Bluetooth';
import { Notifications } from '../systemPages/Notifications';
import { Sound } from '../systemPages/Sound';
import { HiSpeakerWave } from 'react-icons/hi2';
import { Focus } from '../systemPages/Focus';
import { ScreenTime } from '../systemPages/Screen-Time';
import { General } from '../systemPages/General';
import { ChevronRight } from 'lucide-react';
import { Appearance } from '../systemPages/Appearance';
import {
  BsBatteryFull,
  BsMouseFill,
  BsUniversalAccessCircle
} from 'react-icons/bs';
import { Accessibility } from '../systemPages/Accessibility';
import { ControlCentre } from '../systemPages/Control-Centre';
import { FcGlobe, FcInTransit, FcInvite } from 'react-icons/fc';
import { Siri } from '../systemPages/Siri';
import { Privacy } from '../systemPages/Privacy';
import { Desktop } from '../systemPages/Desktop';
import { PiDesktopFill, PiMoonStarsFill } from 'react-icons/pi';
import { Displays } from '../systemPages/Displays';
import { Wallpaper } from '../systemPages/Wallpaper';
import { ScreenSaver } from '../systemPages/Screen-Saver';
import { Battery } from '../systemPages/Battery';
import { LockScreen } from '../systemPages/Lock-Screen';
import { TouchId } from '../systemPages/Touch-Id';
import { Users } from '../systemPages/Users';
import { HiUsers } from 'react-icons/hi';
import { Passwords } from '../systemPages/Passwords';
import { InternetAccount } from '../systemPages/Internet-Account';
import { LuAtSign } from 'react-icons/lu';
import { GameCenter } from '../systemPages/Game-Center';
import { Wallet } from '../systemPages/Wallet';
import { Keyboard } from '../systemPages/Keyboard';
import { FaKeyboard } from 'react-icons/fa6';
import { Mouse } from '../systemPages/Mouse';
import { Printers } from '../systemPages/Printers';
import { RiPrinterFill } from 'react-icons/ri';
import { TrackPad } from '../systemPages/TrackPad';

export type TailwindBgColor =
  | 'bg-blue-500'
  | 'bg-red-500'
  | 'bg-green-500'
  | 'bg-teal-300'
  | 'bg-yellow-500'
  | 'bg-purple-500'
  | 'bg-pink-500'
  | 'bg-neutral-400'
  | 'bg-white'
  | 'bg-black';

export type TailwindTextColor =
  | 'text-blue-500'
  | 'text-red-500'
  | 'text-green-500'
  | 'text-yellow-500'
  | 'text-purple-500'
  | 'text-pink-500'
  | 'text-neutral-400'
  | 'text-white';

export interface SystemPage {
  id: string;
  name: string;
  icon: { type: IconType; bg: TailwindBgColor; color?: TailwindTextColor };
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
  },
  {
    id: 'focus',
    name: 'Focus',
    icon: { type: IoIosMoon, bg: 'bg-purple-500' },
    page: Focus
  },
  {
    id: 'screen-time',
    name: 'Screen Time',
    icon: { type: IoHourglassOutline, bg: 'bg-purple-500' },
    page: ScreenTime
  },
  {
    id: 'general',
    name: 'General',
    icon: { type: IoCog, bg: 'bg-neutral-400' },
    page: General
  },
  {
    id: 'appearance',
    name: 'Appearance',
    icon: { type: IoInvertModeOutline, bg: 'bg-black' },
    page: Appearance
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    icon: { type: BsUniversalAccessCircle, bg: 'bg-blue-500' },
    page: Accessibility
  },
  {
    id: 'control-centre',
    name: 'Control Centre',
    icon: { type: IoScale, bg: 'bg-neutral-400' },
    page: ControlCentre
  },
  {
    id: 'siri-spotlight',
    name: 'Siri & Spotlight',
    icon: { type: FcGlobe, bg: 'bg-black' },
    page: Siri
  },
  {
    id: 'privacy-security',
    name: 'Privacy & Security',
    icon: { type: FcGlobe, bg: 'bg-blue-500' },
    page: Privacy
  },
  {
    id: 'desktop',
    name: 'Desktop & Dock',
    icon: { type: PiDesktopFill, bg: 'bg-black' },
    page: Desktop
  },
  {
    id: 'displays',
    name: 'Displays',
    icon: { type: IoSunny, bg: 'bg-blue-500' },
    page: Displays
  },
  {
    id: 'wallpaper',
    name: 'Wallpaper',
    icon: { type: IoFlowerOutline, bg: 'bg-teal-300' },
    page: Wallpaper
  },
  {
    id: 'screen-saver',
    name: 'Screen Saver',
    icon: { type: PiMoonStarsFill, bg: 'bg-teal-300' },
    page: ScreenSaver
  },
  {
    id: 'battery',
    name: 'Battery',
    icon: { type: BsBatteryFull, bg: 'bg-green-500' },
    page: Battery
  },
  {
    id: 'lock-screen',
    name: 'Lock Screen',
    icon: { type: IoMdLock, bg: 'bg-black' },
    page: LockScreen
  },
  {
    id: 'touch-id',
    name: 'Touch ID & Password',
    icon: { type: IoIosFingerPrint, bg: 'bg-white', color: 'text-red-500' },
    page: TouchId
  },
  {
    id: 'users',
    name: 'Users & Groups',
    icon: { type: HiUsers, bg: 'bg-blue-500' },
    page: Users
  },
  {
    id: 'passwords',
    name: 'Passwords',
    icon: { type: IoKey, bg: 'bg-neutral-400' },
    page: Passwords
  },
  {
    id: 'internet-account',
    name: 'Internet Account',
    icon: { type: LuAtSign, bg: 'bg-blue-500' },
    page: InternetAccount
  },
  {
    id: 'game-center',
    name: 'Game Center',
    icon: { type: FcInTransit, bg: 'bg-white' },
    page: GameCenter
  },
  {
    id: 'wallet',
    name: 'Wallet & Apple Pay',
    icon: { type: FcInvite, bg: 'bg-black' },
    page: Wallet
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    icon: { type: FaKeyboard, bg: 'bg-neutral-400' },
    page: Keyboard
  },
  {
    id: 'mouse',
    name: 'Mouse',
    icon: { type: BsMouseFill, bg: 'bg-neutral-400' },
    page: Mouse
  },
  {
    id: 'trackpad',
    name: 'Trackpad',
    icon: { type: BsMouseFill, bg: 'bg-neutral-400' },
    page: TrackPad
  },
  {
    id: 'printers-scanners',
    name: 'Printers & Scanners',
    icon: { type: RiPrinterFill, bg: 'bg-neutral-400' },
    page: Printers
  }
];

export function System({ appData }: AppProps) {
  return (
    <DraggableItem
      className="bg-transparent"
      actionButtonStyle="w-[258px] bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 h-full"
      barItem={<BarItem />}
      appData={appData}
    >
      <div className="w-full h-full bg-transparent">
        <div className="flex h-full">
          <ScrollArea className="w-[254px] bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-slate-800/70 p-4">
            <SideBar />
          </ScrollArea>

          <div className="flex flex-col w-full h-full overflow-hidden">
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
  const { historyPosition, setHistoryPosition, systemHistory, activePage } =
    useSystemStore((state) => state);
  const title = activePage.name;

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
    <div className="flex flex-col space-y-6">
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
        {SystemData.map((item, index) => {
          if (index === 0) {
            return;
          }

          const isSpace = [3, 7, 13, 18, 21].includes(index);
          return (
            <>
              <SideBarItem
                key={item.id}
                title={item.name}
                icon={item.icon}
                onClick={() => setPage(item)}
              />
              {isSpace && <div className="h-3" />}
            </>
          );
        })}
      </div>
    </div>
  );
}

interface SideBarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: { type: IconType; bg: TailwindBgColor; color?: TailwindTextColor };
}

function SideBarItem({
  title,
  icon: { type: Icon, bg, color },
  ...props
}: SideBarItemProps) {
  return (
    <div
      role="button"
      className="flex flex-row items-center space-x-1"
      onClick={props.onClick}
    >
      <div
        className={cn(
          'rounded-lg p-0.5 bg-blue-500',
          props.className,
          bg,
          color
        )}
      >
        <Icon className="size-5" />
      </div>
      <span>{title}</span>
    </div>
  );
}

export function ContentBox({
  children,
  title,
  subTitle,
  ...divProps
}: {
  children?: ReactNode;
  title?: string;
  subTitle?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="space-y-3">
      <div className={cn('flex flex-col', title && 'm-3')}>
        {title && <span className="font-bold text-lg">{title}</span>}
        {subTitle && (
          <span className="text-sm text-neutral-400">{subTitle}</span>
        )}
      </div>
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

export function ContentBoxItem({
  Icon,
  title,
  chevronText,
  bg,
  iconColor
}: {
  Icon: IconType;
  title: string;
  chevronText?: string;
  bg?: TailwindBgColor;
  iconColor?: TailwindTextColor;
}) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-3">
        <span
          className={cn(
            'bg-neutral-400 text-white w-6 h-6 flex items-center justify-center rounded',
            bg,
            iconColor
          )}
        >
          <Icon />
        </span>
        <span>{title}</span>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        {chevronText && <span className="text-neutral-400">{chevronText}</span>}
        <ChevronRight className="text-white/20 size-5" />
      </div>
    </div>
  );
}

function Content() {
  const {
    activePage: { id }
  } = useSystemStore((state) => state);
  return (
    <div className="w-full space-y-3 overflow-hidden h-full">
      {id === 'profile' && <Profile />}
      {id === 'wi-fi' && <Wifi />}
      {id === 'bluetooth' && <Bluetooth />}
      {id === 'network' && <Network />}
      {id === 'notifications' && <Notifications />}
      {id === 'sound' && <Sound />}
      {id === 'focus' && <Focus />}
      {id === 'screen-time' && <ScreenTime />}
      {id === 'general' && <General />}
      {id === 'appearance' && <Appearance />}
      {id === 'accessibility' && <Accessibility />}
      {id === 'control-centre' && <ControlCentre />}
      {id === 'siri-spotlight' && <Siri />}
      {id === 'privacy-security' && <Privacy />}
      {id === 'desktop' && <Desktop />}
      {id === 'displays' && <Displays />}
      {id === 'wallpaper' && <Wallpaper />}
      {id === 'screen-saver' && <ScreenSaver />}
      {id === 'battery' && <Battery />}
      {id === 'lock-screen' && <LockScreen />}
      {id === 'touch-id' && <TouchId />}
      {id === 'users' && <Users />}
      {id === 'passwords' && <Passwords />}
      {id === 'internet-account' && <InternetAccount />}
      {id === 'game-center' && <GameCenter />}
      {id === 'wallet' && <Wallet />}
      {id === 'keyboard' && <Keyboard />}
      {id === 'mouse' && <Mouse />}
      {id === 'trackpad' && <TrackPad />}
      {id === 'printers-scanners' && <Printers />}
    </div>
  );
}
