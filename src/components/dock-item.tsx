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

export function DockItem({
  title,
  img,
  id,
  isOpen
}: Omit<AppData, 'z' | 'size'>) {
  const { setLaunchPad, openApp, bringToFront } = useSystem();

  const handleClick = () => {
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
            className="flex justify-center relative group overflow-hidden no-scrollbar"
            id={id}
            onClick={handleClick}
          >
            <Image src={img} alt={title} className=" w-[4.2rem]" />
            <div
              className={`h-1 w-1 m-0 rounded-full bg-slate-950/80 dark:bg-slate-50/80 mt-1 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              } transition-all duration-100`}
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
