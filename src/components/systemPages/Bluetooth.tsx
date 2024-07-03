import { MdWifi } from 'react-icons/md';
import { ContentBox } from '../apps/system';
import { useSystemStore } from '../providers/store-provider';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { useState } from 'react';
import { IoLockClosed } from 'react-icons/io5';
import { Check } from 'lucide-react';
import { CgMoreO } from 'react-icons/cg';

export default function Bluetooth() {
  const { bluetooth, setBluetooth } = useSystemStore((state) => state);

  const knownNetworks = ['NETGEAR15-5G', 'NETGEAR15'] as const;

  return (
    <div className="space-y-8">
      <ContentBox className="p-2">
        <div className="flex flex-row justify-between py-2">
          <div className="flex flex-row items-center space-x-3">
            <span className="text-xl bg-blue-500 rounded-lg p-1">
              <MdWifi />
            </span>
            <span>Bluetooth</span>
          </div>
          <Switch
            checked={bluetooth}
            onCheckedChange={(bol) => setBluetooth(bol)}
          />
        </div>
      </ContentBox>

      <ContentBox className="p-3" title="My Devices">
        {knownNetworks.map((item, index) => {
          const lastItem = index === knownNetworks.length - 1;
          return (
            <>
              <WifiItem key={item} name={item} isKnown />
              {!lastItem && <Separator className="bg-white/10 my-1" />}
            </>
          );
        })}
      </ContentBox>
    </div>
  );
}

function WifiItem({ name, isKnown }: { name: string; isKnown: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-between py-1 px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center space-x-3">
        <span className="w-4">
          <Check className="size-4" />
        </span>
        <span>{name}</span>
      </div>
      <div className="flex flex-row items-center space-x-3">
        {isHovered && (
          <Button className="bg-neutral-500 text-white p-3 h-3">Connect</Button>
        )}
        <IoLockClosed />
        <MdWifi />
        {isKnown && <CgMoreO />}
      </div>
    </div>
  );
}
