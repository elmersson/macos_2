import { BsUniversalAccessCircle } from 'react-icons/bs';
import { ContentBox, ContentBoxItem } from '../apps/system';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { IoIosBluetooth, IoIosMoon } from 'react-icons/io';
import { TiLocationArrow } from 'react-icons/ti';
import {
  IoMic,
  IoEye,
  IoExtensionPuzzleSharp,
  IoHandLeft
} from 'react-icons/io5';
import { PiVideoCameraFill } from 'react-icons/pi';
import { HiSpeakerphone } from 'react-icons/hi';
import { VscGraph } from 'react-icons/vsc';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaHouseChimneyWindow } from 'react-icons/fa6';
import { ContentBoxSelectItem } from './Control-Centre';
import { Checkbox } from '../ui/checkbox';

export function Privacy() {
  return (
    <div>
      <ContentBox title="Privacy" className="space-y-3">
        <ContentBoxItem
          Icon={TiLocationArrow}
          title="Location Services"
          bg="bg-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={IoIosBluetooth}
          title="Bluetooth"
          bg="bg-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={IoMic} title="Microphone" bg="bg-neutral-400" />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={PiVideoCameraFill}
          title="Camera"
          bg="bg-neutral-400"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem Icon={IoIosMoon} title="Focus" bg="bg-purple-500" />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BsUniversalAccessCircle}
          title="Accessibility"
          bg="bg-blue-500"
        />
      </ContentBox>

      <ContentBox className="space-y-2">
        <ContentBoxItem
          Icon={IoEye}
          title="Sensitive Content Warning"
          bg="bg-blue-500"
          chevronText="Off"
        />
      </ContentBox>

      <ContentBox className="space-y-2">
        <ContentBoxItem
          Icon={VscGraph}
          title="Analytics & Improvements"
          bg="bg-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={HiSpeakerphone}
          title="Apple Advertising"
          bg="bg-blue-500"
        />
      </ContentBox>

      <div className="my-8">
        <ContentBox title="Security" className="space-y-2">
          <span>Allow applications downloaded from</span>
          <div className="flex flex-row space-x-2 items-center">
            <Checkbox className="rounded-full bg-neutral-400/50 border-white/20" />
            <span>App Store</span>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <Checkbox
              className="rounded-full bg-neutral-400/50 border-white/20"
              checked
            />
            <span>App Store and identified developers</span>
          </div>
        </ContentBox>

        <ContentBox>
          <ContentBoxSelectItem
            title="Allow accessories to connect"
            values={[
              {
                value: 'ask-new',
                title: 'Ask for New Accessories'
              }
            ]}
            defaultValue={0}
          />
        </ContentBox>

        <ContentBox className="space-y-2">
          <ContentBoxItem
            Icon={FaHouseChimneyWindow}
            title="FileVault"
            bg="bg-neutral-400"
            chevronText="Off"
          />
          <Separator className="bg-white/10" />
          <ContentBoxItem
            Icon={IoHandLeft}
            title="Lockdown Mode"
            bg="bg-blue-500"
            chevronText="Off"
          />
        </ContentBox>
      </div>

      <ContentBox title="Others" className="space-y-2">
        <ContentBoxItem
          Icon={IoExtensionPuzzleSharp}
          title="Extensions"
          bg="bg-neutral-400"
        />
        <Separator className="bg-white/10" />
        <ContentBoxItem
          Icon={BsFillPatchCheckFill}
          title="Profiles"
          bg="bg-neutral-400"
        />
      </ContentBox>

      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Advanced...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
