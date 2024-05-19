import { useNetworkState } from 'react-use';
import { IoBluetooth } from 'react-icons/io5';
import {
  MdWifi,
  MdWifi2Bar,
  MdWifi1Bar,
  MdWifiTethering
} from 'react-icons/md';
import { useSystemStore } from '../providers/store-provider';
export function ConnectControl() {
  const state = useNetworkState();
  const { wifi, setWifi, bluetooth, setBluetooth, airdrop, setAirdrop } =
    useSystemStore((state) => state);

  const handleWifiClick = () => {
    setWifi(!wifi);
  };

  const handleBluetoothClick = () => {
    setBluetooth(!bluetooth);

    if (airdrop) {
      setAirdrop(!airdrop);
    }
  };

  const handleAirdropClick = () => {
    setAirdrop(!airdrop);
  };

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
    <div className="rounded-md px-3 py-1 w-[50%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 dark:bg-slate-800/5 shadow-md flex flex-col justify-evenly border-slate-400/40 border">
      <div className="flex flex-row space-x-2" onClick={handleWifiClick}>
        <div
          className={`h-7 w-7 ${
            wifi
              ? 'bg-apple-blue'
              : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
          } rounded-full flex justify-center items-center text-white`}
        >
          {wifiIcon()}
        </div>
        <div>
          <p className="text-xs font-semibold">Wi-Fi</p>
          <p className="text-xxs dark:text-slate-200/60">
            {wifi ? 'NETGEAR15-5G' : 'Not connected'}
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-2" onClick={handleBluetoothClick}>
        <div
          className={`h-7 w-7 ${
            bluetooth
              ? 'bg-apple-blue'
              : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
          } rounded-full flex justify-center items-center`}
        >
          <IoBluetooth style={{ color: 'white' }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Bluetooth</p>
          <p className="text-xxs dark:text-slate-200/60">
            {bluetooth ? 'On' : 'Off'}
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-2" onClick={handleAirdropClick}>
        <div
          className={`h-7 w-7 ${
            airdrop
              ? 'bg-apple-blue'
              : 'bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30'
          } rounded-full flex justify-center items-center`}
        >
          <MdWifiTethering style={{ color: 'white' }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Airdrop</p>
          <p className="text-xxs dark:text-slate-200/60">
            {airdrop ? 'Contacts only' : 'Off'}
          </p>
        </div>
      </div>
    </div>
  );
}
