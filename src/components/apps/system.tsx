import { ScrollArea } from '../ui/scroll-area';
import { DraggableItem } from './draggable-item';
import { IoIosArrowBack, IoIosArrowForward, IoIosCloud } from 'react-icons/io';

import { AppProps } from '@/data/Apps';
import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { useSystemStore } from '../providers/store-provider';
import { IconType } from 'react-icons';
import { IoIosWifi, IoIosBluetooth, IoIosGlobe } from 'react-icons/io';
import { IoCloseSharp, IoSearchSharp } from 'react-icons/io5';
import Image from 'next/image';
import ProfileImage from '@/assets/images/ProfileImage.png';
import { Button } from '../ui/button';
import { MdContactMail } from 'react-icons/md';
import { ChevronRight } from 'lucide-react';
import { AiFillSecurityScan } from 'react-icons/ai';
import { IoCard } from 'react-icons/io5';
import { SiAppstore } from 'react-icons/si';
import { IoIosPeople, IoMdContact } from 'react-icons/io';

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
      <div className="flex flex-row space-x-2">
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
        <SideBarItem title="Wi-Fi" icon={IoIosWifi} />
        <SideBarItem title="Bluetooth" icon={IoIosBluetooth} />
        <SideBarItem title="Network" icon={IoIosGlobe} />
      </div>
      <div className="flex flex-col">
        <span>Notifications</span>
        <span>Sound</span>
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

function ContentBox({
  children,
  title,
  ...divProps
}: {
  children: ReactNode;
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
  return (
    <div className="w-full space-y-3">
      <div className="flex flex-col justify-center items-center text-center space-y-1 py-3">
        <div className="w-28 h-28 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2">
          <Image
            src={ProfileImage}
            alt="account image"
            className="rounded-full drop-shadow object-cover object-center"
            fill
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold">Rasmus Elmersson</span>
          <span className="text-lg">elmerssonrasmus@gmail.com</span>
        </div>
      </div>
      <ContentBox className="p-3">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-neutral-500 p-0.5 rounded-sm">
                <MdContactMail />
              </span>
              <span>Personal information</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-neutral-500 p-0.5 rounded-sm">
                <AiFillSecurityScan />
              </span>
              <span>Sign-In & Security</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-neutral-500 p-0.5 rounded-sm">
                <IoCard />
              </span>
              <span>Payment & Shipping</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
        </div>
      </ContentBox>

      <ContentBox className="p-3 mb-8">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-white text-blue-500 p-0.5 rounded-sm">
                <IoIosCloud />
              </span>
              <span>iCloud</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-blue-500 p-0.5 rounded-sm">
                <SiAppstore />
              </span>
              <span>Media & Purchases</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-white text-blue-500 p-0.5 rounded-sm">
                <IoIosPeople />
              </span>
              <span>Family Sharing</span>
            </div>
            <div className="flex flex-row space-x-2">
              <span className="text-sm text-white/60">Set Up</span>
              <ChevronRight className="text-white/20 size-5" />
            </div>
          </div>
        </div>
      </ContentBox>

      <ContentBox className="p-3" title="Devices">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <span>Rasmus´s MacBook Pro</span>
            <span className="text-sm text-white/50">
              This Macbook Pro 16&quot;
            </span>
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-col">
            <span>iPad</span>
            <span className="text-sm text-white/50">iPad</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-col">
            <span>Rasmus´s Apple Watch</span>
            <span className="text-sm text-white/50">Apple Watch SE</span>
          </div>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-3">
            <span className="bg-neutral-500 p-0.5 rounded-sm">
              <IoMdContact />
            </span>
            <span>Contact Key Verification</span>
          </div>
          <ChevronRight className="text-white/20 size-5" />
        </div>
      </ContentBox>
      <div className="flex flex-row justify-between pt-3">
        <Button className="bg-neutral-500 text-white p-3 h-3">
          Sign Out...
        </Button>
        <div className="flex flex-row items-center space-x-3">
          <Button className="bg-neutral-500 text-white p-3 h-3">
            About Apple ID & Privacy
          </Button>
          <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
            ?
          </Button>
        </div>
      </div>
    </div>
  );
}

interface SideBarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: IconType;
}

function SideBarItem({ title, icon: Icon, ...props }: SideBarItemProps) {
  return (
    <div className="flex flex-row items-center space-x-1">
      <div className={cn('rounded-lg p-0.5 bg-blue-500', props.className)}>
        <Icon className=" size-5" />
      </div>
      <span>{title}</span>
    </div>
  );
}
