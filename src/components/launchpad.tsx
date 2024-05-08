import { useSystem } from '@/hooks/useSystem';
import { apps, AppData } from '@/data/Apps';
import Image from 'next/image';
import { Input } from './ui/input';
import { useState, ChangeEvent } from 'react';

export function Launchpad() {
  const { launchPad, setLaunchPad, openApp, bringToFront } = useSystem();

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
    <div
      className={`z-[999999] fixed inset-0 bg-slate-800/50 backdrop-blur-2xl flex flex-col items-center p-10 transition-opacity duration-800 ${launchPad ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClick}
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
    </div>
  );
}

interface LaunchpadItemProps {
  appData: AppData;
  openApp(): void;
  bringToFront(): void;
  setLaunchPad(): void;
}

function LaunchpadItem({
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
      <span className="text-white">{title}</span>
    </div>
  );
}
