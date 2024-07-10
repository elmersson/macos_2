import { ContentBox } from '../apps/system';
import { Separator } from '../ui/separator';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { IoIosMoon } from 'react-icons/io';
import { IoBed } from 'react-icons/io5';
import { BsPersonStanding, BsPersonBadgeFill } from 'react-icons/bs';

export function Focus() {
  return (
    <div>
      <ContentBox className="p-3 mb-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-purple-500 text-white w-9 h-9 flex items-center justify-center rounded-lg text-2xl">
                <IoIosMoon />
              </span>
              <span>Do Not Disturb</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-teal-500 text-white w-9 h-9 flex items-center justify-center rounded-lg text-3xl">
                <IoBed />
              </span>
              <span>Sleep</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-sky-300 text-white w-9 h-9 flex items-center justify-center rounded-lg text-2xl">
                <BsPersonStanding />
              </span>
              <span>Vardag</span>
            </div>
            <div className="flex flex-row space-x-2">
              <span className="text-sm text-white/60">On</span>
              <ChevronRight className="text-white/20 size-5" />
            </div>
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-sky-300 text-white w-9 h-9 flex items-center justify-center rounded-lg text-2xl">
                <BsPersonBadgeFill />
              </span>
              <span>Work</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
        </div>
      </ContentBox>
      <div className="flex flex-row items-center justify-end ">
        <Button className="bg-neutral-500 text-white p-3 h-3">Add Focus</Button>
      </div>

      <ContentBox className="mt-8 mb-3">
        <div className="flex flex-row justify-between space-x-8">
          <div className="flex flex-col">
            <span>Share across devices</span>
            <span className="text-sm text-neutral-400">
              Focus is shared across your devices, and turning one on for this
              device will turn it on for all of them.
            </span>
          </div>
          <Switch checked />
        </div>
      </ContentBox>

      <ContentBox className="mb-6">
        <div className="flex flex-row justify-between space-x-8">
          <div className="flex flex-col">
            <span>Focus status</span>
            <span className="text-xs text-neutral-400">
              When you give an app permission, it can share that you have
              notifications silenced when using Focus.
            </span>
          </div>
          <div className="flex flex-row">
            <span className="text-sm text-white/60">On</span>
            <ChevronRight className="text-white/20 size-5 flex self-center" />
          </div>
        </div>
      </ContentBox>

      <div className="flex flex-row items-center justify-end">
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
