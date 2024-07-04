import { cn } from '@/lib/utils';
import { ContentBox } from '../apps/system';
import { useSystemStore } from '../providers/store-provider';
import { ChevronRight } from 'lucide-react';
import { MdWifi } from 'react-icons/md';
import { IconType } from 'react-icons';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export function Network() {
  const { wifi } = useSystemStore((state) => state);
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <ContentBox>
          <NetworkItem
            name="Wi-Fi"
            icon={{ type: MdWifi, bg: 'bg-blue-500' }}
            connected={wifi}
          />
        </ContentBox>
        <ContentBox>
          <NetworkItem
            name="Firewall"
            icon={{ type: MdWifi, bg: 'bg-orange-400' }}
            connected={wifi}
          />
        </ContentBox>
      </div>

      <div>
        <ContentBox title="Other Services">
          <NetworkItem
            name="Dell Universal Dock D6000"
            icon={{ type: MdWifi, bg: 'bg-gray-400' }}
            connected={false}
          />
          <Separator className="bg-white/10 my-2" />
          <NetworkItem
            name="USB 10/100/1000 LAN"
            icon={{ type: MdWifi, bg: 'bg-gray-400' }}
            connected={false}
          />
          <Separator className="bg-white/10 my-2" />
          <NetworkItem
            name="DL-Dock"
            icon={{ type: MdWifi, bg: 'bg-gray-400' }}
            connected={false}
          />
          <Separator className="bg-white/10 my-2" />
          <NetworkItem
            name="Thunderbolt Bridge"
            icon={{ type: MdWifi, bg: 'bg-gray-400' }}
            connected={false}
          />
          <Separator className="bg-white/10 my-2" />
          <NetworkItem
            name="Iphone USB"
            icon={{ type: MdWifi, bg: 'bg-gray-400' }}
            connected={false}
          />
        </ContentBox>
        <div className="flex flex-row justify-end  items-center space-x-3 mt-3">
          <Button className="bg-neutral-500 text-white p-3 h-3">
            Advanced...
          </Button>
          <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
            ?
          </Button>
        </div>
      </div>
    </div>
  );
}

type TailwindBgColor = 'bg-blue-500' | 'bg-orange-400' | 'bg-gray-400';

interface NetworkItemProps {
  name: string;
  icon: { type: IconType; bg: TailwindBgColor };
  connected: boolean;
}

function NetworkItem({
  name,
  icon: { type: Icon, bg },
  connected
}: NetworkItemProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center space-x-3">
        <span className={cn('text-2xl bg-blue-500 rounded-lg p-1 h-8', bg)}>
          <Icon />
        </span>
        <div className="flex flex-col">
          <span>{name}</span>
          <div className="flex flex-row items-center space-x-2">
            <span
              className={cn(
                'h-2.5 w-2.5 rounded-full bg-green-500',
                !connected && 'bg-red-500'
              )}
            />
            <span className="text-sm">
              {connected ? 'Connected' : 'Not Connected'}
            </span>
          </div>
        </div>
      </div>
      <ChevronRight className="text-white/20 size-5" />
    </div>
  );
}
