import * as Slider from '@radix-ui/react-slider';
import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ContentBoxSelectItem } from './Control-Centre';
import { IoMdSunny } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';
import { useSystemStore } from '../providers/store-provider';
import { Switch } from '../ui/switch';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

export function Displays() {
  const { display, setDisplay } = useSystemStore((state) => state);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Arrange...
        </Button>
        <span>AAA</span>
        <span>Built-in Display</span>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">+</Button>
      </div>

      <ContentBox className="space-y-2">
        <ContentBoxSelectItem
          title="Use as"
          defaultValue={0}
          values={[
            {
              title: 'Main display',
              value: 'main-display'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between py-4">
          <Size size="largeText" />
          <Size size="default" />
          <Size size="moreSpace" />
        </div>
        <Separator className="bg-white/10" />
        <span className="text-neutral-400 text-sm">
          Using a scaled resolution may affect performance
        </span>
      </ContentBox>

      <ContentBox className="space-y-2">
        <div className="flex flex-row justify-between items-center">
          <span>Brightness</span>
          <IconSlider
            LeftIcon={IoMdSunny}
            RightIcon={IoSunny}
            value={display}
            setValue={setDisplay}
          />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Automatically adjust brightness</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />

        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span>True Tone</span>
            <span className="text-sm text-neutral-400 mr-4">
              Automatically adapt display to make colours appear consistent in
              different ambient lighting conditions.
            </span>
          </div>
          <Switch checked />
        </div>
      </ContentBox>

      <ContentBox className="py-1">
        <ContentBoxSelectItem
          title="Preset"
          defaultValue={0}
          values={[
            {
              title: 'Apple XDR Display',
              value: 'apple-xdr'
            }
          ]}
        />
      </ContentBox>

      <ContentBox className="py-1">
        <ContentBoxSelectItem
          title="Refresh rate"
          defaultValue={0}
          values={[
            {
              title: 'ProMotion',
              value: 'promotion'
            }
          ]}
        />
      </ContentBox>

      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Advanced...
        </Button>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Night Shift...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}

interface IconSliderProps {
  LeftIcon: IconType;
  RightIcon: IconType;
  value: number;
  // eslint-disable-next-line no-unused-vars
  setValue: (value: number) => void;
}

export const IconSlider = ({
  LeftIcon,
  RightIcon,
  value,
  setValue
}: IconSliderProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-400">
        <LeftIcon />
      </span>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-52 h-5"
        value={[value]}
        onValueChange={(newValue) => setValue(newValue[0])}
        max={100}
        step={1}
        aria-label="Brightness"
      >
        <Slider.Track className="bg-gray-700 relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-gray-400 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75" />
      </Slider.Root>
      <span className="text-gray-400 text-lg">
        <RightIcon />
      </span>
    </div>
  );
};

interface SizeProps {
  size: 'largeText' | 'default' | 'moreSpace';
}
const Size = ({ size }: SizeProps) => {
  const text =
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.";

  const sizeStyles = {
    largeText: 'space-y-2',
    default: 'space-y-1 text-sm',
    moreSpace: 'space-y-0.5 text-4xs border-2 border-blue-500'
  };

  const dotsStyles = {
    largeText: 'space-x-2',
    default: 'space-x-1',
    moreSpace: 'space-x-0.5'
  };

  const dotStyles = {
    largeText: 'w-4 h-4',
    default: 'w-2 h-2',
    moreSpace: 'w-1 h-1'
  };

  const separatorStyles = {
    largeText: 'h-0.5',
    default: 'h-[1px]',
    moreSpace: 'h-[0.5px]'
  };

  const labelText = {
    largeText: 'Larger Text',
    default: 'Default',
    moreSpace: 'More Space'
  };

  return (
    <div className="text-sm flex flex-col items-center space-y-2">
      <div
        className={cn(
          'space-y-2 w-14 h-14 overflow-hidden shadow-lg rounded-lg border border-white/10 p-0.5',
          sizeStyles[size]
        )}
      >
        <div className={cn('flex flex-row w-20', dotsStyles[size])}>
          <span className={cn('bg-red-500 rounded-full', dotStyles[size])} />
          <span className={cn('bg-yellow-500 rounded-full', dotStyles[size])} />
          <span className={cn('bg-green-500 rounded-full', dotStyles[size])} />
        </div>
        <Separator className={cn('bg-black/20 p-0', separatorStyles[size])} />
        <span>{text}</span>
      </div>
      <span className="text-sm">{labelText[size]}</span>
    </div>
  );
};
