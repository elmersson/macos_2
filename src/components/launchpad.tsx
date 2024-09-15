import { apps, type AppData } from '@/data/Apps';
import Image from 'next/image';
import { Input } from './ui/input';
import { useState, type ChangeEvent } from 'react';
import { useAppStore, useSystemStore } from './providers/store-provider';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export function Launchpad() {
  const { launchPad, setLaunchPad } = useSystemStore((state) => state);
  const { openApp, bringToFront } = useAppStore((state) => state);

  const [searchQuery, setSearchQuery] = useState('');

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
        <Input
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
        />
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
