import Image from 'next/image';
import { Separator } from '../ui/separator';
import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export function ScreenSaver() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between space-x-2">
        <div>
          <div className="w-40 h-24 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded border-2 border-neutral-400">
            <Image
              src={
                'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg'
              }
              alt="account image"
              className="drop-shadow object-cover object-center rounded p-0.5"
              fill
            />
          </div>
          <Button className="bg-neutral-500 text-white p-3 h-3 mt-1">
            Built-in Display
          </Button>
        </div>

        <div className="flex flex-col w-full">
          <ContentBox className="py-1">
            <span>Lake Between Mountains</span>
          </ContentBox>
          <ContentBox className="py-1 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Show on all Spaces</span>
              <Switch />
            </div>
          </ContentBox>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <ContentBox className="flex flex-row space-x-2">
        <span className="text-sm text-neutral-400">
          Display will sleep before screen saver starts. You can manage the
          timing in Lock Screen Settings.
        </span>
        <Button className="bg-neutral-500 text-white p-3 h-3 mt-1">
          Lock Screen Settings...
        </Button>
      </ContentBox>

      <div className="space-y-2">
        <span className="font-bold">macOS</span>
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
