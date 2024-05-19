import { AppData } from '@/data/Apps';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useAppStore, useSystemStore } from './providers/store-provider';

export function DockItem({
  title,
  img,
  id,
  url,
  isOpen
}: Omit<AppData, 'z' | 'size' | 'isMinimized' | 'position'>) {
  const { setLaunchPad } = useSystemStore((state) => state);
  const { openApp, bringToFront } = useAppStore((state) => state);

  const handleClick = () => {
    if (title === 'Launchpad') {
      setLaunchPad(true);
    } else if (url) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    } else {
      openApp(id);
      bringToFront(id);
    }
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <li
            className="flex flex-col justify-center items-center relative overflow-hidden no-scrollbar"
            id={id}
            onClick={handleClick}
          >
            <Image src={img} alt={title} className=" w-[4.2rem]" />
            <div
              className={cn(
                'h-1 w-1 rounded-full bg-white/60 mt-1',
                !isOpen && 'opacity-0'
              )}
            />
          </li>
        </TooltipTrigger>
        <TooltipContent className="mb-2">
          {title}
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
