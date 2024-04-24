'use client';

import { useSystem } from '@/hooks/useSystem';
import { cn } from '@/lib/utils';
import { Battery } from './navbar/battery';
import { AppleMenu } from './navbar/apple-menu';
import { ControlCentre } from './navbar/control-centre';
import { WidgetsBar } from './navbar/widgets-bar';
import { Hidden } from './navbar/hidden';
import { Wifi } from './navbar/wifi';
import { AppMenu } from './navbar/app-menu';

export function Navbar() {
  const { logedIn } = useSystem();

  return (
    <div
      className={cn(
        'flex justify-between pt-2 pb-3 fixed top-0 left-0 right-0 z-50 w-full',
        logedIn &&
          'bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 dark:bg-slate-800/40'
      )}
    >
      <div>
        {logedIn && (
          <div className="flex flex-row items-center">
            <AppleMenu />
            <AppMenu />
          </div>
        )}
      </div>
      <div className="flex flex-row items-center px-3">
        {logedIn && <Hidden />}
        <Battery />
        <Wifi />
        {logedIn && <ControlCentre />}
        <WidgetsBar />
      </div>
    </div>
  );
}
