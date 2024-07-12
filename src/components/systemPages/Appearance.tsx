import { cn } from '@/lib/utils';
import { ContentBox } from '../apps/system';
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
import { useTheme } from 'next-themes';

export function Appearance() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-2">
      <ContentBox className="space-y-1">
        <div className="flex flex-row justify-between">
          <span>Appearance</span>
          <div className="flex flex-row space-x-2">
            <div
              className="flex flex-col items-center space-y-1"
              onClick={() => setTheme('light')}
            >
              <span
                className={cn(
                  'bg-white h-8 w-14 rounded',
                  theme === 'light' && 'border border-blue-500'
                )}
              />
              <span
                className={cn(
                  'text-sm text-neutral-400',
                  theme === 'light' && 'text-white font-semibold'
                )}
              >
                Light
              </span>
            </div>
            <div
              className="flex flex-col items-center space-y-1"
              onClick={() => setTheme('dark')}
            >
              <span
                className={cn(
                  'bg-black h-8 w-14 rounded',
                  theme === 'dark' && 'border border-blue-500'
                )}
              />
              <span
                className={cn(
                  'text-sm text-neutral-400',
                  theme === 'dark' && 'text-white font-semibold'
                )}
              >
                Dark
              </span>
            </div>
            <div
              className="flex flex-col items-center space-y-1"
              onClick={() => setTheme('system')}
            >
              <span
                className={cn(
                  'h-8 w-14 rounded',
                  theme === 'system' && 'border border-blue-500'
                )}
                style={{
                  background:
                    'linear-gradient(to right, white, white 50%, black 50%, black)'
                }}
              />
              <span
                className={cn(
                  'text-sm text-neutral-400',
                  theme === 'system' && 'text-white font-semibold'
                )}
              >
                Auto
              </span>
            </div>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Accent colour</span>
          <div className="flex flex-row items-center space-x-2">
            <span
              className="relative flex items-center justify-center w-4 h-4 rounded-full border border-white/10"
              style={{
                background:
                  'conic-gradient(from 0deg, #EF4444, #F97316, #F59E0B, #34D399, #3B82F6, #6366F1, #8B5CF6, #EC4899, #EF4444)'
              }}
            >
              <span className="absolute w-1.5 h-1.5 bg-white rounded-full" />
            </span>
            <span className="w-4 h-4 bg-blue-500 rounded-full border border-white/10" />
            <span className="w-4 h-4 bg-purple-500 rounded-full border border-white/10" />
            <span className="w-4 h-4 bg-pink-500 rounded-full border border-white/10" />
            <span className="w-4 h-4 bg-red-500 rounded-full border border-white/10" />
            <span className="w-4 h-4 bg-orange-500 rounded-full border border-white/10" />
            <span className="w-4 h-4 bg-yellow-500 rounded-full border border-white/10" />
            <span className="w-4 h-4 bg-green-500 rounded-full border border-white/10" />
            <span className="w-4 h-4 bg-gray-500 rounded-full border border-white/10" />
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Highlight colour</span>
          <Select>
            <SelectTrigger className="w-[180px] bg-transparent border-none">
              <SelectValue
                defaultValue="accent"
                placeholder={
                  <div className="flex flex-row items-center space-x-1">
                    <span
                      className="relative flex items-center justify-center w-6 h-3 border border-white/10"
                      style={{
                        background:
                          'linear-gradient(to right, #a788ef, #ea6bab, #ecc176)'
                      }}
                    ></span>
                    <span>Accent Colour</span>
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Sidebar icon size</span>
          <Select>
            <SelectTrigger className="w-[180px] bg-transparent border-none">
              <SelectValue defaultValue="medium" placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Allow wallpaper tinting in windows</span>
          <Switch checked />
        </div>
      </ContentBox>

      <ContentBox className="space-y-1">
        <div>
          <span>Show scroll bars</span>
        </div>
        <Separator className="bg-white/10" />
        <div>
          <span>Click in the scroll bar to</span>
        </div>
      </ContentBox>
    </div>
  );
}
