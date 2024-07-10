import { IoHourglassOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { ContentBox } from '../apps/system';
import { ChevronRight } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { VscGraph } from 'react-icons/vsc';
import { TiMessages } from 'react-icons/ti';
import { MdOutlineDoNotDisturb } from 'react-icons/md';

export function ScreenTime() {
  return (
    <div className="space-y-8">
      <ContentBox className="p-3 mb-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-3">
            <span className="bg-purple-500 text-white w-11 h-9 flex items-center justify-center rounded-lg text-2xl">
              <IoHourglassOutline />
            </span>
            <div className="flex flex-col">
              <span>Screen Time</span>
              <span className="text-sm text-neutral-400">
                Understand how much time you spend on your devices. Set limits
                on how long and when apps can be used. Restrict apps, websites
                and more.
              </span>
            </div>
          </div>
        </div>
      </ContentBox>

      <ContentBox className="p-3" title="Limit Usage">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-lg">
                <VscGraph />
              </span>
              <span>App & Website Activity</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="text-blue-500 bg-white w-6 h-6 flex items-center justify-center rounded-lg">
                <RxDoubleArrowUp />
              </span>
              <span>Screen Distance</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
        </div>
      </ContentBox>

      <ContentBox className="p-3" title="Communication">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-green-500 text-white w-6 h-6 flex items-center justify-center rounded-lg text-xl">
                <IoPersonCircleOutline />
              </span>
              <span>Communication Limits</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-lg">
                <TiMessages />
              </span>
              <span>Communication Safety</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
        </div>
      </ContentBox>

      <div className="space-y-4">
        <ContentBox className="p-3" title="Restrictions">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-lg text-xl">
                <MdOutlineDoNotDisturb />
              </span>
              <span>Content & Privacy</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
        </ContentBox>

        <ContentBox className="mt-6">
          <div className="flex flex-row justify-between space-x-8">
            <div className="flex flex-col">
              <span>Share across devices</span>
              <span className="text-sm text-neutral-400">
                You can enable this on any device signed in to iCloud to sync
                your Screen Time settings.
              </span>
            </div>
            <Switch />
          </div>
        </ContentBox>

        <ContentBox>
          <div className="flex flex-row justify-between space-x-8">
            <div className="flex flex-col">
              <span>Lock Screen Time Settings</span>
              <span className="text-sm text-neutral-400">
                Use a passcode to secure Screen Time settings.
              </span>
            </div>
            <Switch />
          </div>
        </ContentBox>

        <ContentBox>
          <div className="flex flex-row justify-between space-x-8">
            <div className="flex flex-col">
              <span>Family Sharing</span>
              <span className="text-sm text-neutral-400">
                Set up Family Sharing to use screen time with your family&apos;s
                devices.
              </span>
            </div>
            <Button className="bg-neutral-500 text-white p-3 h-7 text-md">
              Set Up...
            </Button>
          </div>
        </ContentBox>
      </div>

      <div className="flex flex-row items-center justify-end">
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
