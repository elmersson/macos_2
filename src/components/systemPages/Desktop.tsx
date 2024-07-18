import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { ContentBoxSelectItem } from './Control-Centre';
import { Slider } from './Sound';

export function Desktop() {
  return (
    <div>
      <ContentBox title="Dock">
        <div className="flex flex-row space-x-12">
          <div className="flex flex-col w-full space-y-2">
            <span className="text-lg">Size</span>
            <Slider numberOfMarks={3} defaultValue={[50]} />
            <div className="text-sm flex flex-row justify-between">
              <span>Small</span>
              <span>Large</span>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <span className="text-lg">Magnification</span>
            <Slider numberOfMarks={3} defaultValue={[50]} />
            <div className="text-sm flex flex-row justify-between">
              <span>Off</span>
              <span>Small</span>
              <span>Large</span>
            </div>
          </div>
        </div>
      </ContentBox>

      <ContentBox className="space-y-2">
        <ContentBoxSelectItem
          title="Position on screen"
          defaultValue={0}
          values={[
            {
              title: 'Bottom',
              value: 'bottom'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Minimise windows using"
          defaultValue={0}
          values={[
            {
              title: 'Genie Effect',
              value: 'genie-effect'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Double-click a window's title bar to"
          defaultValue={0}
          values={[
            {
              title: 'Zoom',
              value: 'zoom'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Minimise windows into application icon</span>
          <Switch />
        </div>
      </ContentBox>

      <ContentBox className="space-y-2">
        <div className="flex flex-row justify-between">
          <span>Automatically hide and show the Dock</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Animate opening applications</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Show indicators for open applications</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Show suggested and recent apps in Dock</span>
          <Switch />
        </div>
      </ContentBox>

      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Shortcuts...
        </Button>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Hot Corners...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
