import { cn } from '@/lib/utils';
import { Roboto_Mono } from 'next/font/google';
import { DraggableItem } from './draggable-item';
import { AppProps } from '@/data/Apps';

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '700']
});
export function Iterm2({ appData, closeApp, bringToFront }: AppProps) {
  return (
    <DraggableItem
      appData={appData}
      onclose={closeApp}
      barItem={barItem()}
      bringToFront={bringToFront}
    >
      <div
        className={cn(
          'w-full h-full flex flex-col bg-slate-900/80 bg-clip-padding backdrop-filter backdrop-blur-sm border-l border-r border-b px-1 border-slate-400/60',
          font.className
        )}
      >
        <span className="text-sm text-neutral-300">
          Last login: Wed Mar 6 06:52:22 on ttys00
        </span>
        <span className="text-teal-300 font-bold">~</span>
        <span className="text-green-300">&gt;</span>
      </div>
    </DraggableItem>
  );
}

function barItem() {
  return (
    <div className="text-sm text-white/40 flex justify-center w-full">
      rasmuselmersson@Rasmus-MacBook-Pro:~
    </div>
  );
}
