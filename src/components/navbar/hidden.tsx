import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoRocketSharp
} from 'react-icons/io5';
import { TbSquareDotFilled, TbRectangleFilled } from 'react-icons/tb';
import { SiAdobecreativecloud, SiAlfred, SiStackshare } from 'react-icons/si';
import { RxDividerVertical } from 'react-icons/rx';
import { RiCactusFill } from 'react-icons/ri';
import { PiMonitorFill } from 'react-icons/pi';
import { LuCommand } from 'react-icons/lu';

export function Hidden() {
  const [isHidden, setIsHidden] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleHidden = () => {
    setIsHidden(!isHidden);
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  };
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isHidden) {
      timer = setTimeout(() => {
        setIsHidden(false);
      }, 10000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isHidden]);

  return (
    <div className="flex flex-row items-center">
      <div
        onClick={handleHidden}
        className={cn(
          'flex items-center px-2 py-1 ml-1 rounded-md',
          isPressed && 'bg-slate-100/20'
        )}
      >
        {isHidden && (
          <div className="flex flex-row space-x-[1.15rem] items-center">
            <SiAdobecreativecloud style={{ fontSize: '1.2rem' }} />
            <TbSquareDotFilled style={{ fontSize: '1.2rem' }} />
            <SiStackshare style={{ fontSize: '1.2rem' }} />
            <IoRocketSharp style={{ fontSize: '1.2rem' }} />
            <PiMonitorFill style={{ fontSize: '1.2rem' }} />
            <LuCommand style={{ fontSize: '1rem' }} />
            <RiCactusFill style={{ fontSize: '1.2rem' }} />
            <SiAlfred style={{ fontSize: '1.2rem' }} />
            <TbRectangleFilled style={{ fontSize: '1.2rem' }} />
            <RxDividerVertical />
          </div>
        )}
        {isHidden ? <IoChevronForwardOutline /> : <IoChevronBackOutline />}
      </div>
    </div>
  );
}
