import { FaHardDrive } from 'react-icons/fa6';
import { ContentBox, ContentBoxItem } from '../apps/system';
import { Separator } from '../ui/separator';
import { IoIosLaptop, IoIosGlobe, IoMdWalk } from 'react-icons/io';
import { IoCog, IoList, IoLogoApple } from 'react-icons/io5';
import { MdWifiTethering } from 'react-icons/md';
import { LuCalendarClock } from 'react-icons/lu';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { FcIntegratedWebcam } from 'react-icons/fc';

export function General() {
  return (
    <div className="space-y-2">
      <ContentBox className="space-y-3">
        <ContentBoxItem Icon={IoIosLaptop} title="About" />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={IoCog} title="Software Update" />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={FaHardDrive} title="Storage" />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={MdWifiTethering}
          title="Airdrop & Handoff"
          bg="bg-white"
          iconColor="text-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={IoList} title="Login Items" />
      </ContentBox>

      <ContentBox>
        <ContentBoxItem
          Icon={IoLogoApple}
          title="AppleCare & Warranty"
          bg="bg-white"
          iconColor="text-red-500"
        />
      </ContentBox>

      <ContentBox className="space-y-3">
        <ContentBoxItem
          Icon={IoIosGlobe}
          title="Language & Region"
          bg="bg-blue-500"
          iconColor="text-white"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={LuCalendarClock}
          title="Date & Time"
          bg="bg-blue-500"
          iconColor="text-white"
        />
      </ContentBox>

      <ContentBox className="space-y-3">
        <ContentBoxItem Icon={IoMdWalk} title="Sharing" />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={FcIntegratedWebcam}
          title="Time Machine"
          bg="bg-white"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BsArrowCounterclockwise}
          title="Transfer or Reset"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={FaHardDrive} title="Startup Disk" />
      </ContentBox>
    </div>
  );
}
