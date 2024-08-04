import { useState } from 'react';
import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { IconSlider } from './Displays';
import { BsBrightnessAltHigh, BsBrightnessAltLow } from 'react-icons/bs';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { ContentBoxSelectItem } from './Control-Centre';
import { Slider } from './Sound';

export function Keyboard() {
  const [value, setValue] = useState<number>(50);
  return (
    <div className="space-y-6">
      <div>
        <ContentBox>
          <div className="flex flex-row justify-between space-x-6">
            <div className="flex flex-col w-full space-y-2">
              <span>Key repeat rate</span>
              <Slider defaultValue={[90]} />
              <div className="flex flex-row justify-between text-sm">
                <div className="flex flex-row space-x-6">
                  <span>Off</span>
                  <span>Slow</span>
                </div>
                <span>Fast</span>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <span>Delay until repeat</span>
              <Slider defaultValue={[75]} />
              <div className="flex flex-row justify-between text-sm">
                <span>Long</span>
                <span>Short</span>
              </div>
            </div>
          </div>
        </ContentBox>

        <ContentBox className="space-y-2">
          <div className="flex flex-row justify-between">
            <span className="text-sm">
              Adjust keyboard brightness in low light
            </span>
            <Switch checked />
          </div>

          <Separator className="bg-white/10" />

          <div className="flex flex-row justify-between">
            <span className="text-sm">Keyboard Brightness</span>
            <IconSlider
              value={value}
              setValue={setValue}
              LeftIcon={BsBrightnessAltLow}
              RightIcon={BsBrightnessAltHigh}
            />
          </div>

          <Separator className="bg-white/10" />

          <ContentBoxSelectItem
            title="Turn keyboard backlight off after inactivity"
            values={[{ title: 'Never', value: 'never' }]}
            defaultValue={0}
          />

          <Separator className="bg-white/10" />
          <ContentBoxSelectItem
            title="Press fn key to"
            values={[
              { title: 'Show Emoji & Symbols', value: 'show-emoji-symbols' }
            ]}
            defaultValue={0}
          />
          <Separator className="bg-white/10" />

          <div className="flex flex-row justify-between space-x-4">
            <div className="flex flex-col">
              <span className="text-sm">Keyboard brightness</span>
              <span className="text-xs text-neutral-400">
                Use keyboard navigation to move focus between controls. Press
                the Tab key to move focus forwards and Shift Tab to move focus
                backwards.
              </span>
            </div>
            <Switch checked />
          </div>

          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-end">
            <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
              Keyboard Shortcuts...
            </Button>
          </div>
        </ContentBox>
      </div>

      <ContentBox title="Text Input" className="space-y-2">
        <div className="flex flex-row justify-between items-center">
          <span className="text-sm">Input Sources</span>
          <div className="flex flex-row space-x-2">
            <span className="text-neutral-400 text-sm">Swedish</span>
            <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
              Edit...
            </Button>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row items-center justify-end">
          <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
            Text Replacements...
          </Button>
        </div>
      </ContentBox>

      <ContentBox title="Dictation" className="space-y-2">
        <div className="flex flex-row justify-between space-x-4">
          <span className="text-xs text-neutral-400">
            Use Dictation wherever you can type text. To start dictation, use
            the shortcut or select Start Dicitation from the Edit menu.
          </span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />

        <div className="flex flex-row justify-between items-center">
          <span className="text-sm">Languages</span>
          <div className="flex flex-row space-x-2">
            <span className="text-neutral-400 text-sm">
              English (United Kingdom)
            </span>
            <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
              Edit...
            </Button>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <ContentBoxSelectItem
          title="Microphone source"
          values={[
            { title: 'Automatic (MacBook Pro Microphone)', value: 'automatic' }
          ]}
          defaultValue={0}
        />
        <Separator className="bg-white/10" />

        <ContentBoxSelectItem
          title="Shortcut"
          values={[{ title: 'Press', value: 'press' }]}
          defaultValue={0}
        />
        <Separator className="bg-white/10" />

        <div className="flex flex-row items-center justify-end">
          <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
            About Ask Siri, Dictation & Privacy...
          </Button>
        </div>
      </ContentBox>

      <div className="flex flex-row items-center justify-end space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Set Up Keyboard...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
