import { ContentBox } from '../apps/system';
import { useSystemStore } from '../providers/store-provider';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { useState } from 'react';
import { IoIosBluetooth } from 'react-icons/io';
import { IoInformationCircleOutline } from 'react-icons/io5';

export default function Bluetooth() {
  const { bluetooth, setBluetooth } = useSystemStore((state) => state);

  const Devices: BluetoothItemProps[] = [
    { name: 'MX Anywhere 3', isConnected: true, battery: 90 },
    { name: 'MX Keys', isConnected: true, battery: 50 },
    { name: 'MX Keys mini', isConnected: false },
    { name: 'Soundcore Liberty Air 2 Pro', isConnected: false },
    { name: 'WH-1000XM5', isConnected: false }
  ] as const;

  return (
    <div className="space-y-8">
      <ContentBox className="p-2">
        <div className="flex flex-row justify-between py-2">
          <div className="flex flex-row space-x-3">
            <span className="text-xl bg-blue-500 rounded-lg p-1 h-8 flex items-center">
              <IoIosBluetooth />
            </span>
            <div className="flex flex-col">
              <span>Bluetooth</span>
              <span className="text-neutral-400">
                This Mac is discoverable as &quot;Rasmus´s MacBook Pro&quot;
                while Bluetooth Settings is open.
              </span>
            </div>
          </div>
          <Switch
            checked={bluetooth}
            onCheckedChange={(bol) => setBluetooth(bol)}
          />
        </div>
      </ContentBox>

      <div>
        <ContentBox className="p-3" title="My Devices">
          {Devices.map((item, index) => {
            const lastItem = index === Devices.length - 1;
            return (
              <>
                <BluetoothItem
                  key={item.name}
                  name={item.name}
                  isConnected={item.isConnected}
                  battery={item.battery}
                />
                {!lastItem && <Separator className="bg-white/10 my-1" />}
              </>
            );
          })}
        </ContentBox>
        <div className="flex flex-row justify-end  items-center space-x-3 mt-3">
          <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
            ?
          </Button>
        </div>
      </div>
      <ContentBox title="Nearby Devices" className="p-6" />
    </div>
  );
}

interface BluetoothItemProps {
  name: string;
  isConnected: boolean;
  battery?: number;
}

function BluetoothItem({ name, isConnected, battery }: BluetoothItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-between py-1 px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        <span>{name}</span>
        <span className="text-neutral-400">
          {isConnected ? `Connected - ${battery}%` : 'Not Connected'}
        </span>
      </div>
      <div className="flex flex-row items-center space-x-3">
        {isHovered && (
          <Button className="bg-neutral-500 text-white p-3 h-3">
            {isConnected ? 'Disconnect' : 'Connect'}
          </Button>
        )}
        <IoInformationCircleOutline className="size-7 text-neutral-400" />
      </div>
    </div>
  );
}
