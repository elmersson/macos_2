import { MdWifi } from 'react-icons/md';
import { ContentBox } from '../apps/system';
import { useSystemStore } from '../providers/store-provider';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { otherNetworks } from '../navbar/wifi';
import { useState } from 'react';
import { IoLockClosed } from 'react-icons/io5';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CgMoreO } from 'react-icons/cg';

export default function Wifi() {
  const { wifi, setWifi } = useSystemStore((state) => state);
  const wifiName = 'NETGEAR15-5G';

  const knownNetworks = ['NETGEAR15-5G', 'NETGEAR15'] as const;

  return (
    <div className="space-y-8">
      <ContentBox className="p-2">
        <div className="flex flex-row justify-between py-2">
          <div className="flex flex-row items-center space-x-3">
            <span className="text-xl bg-blue-500 rounded-lg p-1">
              <MdWifi />
            </span>
            <span>Wi-Fi</span>
          </div>
          <Switch checked={wifi} onCheckedChange={(bol) => setWifi(bol)} />
        </div>

        <Separator className="bg-white/10 my-2" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span>{wifiName}</span>
            <div className="flex flex-row items-center space-x-2">
              <span
                className={cn(
                  'h-3 w-3 rounded-full bg-green-500',
                  !wifi && 'bg-red-500'
                )}
              />
              <span className="text-sm">
                {wifi ? 'Connected' : 'Not Connected'}
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center space-x-3">
              <IoLockClosed />
              <MdWifi />
              <Button className="bg-neutral-500 text-white p-3 h-3">
                Details...
              </Button>
            </div>
          </div>
        </div>
      </ContentBox>

      <ContentBox className="p-3" title="Personal Hotspots">
        <span>Rasmus - iPhone</span>
      </ContentBox>

      <ContentBox className="p-3" title="Known Networks">
        {knownNetworks.map((item, index) => {
          const lastItem = index === knownNetworks.length - 1;
          return (
            <>
              <WifiItem
                checked={item === wifiName}
                key={item}
                name={item}
                isKnown
              />
              {!lastItem && <Separator className="bg-white/10 my-1" />}
            </>
          );
        })}
      </ContentBox>

      <div>
        <ContentBox className="p-3 flex flex-col" title="Other Networks">
          {otherNetworks.map((item, index) => {
            const lastItem = index === otherNetworks.length - 1;
            return (
              <>
                <WifiItem
                  checked={item === wifiName}
                  key={item}
                  name={item}
                  isKnown={false}
                />
                {!lastItem && <Separator className="bg-white/10 my-1" />}
              </>
            );
          })}
        </ContentBox>
        <div className="flex justify-end mt-3">
          <Button className="bg-neutral-500 text-white p-3 h-3">
            Other...
          </Button>
        </div>
      </div>

      <div>
        <ContentBox className="p-3">
          <div className="flex flex-row justify-between space-x-8">
            <div className="flex flex-col">
              <span>Ask to join networks</span>
              <span className="text-xs text-neutral-400">
                Known networks will be joined automatically. if no known
                networks are available, you will have to manually select a
                network.
              </span>
            </div>
            <Switch />
          </div>
          <Separator className="bg-white/10 my-1" />
          <div className="flex flex-row justify-between space-x-8">
            <div className="flex flex-col">
              <span>Ask to join hotspots</span>
              <span className="text-xs text-neutral-400">
                Allow this Mac to automatically discover nearby personal
                hotspots when no Wi-Fi network is available
              </span>
            </div>
            <Switch checked />
          </div>
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

function WifiItem({
  name,
  checked,
  isKnown
}: {
  name: string;
  checked: boolean;
  isKnown: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-between py-1 px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center space-x-3">
        <span className="w-4">{checked && <Check className="size-4" />}</span>
        <span>{name}</span>
      </div>
      <div className="flex flex-row items-center space-x-3">
        {!checked && isHovered && (
          <Button className="bg-neutral-500 text-white p-3 h-3">Connect</Button>
        )}
        <IoLockClosed />
        <MdWifi />
        {isKnown && <CgMoreO />}
      </div>
    </div>
  );
}
