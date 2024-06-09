import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Empty from '@/assets/apps/empty-trashcan.png';
import TrashcanImage from '@/assets/apps/trashcan.png';
import { useAppStore, useFinderStore } from './providers/store-provider';

export function Trashcan() {
  const { bringToFront, openApp } = useAppStore((state) => state);
  const { setSelectedFinderId, selectedFinderId, bin } = useFinderStore(
    (state) => state
  );

  const isOpen = selectedFinderId === 'bin';
  const isEmpty = !bin.children?.length;

  const img = isEmpty ? Empty : TrashcanImage;

  const handleClick = () => {
    openApp('finder');
    bringToFront('finder');
    setSelectedFinderId('bin');
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger onClick={handleClick}>
          <li className="flex flex-col justify-center items-center relative overflow-hidden no-scrollbar">
            <Image src={img} alt="trashcan" className=" w-[4.2rem]" />
            <div
              className={cn(
                'h-1 w-1 rounded-full bg-white/60 mt-1',
                !isOpen && 'opacity-0'
              )}
            />
          </li>
        </TooltipTrigger>
        <TooltipContent className="mb-2">
          Bin
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
