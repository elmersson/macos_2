import { Bluetooth, Wifi } from "lucide-react";

export function ConnectControl() {
  return (
    <div className="rounded-md px-3 py-1 w-[50%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md flex flex-col justify-evenly">
      <div className="flex flex-row space-x-2">
        <div className="h-7 w-7 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 rounded-full flex justify-center items-center">
          <Wifi style={{ color: "white" }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Wi-Fi</p>
          <p className="text-xs">NETGEAR15-5G</p>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="h-7 w-7 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 rounded-full flex justify-center items-center">
          <Bluetooth style={{ color: "white" }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Bluetooth</p>
          <p className="text-xs">On</p>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="h-7 w-7 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/30 rounded-full flex justify-center items-center">
          <Wifi style={{ color: "white" }} />
        </div>
        <div>
          <p className="text-xs font-semibold">Airdrop</p>
          <p className="text-xs">On</p>
        </div>
      </div>
    </div>
  );
}
