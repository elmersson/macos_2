import { ChevronRight } from 'lucide-react';
import { ContentBox } from '../apps/system';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import Image, { StaticImageData } from 'next/image';
import Arc from '@/assets/apps/arc.png';
import Mail from '@/assets/apps/outlook.png';
import Iterm2 from '@/assets/apps/iterm2.png';
import Github from '@/assets/apps/github.png';
import Notes from '@/assets/apps/notes.png';
import Lotion from '@/assets/apps/lotion.png';
import Liro from '@/assets/apps/liro.png';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';

export function Notifications() {
  const items: NotificationsItemProps[] = [
    { name: 'Arc', allows: 'Badges, Sounds', img: Arc },
    { name: 'Github', allows: 'Off', img: Github },
    { name: 'iterm', allows: 'Off', img: Iterm2 },
    {
      name: 'Microsoft Outlook',
      allows: 'Badges, Sounds, Banners, Time Sensitive',
      img: Mail
    },
    { name: 'Notes', allows: 'Off', img: Notes },
    { name: 'Lotion', allows: 'Off', img: Lotion },
    { name: 'Liro', allows: 'Off', img: Liro }
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-3 mb-3">
        <span className="font-bold text-lg">Notification Centre</span>
        <span className="text-neutral-400">
          Notification Centre shows your notifications in the top-right corner
          of your screen. You can show and hide Notification Centre by clicking
          the clock in the menu bar.
        </span>
      </div>
      <ContentBox className="mb-8">
        <div className="flex flex-row justify-between">
          <span>Show previews</span>
          <Select>
            <SelectTrigger className="w-[180px] bg-transparent">
              <SelectValue
                defaultValue="unlocked"
                placeholder="When Unlocked"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="always">Always</SelectItem>
                <SelectItem value="unlocked">When Unlocked</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="bg-white/10 my-2" />

        <div className="flex flex-row justify-between">
          <span>Allow notifications when the display is sleeping</span>
          <Switch />
        </div>
        <Separator className="bg-white/10 my-2" />

        <div className="flex flex-row justify-between">
          <span>Allow notifications when the screen is locked</span>
          <Switch />
        </div>
        <Separator className="bg-white/10 my-2" />

        <div className="flex flex-row justify-between">
          <span>Allow notifications when mirroring or sharing the display</span>
          <Switch />
        </div>
      </ContentBox>

      <ContentBox title="Application Notifications">
        {items.map((item, index) => {
          const lastItem = index === items.length - 1;

          return (
            <>
              <NotificationsItem
                key={item.name}
                img={item.img}
                name={item.name}
                allows={item.allows}
              />
              {!lastItem && <Separator className="bg-white/10 my-3" />}
            </>
          );
        })}
      </ContentBox>

      <div className="flex flex-row justify-end  items-center space-x-3 mt-6">
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}

interface NotificationsItemProps {
  img: StaticImageData;
  name: string;
  allows: string;
}

function NotificationsItem({ name, allows, img }: NotificationsItemProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-3">
        <Image src={img} alt={`${name}-image`} className="w-10 h-10" />
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="text-sm text-neutral-400">{allows}</span>
        </div>
      </div>

      <ChevronRight className="text-white/20 size-5" />
    </div>
  );
}
