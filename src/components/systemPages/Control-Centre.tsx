import { IconType } from 'react-icons';
import { ContentBox, TailwindBgColor, TailwindTextColor } from '../apps/system';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';
import { IoIosBluetooth, IoIosWifi } from 'react-icons/io';
import { MdWifiTethering } from 'react-icons/md';
import { IoIosMoon } from 'react-icons/io';
import { Button } from '../ui/button';
import { IoSunny, IoApps, IoPersonCircleOutline } from 'react-icons/io5';
import { HiSpeakerWave } from 'react-icons/hi2';
import { TbBoxMultiple } from 'react-icons/tb';
import { BsBatteryFull, BsUniversalAccessCircle } from 'react-icons/bs';
import { Switch } from '../ui/switch';
import { SiShazam } from 'react-icons/si';
import { LuEar } from 'react-icons/lu';
import { BsBrightnessAltHigh } from 'react-icons/bs';
import { PiClockFill } from 'react-icons/pi';
import { FcGlobe } from 'react-icons/fc';
import { FcIntegratedWebcam } from 'react-icons/fc';

const values: ValuesProps[] = [
  { value: 'show-menu-bar', title: 'Show in Menu Bar' },
  { value: 'dont-menu-bar', title: 'Don´t Show in Menu Bar' },
  { value: 'show-when-active', title: 'Show When Active' },
  { value: 'always-show', title: 'Always Show in Menu Bar' }
];
export function ControlCentre() {
  return (
    <div className="space-y-8">
      <ContentBox
        className="space-y-2"
        title="Control Centre Modules"
        subTitle="These modules are always visible in Control Centre. You can choose when they should also show in the Menu Bar."
      >
        <ContentBoxSelectItem
          title="Wi-Fi"
          values={values.slice(0, 1)}
          defaultValue={0}
          Icon={IoIosWifi}
          bg="bg-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Bluetooth"
          values={values.slice(0, 2)}
          defaultValue={1}
          Icon={IoIosBluetooth}
          bg="bg-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Airdrop"
          values={values.slice(0, 2)}
          defaultValue={1}
          Icon={MdWifiTethering}
          iconColor="text-blue-500"
          bg="bg-white"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Focus"
          values={values.slice(0, 2)}
          defaultValue={1}
          Icon={IoIosMoon}
          bg="bg-purple-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Stage Manager"
          values={values.slice(0, 2)}
          defaultValue={1}
          Icon={IoApps}
          bg="bg-black"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Screen Mirroring"
          values={values.slice(0, 3)}
          defaultValue={2}
          Icon={TbBoxMultiple}
          bg="bg-teal-300"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Display"
          values={values.slice(0, 3)}
          defaultValue={2}
          Icon={IoSunny}
          bg="bg-blue-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Sound"
          values={values.slice(0, 2)}
          defaultValue={1}
          Icon={HiSpeakerWave}
          bg="bg-red-500"
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Now Playing"
          values={values.slice(0, 2)}
          defaultValue={1}
          Icon={IoIosWifi}
          bg="bg-yellow-500"
        />
      </ContentBox>

      <div className="space-y-1">
        <ContentBox
          className="space-y-2"
          title="Other Modules"
          subTitle="These modules can be added to Control Centre and the Menu Bar."
        >
          <div className="flex flex-row space-x-3 pb-2">
            <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded">
              <BsUniversalAccessCircle />
            </span>
            <span>Accessibility Shortcuts</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="pl-9 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show in Menu Bar</span> <Switch />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show in Control Centre</span> <Switch />
            </div>
          </div>
        </ContentBox>

        <ContentBox className="space-y-2">
          <div className="flex flex-row space-x-3 pb-2">
            <span className="bg-green-500 text-white w-6 h-6 flex items-center justify-center rounded">
              <BsBatteryFull />
            </span>
            <span>Battery</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="pl-9 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show in Menu Bar</span> <Switch checked />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show in Control Centre</span> <Switch />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show in Percentage</span> <Switch checked />
            </div>
          </div>
        </ContentBox>

        <ContentBox className="space-y-2">
          <div className="flex flex-row space-x-3 pb-2">
            <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded">
              <SiShazam />
            </span>
            <span>Music Recognition</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="pl-9 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show in Menu Bar</span> <Switch />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show in Control Centre</span> <Switch />
            </div>
          </div>
        </ContentBox>

        <ContentBox className="space-y-2">
          <div className="flex flex-row space-x-3 pb-2">
            <span className="bg-neutral-400 text-white w-6 h-6 flex items-center justify-center rounded">
              <LuEar />
            </span>
            <span>Hearing</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="pl-9 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show in Menu Bar</span> <Switch />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show in Control Centre</span> <Switch />
            </div>
          </div>
        </ContentBox>

        <ContentBox className="space-y-2">
          <div className="flex flex-row space-x-3 pb-2">
            <span className="bg-neutral-400 text-white w-6 h-6 flex items-center justify-center rounded">
              <IoPersonCircleOutline />
            </span>
            <span>Fast User Switching</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="pl-9 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show in Menu Bar</span> <Switch />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show in Control Centre</span> <Switch />
            </div>
          </div>
        </ContentBox>

        <ContentBox className="space-y-2">
          <div className="flex flex-row space-x-3 pb-2">
            <span className="bg-neutral-400 text-white w-6 h-6 flex items-center justify-center rounded">
              <BsBrightnessAltHigh />
            </span>
            <span>Keyboard Brightness</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="pl-9 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show in Menu Bar</span> <Switch />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show in Control Centre</span> <Switch />
            </div>
          </div>
        </ContentBox>
      </div>

      <div className="space-y-1">
        <ContentBox title="Menu Bar Only" className="space-y-2">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-3 pb-2">
              <span className="bg-neutral-400 text-white w-6 h-6 flex items-center justify-center rounded">
                <PiClockFill />
              </span>
              <span>Keyboard Brightness</span>
            </div>
            <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
              Clock Options...
            </Button>
          </div>
          <Separator className="bg-white/10" />
          <ContentBoxSelectItem
            title="Spotlight"
            values={values.slice(0, 2)}
            defaultValue={1}
            Icon={IoIosWifi}
          />
          <Separator className="bg-white/10" />
          <ContentBoxSelectItem
            title="Siri"
            values={values.slice(0, 2)}
            defaultValue={1}
            Icon={FcGlobe}
            bg="bg-black"
          />
          <Separator className="bg-white/10" />
          <ContentBoxSelectItem
            title="Time Machine"
            values={values.slice(0, 2)}
            defaultValue={1}
            Icon={FcIntegratedWebcam}
          />
        </ContentBox>

        <ContentBox>
          <div className="flex flex-row justify-between items-center">
            <span>Automatically hide and show the menu bar</span>
            <Select>
              <SelectTrigger className="w-[220px] bg-transparent border-none">
                <SelectValue
                  defaultValue="in-full-screen"
                  placeholder="In Full Screen Only"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="in-full-screen">
                    In Full Screen Only
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row justify-between items-center">
            <span>Recent documents, applications and servers</span>
            <Select>
              <SelectTrigger className="w-[220px] bg-transparent border-none">
                <SelectValue defaultValue="10" placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </ContentBox>
        <div className="flex flex-row items-center justify-end pt-6">
          <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
            ?
          </Button>
        </div>
      </div>
    </div>
  );
}

type ValuesProps = { value: string; title: string };

interface ContentBoxSelectItemProps {
  title: string;
  values: ValuesProps[];
  defaultValue: number;
  Icon?: IconType;
  bg?: TailwindBgColor;
  iconColor?: TailwindTextColor;
}
export function ContentBoxSelectItem({
  title,
  values,
  defaultValue,
  Icon,
  bg,
  iconColor
}: ContentBoxSelectItemProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center space-x-3">
        {Icon && (
          <span
            className={cn(
              'bg-neutral-400 text-white w-6 h-6 flex items-center justify-center rounded',
              bg,
              iconColor
            )}
          >
            <Icon />
          </span>
        )}
        <span>{title}</span>
      </div>
      <Select>
        <SelectTrigger className="w-[220px] bg-transparent border-none">
          <SelectValue
            defaultValue={values[defaultValue].value}
            placeholder={values[defaultValue].title}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {values.map((value) => (
              <SelectItem key={value.value} value={value.value}>
                {value.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
