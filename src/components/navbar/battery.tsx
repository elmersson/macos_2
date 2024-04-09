import { useBattery } from "@/hooks/useBattery";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import BatteryLevelIndicator from "./battery-level-indicator";
import Charging from "@/assets/icons/charging.svg";
import Image from "next/image";

export function Battery() {
  const batteryState = useBattery();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div role="button" className={"flex items-center px-2 py-1 rounded-md"}>
          <p className="text-slate-200 text-xs text-shadow">
            {(batteryState.level * 100).toFixed(0)} %
          </p>
          <div className="relative flex items-center drop-shadow-lg">
            <BatteryLevelIndicator batteryLevel={batteryState.level} />
            {batteryState.charging && (
              <Image
                src={Charging}
                alt="charging"
                height={9.8}
                width={9.8}
                className="absolute top-1/2 -mt-2 left-2.5 ml-1 drop-shadow-lg"
              />
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[270px] mt-1">
        <DropdownMenuLabel className="pb-0 text-white">
          Battery
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <p className="text-xs text-slate-400">
            Power source: {batteryState.charging ? "Power Adapter" : "Battery"}
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-xs text-slate-400">
            No Apps Using Significant Energy
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-xs text-white">Battery Settings...</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
