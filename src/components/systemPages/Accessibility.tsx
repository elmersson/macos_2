import { ContentBox, ContentBoxItem } from '../apps/system';
import { Button } from '../ui/button';
import {
  BsUniversalAccessCircle,
  BsDisplay,
  BsSoundwave,
  BsKeyboardFill,
  BsPersonLinesFill
} from 'react-icons/bs';
import { Separator } from '../ui/separator';
import { TbZoomInAreaFilled } from 'react-icons/tb';
import {
  BiSolidMessageDots,
  BiSolidMessageDetail,
  BiSolidPointer
} from 'react-icons/bi';
import { LuEar } from 'react-icons/lu';
import { HiSpeakerWave } from 'react-icons/hi2';
import { ImPhoneHangUp } from 'react-icons/im';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { FcGlobe } from 'react-icons/fc';

export function Accessibility() {
  return (
    <div className="space-y-8">
      <ContentBox title="Vision" className="space-y-2">
        <ContentBoxItem
          Icon={BsUniversalAccessCircle}
          title="VoiceOver"
          bg="bg-black"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={TbZoomInAreaFilled} title="Zoom" bg="bg-black" />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={BsDisplay} title="Display" bg="bg-blue-500" />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BiSolidMessageDetail}
          title="Spoken Content"
          bg="bg-black"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BiSolidMessageDots}
          title="Descriptions"
          bg="bg-black"
        />
      </ContentBox>

      <ContentBox title="Hearing" className="space-y-2">
        <ContentBoxItem Icon={LuEar} title="Hearing Devices" bg="bg-blue-500" />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={HiSpeakerWave} title="Audio" bg="bg-red-500" />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={ImPhoneHangUp} title="RTT" bg="bg-green-500" />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BiSolidMessageDetail}
          title="Captions"
          bg="bg-black"
        />
      </ContentBox>

      <ContentBox title="Motor" className="space-y-2">
        <ContentBoxItem
          Icon={BsSoundwave}
          title="Voice Control"
          bg="bg-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BsKeyboardFill}
          title="Keyboard"
          bg="bg-neutral-400"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BiSolidPointer}
          title="Pointer Control"
          bg="bg-neutral-400"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={HiOutlineSquares2X2}
          title="Switch Control"
          bg="bg-black"
        />
      </ContentBox>

      <ContentBox title="Speech" className="space-y-2">
        <ContentBoxItem
          Icon={BsKeyboardFill}
          title="Live Speech"
          bg="bg-black"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BsPersonLinesFill}
          title="Personal Voice"
          bg="bg-blue-500"
        />
      </ContentBox>

      <div className="space-y-6">
        <ContentBox title="General" className="space-y-2">
          <ContentBoxItem Icon={FcGlobe} title="Siri" bg="bg-black" />
          <Separator className="bg-white/10" />
          <ContentBoxItem
            Icon={BsUniversalAccessCircle}
            title="Shortcut"
            bg="bg-blue-500"
          />
        </ContentBox>
        <div className="flex flex-row items-center justify-end">
          <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
            ?
          </Button>
        </div>
      </div>
    </div>
  );
}
