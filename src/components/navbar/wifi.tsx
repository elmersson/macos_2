import { MdWifi, MdWifi2Bar, MdWifi1Bar } from 'react-icons/md';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { useNetworkState } from 'react-use';
import { useSystem } from '@/hooks/useSystem';
import { Switch } from '../ui/switch';
import { IoBatteryHalf, IoCellularSharp, IoLockClosed } from 'react-icons/io5';
import { FaLink } from 'react-icons/fa6';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion';

const otherNetworks = [
  'Pretty Fly For a Wifi',
  'Wu-Tang LAN',
  'I am watching you',
  "Drop it like it's a Hotspot",
  'Dunder Mifflin',
  'Routers of Rohan',
  'Never Gonna Give You Wifi',
  'Yer A Wifi Harry',
  'The Ping of the North',
  '404 Network Unavailable'
];

export function Wifi() {
  const state = useNetworkState();
  const { wifi, setWifi } = useSystem();

  const wifiIcon = () => {
    switch (state.effectiveType) {
      case '4g':
        return <MdWifi />;
      case '3g':
        return <MdWifi2Bar />;
      case '2g':
        return <MdWifi1Bar />;
      case 'slow-2g':
        return <MdWifi1Bar />;
      default:
        return <MdWifi />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div role="button" className="flex items-center px-2.5 py-1 rounded-md">
          {wifiIcon()}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[270px] mt-[6px]">
        <DropdownMenuLabel className="pb-0 text-white flex flex-row justify-between items-center">
          <p>Wifi</p>
          <Switch checked={wifi} onCheckedChange={(bol) => setWifi(bol)} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <p className="text-sm text-slate-300 font-bold ml-2">
          Personal Hotspot
        </p>
        <DropdownMenuItem className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center space-x-2">
            <div className="h-7 w-7 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 rounded-full flex justify-center items-center">
              <FaLink style={{ color: 'white' }} />
            </div>
            <p>Rasmus - Iphone</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-1">
            <IoCellularSharp />
            <p className="text-xs">5G</p>
            <IoBatteryHalf />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <p className="text-sm text-slate-300 font-bold ml-2">Known Networks</p>
        <DropdownMenuItem className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center space-x-2">
            <div className="h-7 w-7 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 rounded-full flex justify-center items-center">
              <MdWifi style={{ color: 'white' }} />
            </div>
            <p>NETGEAR15</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-1">
            <IoLockClosed />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex flex-row justify-between items-center"
          onClick={() => setWifi(!wifi)}
        >
          <div className="flex flex-row justify-center items-center space-x-2">
            <div
              className={`h-7 w-7 ${
                wifi
                  ? 'bg-apple-blue'
                  : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
              } rounded-full flex justify-center items-center text-white`}
            >
              {wifiIcon()}
            </div>
            <p>NETGEAR15-5G </p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-1">
            <IoLockClosed />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Accordion type="single" collapsible className="mx-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm text-slate-300 font-bold">
              Other Networks
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {otherNetworks.map((wifiName) => (
                <div
                  key={wifiName}
                  className="flex flex-row justify-between items-center"
                >
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <div className="h-7 w-7 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 rounded-full flex justify-center items-center">
                      <MdWifi style={{ color: 'white' }} />
                    </div>
                    <p>{wifiName}</p>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-1">
                    <IoLockClosed />
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-sm text-white">Wifi Settings...</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
