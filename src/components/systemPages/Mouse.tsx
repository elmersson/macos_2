import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { ContentBoxSelectItem } from './Control-Centre';
import { Slider } from './Sound';

export function Mouse() {
  return (
    <div className="space-y-6">
      <ContentBox className="space-y-2">
        <div className="flex flex-row justify-between space-x-6">
          <span>Tracking speed</span>
          <div className="flex flex-col w-[60%] space-y-2">
            <Slider defaultValue={[40]} numberOfMarks={10} />
            <div className="flex flex-row justify-between text-sm">
              <span>Slow</span>
              <span>Fast</span>
            </div>
          </div>
        </div>
        <Separator className="bg-white/10" />

        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Natural scrolling</span>
            <span className="text-xs text-neutral-400">
              Content tracks finger movement
            </span>
          </div>
          <Switch />
        </div>

        <Separator className="bg-white/10" />

        <ContentBoxSelectItem
          title="Secondary click"
          values={[{ title: 'Click Right Side', value: 'right-side' }]}
          defaultValue={0}
        />

        <Separator className="bg-white/10" />

        <div className="flex flex-row justify-between space-x-6">
          <span>Double-Click Speed</span>
          <div className="flex flex-col w-[60%] space-y-2">
            <Slider defaultValue={[75]} numberOfMarks={10} />
            <div className="flex flex-row justify-between text-sm">
              <span>Slow</span>
              <span>Fast</span>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-row justify-between space-x-6">
          <span>Scrolling Speed</span>
          <div className="flex flex-col w-[60%] space-y-2">
            <Slider defaultValue={[50]} numberOfMarks={8} />
            <div className="flex flex-row justify-between text-sm">
              <span>Slow</span>
              <span>Fast</span>
            </div>
          </div>
        </div>
      </ContentBox>

      <div className="flex flex-row items-center justify-end space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Advenced...
        </Button>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Set Up Bluetooth Mouse...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
