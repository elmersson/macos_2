import Image from 'next/image';
import { Separator } from '../ui/separator';
import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export function Wallpaper() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between space-x-2">
        <div className="w-56 h-24 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded border-2 border-neutral-400">
          <Image
            src={
              'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg'
            }
            alt="account image"
            className="drop-shadow object-cover object-center rounded p-0.5"
            fill
          />
        </div>
        <div className="flex flex-col w-full">
          <ContentBox className="py-1">
            <span>Lake Between Mountains</span>
          </ContentBox>
          <ContentBox className="py-1 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show as screen saver</span>
              <Switch checked />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between items-center">
              <span>Show as screen saver</span>
              <Switch checked />
            </div>
          </ContentBox>

          <div className="flex flex-row items-center space-x-3 justify-end mt-4">
            <Button className="bg-neutral-500 text-white p-3 h-3">
              Add Photo
            </Button>
            <Button className="bg-neutral-500 text-white p-3 h-3">
              Add Folder or Album
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="space-y-2">
        <span className="font-bold">Your Photos</span>
        <div className="w-28 h-20 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded">
          <Image
            src={
              'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg'
            }
            alt="account image"
            className="drop-shadow object-cover object-center rounded"
            fill
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-end">
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
