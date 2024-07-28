import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { ContentBoxSelectItem } from './Control-Centre';

export function LockScreen() {
  return (
    <div>
      <ContentBox className="space-y-1">
        <ContentBoxSelectItem
          title="Start Screen Saver when inactive"
          description="Display will sleep before screen saver starts."
          defaultValue={0}
          values={[
            {
              title: 'For 2 hours',
              value: '2-hours'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Turn display off on battery when inactive"
          defaultValue={0}
          values={[
            {
              title: 'For 30 minutes',
              value: '30-minutes'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Turn display off on power adapter when inactive"
          defaultValue={0}
          values={[
            {
              title: 'For 2 hours',
              value: '2-hours'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Require password after screen saver begins or display is turned off"
          defaultValue={0}
          values={[
            {
              title: 'After 5 minutes',
              value: '5-minutes'
            }
          ]}
        />
      </ContentBox>

      <ContentBox className="space-y-1">
        <ContentBoxSelectItem
          title="Show large clock"
          defaultValue={0}
          values={[
            {
              title: 'On Screen Saver and Lock Screen',
              value: 'screen-saver-and-lock-screen'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Show username and photo</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Show password hints</span>
          <Switch />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Show message when locked</span>
          <div className="flex flex-row space-x-2">
            <Switch />
            <Button
              className="bg-neutral-500 text-white p-2 h-6 text-sm"
              disabled
            >
              Set...
            </Button>
          </div>
        </div>
      </ContentBox>

      <ContentBox title="When Switching User" className="space-y-1">
        <div className="flex flex-row justify-between items-center">
          <span>Login window shows</span>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row space-x-2 items-center">
              <Checkbox
                className="rounded-full bg-neutral-400/50 border-white/20"
                checked
              />
              <span>List of users</span>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <Checkbox className="rounded-full bg-neutral-400/50 border-white/20" />
              <span>Name and password</span>
            </div>
            <div className="flex flex-row space-x-2"></div>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Show the Sleep, Restart and Shut Down buttons</span>
          <Switch checked />
        </div>
      </ContentBox>

      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Accessibility Options...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
