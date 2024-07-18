import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { HTMLProps, useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { IconType } from 'react-icons';
import { HiSpeakerWave } from 'react-icons/hi2';
import { PiSpeakerSimpleNoneFill } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import { Checkbox } from '../ui/checkbox';
import { IoMic, IoMicOff } from 'react-icons/io5';

export function Sound() {
  return (
    <div className="space-y-8">
      <ContentBox title="Sound Effects">
        <div className="flex flex-row justify-between items-center">
          <span>Alert sound</span>
          <Select>
            <SelectTrigger className="w-[180px] bg-transparent">
              <SelectValue defaultValue="boop" placeholder="Boop" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="boop">Boop</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="bg-white/10 my-2" />

        <div className="flex flex-row justify-between items-center">
          <span>Play sounds effects through</span>
          <Select>
            <SelectTrigger className="w-[300px] bg-transparent">
              <SelectValue
                defaultValue="selected"
                placeholder="Selected Sound Output Device"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="selected">
                  Selected Sound Output Device
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="bg-white/10 my-2" />
        <div className="flex flex-row justify-between">
          <span className="w-[90%]">Alert volume</span>
          <Slider
            LeftIcon={PiSpeakerSimpleNoneFill}
            RightIcon={HiSpeakerWave}
            defaultValue={[100]}
          />
        </div>
        <Separator className="bg-white/10 my-2" />
        <div className="flex flex-row justify-between">
          <span>Play sound on startup</span>
          <Switch />
        </div>
        <Separator className="bg-white/10 my-2" />

        <div className="flex flex-row justify-between">
          <span>Play user interface sound effects</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10 my-2" />

        <div className="flex flex-row justify-between">
          <span>Play feedback when volume is changed</span>
          <Switch />
        </div>
      </ContentBox>

      <OutputInput />

      <div className="flex flex-row justify-end  items-center">
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}

function OutputInput() {
  const [tab, setTab] = useState('output');
  return (
    <div className="space-y-3">
      <ContentBox title="Output & Input" className="p-0">
        <Tabs defaultValue="output" className="w-full">
          <TabsList className="grid w-full grid-cols-2 p-2">
            <TabsTrigger
              value="output"
              className="rounded-lg"
              onClick={() => setTab('output')}
            >
              Output
            </TabsTrigger>
            <TabsTrigger
              value="input"
              className="rounded-lg"
              onClick={() => setTab('input')}
            >
              Input
            </TabsTrigger>
          </TabsList>
          <TabsContent value="output" className="text-sm">
            <div className="grid w-full grid-cols-2 bg-neutral-700 p-1">
              <span>Name</span>
              <span>Type</span>
            </div>
            <div className="grid w-full grid-cols-2 py-1 px-2">
              <span>MacBook Pro Speakers</span>
              <span>Built-in</span>
            </div>
            <div className="grid w-full grid-cols-2 py-1 px-2 bg-neutral-400">
              <span>AAA</span>
              <span>HDMI</span>
            </div>
            <div className="p-2">
              <span className="text-sm text-neutral-400">
                Applications may be able to access head pose information when
                playing spatialised audio.
              </span>
            </div>
          </TabsContent>
          <TabsContent value="input" className="text-sm">
            <div className="grid w-full grid-cols-2 bg-neutral-700 p-1">
              <span>Name</span>
              <span>Type</span>
            </div>
            <div className="grid w-full grid-cols-2 py-1 px-2 bg-neutral-400">
              <span>MacBook Pro Microphone</span>
              <span>Built-in</span>
            </div>
          </TabsContent>
        </Tabs>
      </ContentBox>
      <ContentBox className="text-sm">
        {tab === 'output' ? (
          <div className="flex flex-row justify-between">
            <span className="w-[90%]">Output volume</span>
            <div className="w-full space-y-2">
              <Slider
                LeftIcon={PiSpeakerSimpleNoneFill}
                RightIcon={HiSpeakerWave}
                defaultValue={[100]}
                disabled
              />
              <div className="flex items-center space-x-2 justify-end">
                <Checkbox
                  id="terms"
                  disabled
                  className="bg-neutral-400/40 border-none w-3.5 h-3.5"
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-40"
                >
                  Mute
                </label>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-row justify-between">
              <span className="w-[90%]">Input volume</span>
              <Slider
                LeftIcon={IoMicOff}
                RightIcon={IoMic}
                defaultValue={[50]}
              />
            </div>
            <Separator className="bg-white/10 my-2" />
            <div className="flex flex-row justify-between">
              <span className="w-[90%]">Input level</span>
              <Level className="mr-4" />
            </div>
          </>
        )}
      </ContentBox>
    </div>
  );
}

interface SliderProps {
  LeftIcon?: IconType;
  RightIcon?: IconType;
  numberOfMarks?: number;
  defaultValue?: number[];
  disabled?: boolean;
}

export function Slider({
  LeftIcon,
  RightIcon,
  numberOfMarks,
  defaultValue,
  disabled
}: SliderProps) {
  const amountOfMarks = numberOfMarks ?? 7;

  const marks = Array.from(
    { length: amountOfMarks },
    (_, index) => (index / (amountOfMarks - 1)) * 100
  );

  return (
    <div
      className={cn(
        'w-full flex flex-row space-x-2 items-center',
        disabled && 'opacity-40'
      )}
    >
      {LeftIcon && <LeftIcon />}
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        defaultValue={defaultValue}
        max={100}
        step={1}
        aria-label="Volume"
        disabled={disabled}
      >
        <SliderPrimitive.Track className="relative grow h-1 bg-neutral-600 flex items-center">
          <SliderPrimitive.Range className="absolute h-full bg-transparent" />
          {marks.map((mark) => (
            <div
              key={mark}
              className="absolute w-0.5 h-2 bg-gray-500 rounded-lg"
              style={{ left: `${mark}%`, transform: 'translateX(-50%)' }}
            />
          ))}
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block w-2 h-5 bg-neutral-400 rounded shadow-md focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent" />
      </SliderPrimitive.Root>
      {RightIcon && <RightIcon />}
    </div>
  );
}

interface LevelProps extends HTMLProps<HTMLDivElement> {
  numberOfMarks?: number;
}
function Level({ numberOfMarks, ...props }: LevelProps) {
  const amountOfMarks = numberOfMarks ?? 15;

  const marks = Array.from(
    { length: amountOfMarks },
    (_, index) => (index / (amountOfMarks - 1)) * 100
  );
  return (
    <div className={cn('relative w-full flex items-center', props.className)}>
      {marks.map((mark) => (
        <div
          key={mark}
          className="absolute w-2 h-4 bg-gray-500/40 rounded-sm"
          style={{ left: `${mark}%`, transform: 'translateX(-50%)' }}
        />
      ))}
    </div>
  );
}
