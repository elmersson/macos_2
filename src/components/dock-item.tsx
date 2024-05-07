import { AppData } from '@/data/Apps';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { useSystem } from '@/hooks/useSystem';
import { cn } from '@/lib/utils';

export function DockItem({
  title,
  img,
  id,
  isOpen
}: Omit<AppData, 'z' | 'size' | 'isMinimized' | 'position'>) {
  const { setLaunchPad, openApp, bringToFront } = useSystem();

  const handleClick = () => {
    console.log(id, isOpen);
    if (title === 'Launchpad') {
      setLaunchPad(true);
    } else if (id === 'github') {
      const newWindow = window.open(
        'https://github.com/elmersson',
        '_blank',
        'noopener,noreferrer'
      );
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
