import ControlCenterImage from "../../assets/icons/controlCenter.svg";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ConnectControl } from "./connect-control";
import { ThemeSwitcher } from "./theme-switcher";
import { StageAndScreen } from "./stage-and-screen";
import { Display } from "./display";
import { Sound } from "./sound";
import { Music } from "./music";

export function ControlCentre() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className={"flex items-center px-2.5 py-1 rounded-md"}
        >
          <Image
            src={ControlCenterImage}
            height={13}
            alt="control center logo"
            className="drop-shadow"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px] mt-1 rounded-xl">
        <div className="flex flex-row space-x-2">
          <ConnectControl />
          <div className="flex flex-col space-y-2 w-[50%]">
            <ThemeSwitcher />
            <StageAndScreen />
          </div>
        </div>
        <Display />
        <Sound />
        <Music />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
