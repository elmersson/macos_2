import { apps, type AppData } from '@/data/Apps';
import Image from 'next/image';
import { Input } from './ui/input';
import { useState, type ChangeEvent } from 'react';
import { useAppStore, useSystemStore } from './providers/store-provider';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Launchpad() {
  const { launchPad, setLaunchPad } = useSystemStore((state) => state);
  const { openApp, bringToFront } = useAppStore((state) => state);

  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleClick = () => {
    setLaunchPad(false);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredApps = apps.filter(
    (app) =>
      app.id !== 'launchpad' && app.title.toLowerCase().includes(searchQuery)
  );

  return (
    <motion.div
      className="z-[999999] fixed inset-0 bg-slate-800/50 backdrop-blur-2xl flex flex-col items-center p-10"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: launchPad ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div className="relative w-56">
          <span
            className={cn(
              'absolute inset-y-0 flex items-center transition-all duration-300 transform left-[35%] -translate-x-1/2',
              isFocused && 'left-5'
            )}
          >
            <svg
              className="h-5 w-5 text-white transition-all duration-300 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Search Icon"
            >
              <title>Search Icon</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <Input
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="text-center text-lg bg-white/10 border-white/20 font-extralight focus:text-left pl-10 focus:pl-10 focus:outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-14 mt-10">
        {filteredApps.map((app) => (
          <LaunchpadItem
            key={app.id}
            appData={app}
            openApp={() => openApp(app.id)}
            bringToFront={() => bringToFront(app.id)}
            setLaunchPad={() => setLaunchPad(false)}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface LaunchpadItemProps {
  appData: AppData;
  openApp(): void;
  bringToFront(): void;
  setLaunchPad(): void;
}

export function LaunchpadItem({
  appData,
  openApp,
  bringToFront,
  setLaunchPad
}: LaunchpadItemProps) {
  const { img, title, url } = appData;

  const handlePress = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (url) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    } else {
      openApp();
      bringToFront();
    }
    setLaunchPad();
  };

  return (
    <div
      className="flex flex-col justify-center items-center"
      onClick={handlePress}
    >
      <Image src={img} alt={title} className="w-36" />
      <span className="text-white line-clamp-1">{title}</span>
    </div>
  );
}
