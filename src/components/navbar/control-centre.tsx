"use client";

import ControlCenterImage from "../../assets/icons/controlCenter.svg";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ConnectControl } from "./connect-control";
import { ThemeSwitcher } from "./theme-switcher";
import { StageAndScreen } from "./stage-and-screen";
import { Display } from "./display";
import { Sound } from "./sound";
import { Music } from "./music";
import { useAudio } from "@/hooks/useAudio";
import { useSystem } from "@/hooks/useSystem";

function getOpacityClass(displayValue: number) {
  if (displayValue >= 90) return "opacity-100";
  if (displayValue >= 75) return "opacity-90";
  if (displayValue >= 50) return "opacity-75";
  if (displayValue >= 25) return "opacity-50";
  if (displayValue > 15) return "opacity-25";
  if (displayValue > 0) return "opacity-15";
  return "opacity-0";
}

export function ControlCentre() {
  const { display } = useSystem();
  const [_audio, state, controls, _ref] = useAudio({
    src: "/music/Stockholmsvy.mp3",
    autoReplay: true,
  });

  const opacityClass = getOpacityClass(display);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className={"flex items-center px-2.5 py-1 rounded-md"}
        >
          <Image
            src={ControlCenterImage}
            height={14}
            alt="control center logo"
            className="drop-shadow"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`w-[340px] mt-1 rounded-xl space-y-2 p-3 ${opacityClass}`}
      >
        <div className="flex flex-row space-x-2">
          <ConnectControl />
          <div className="flex flex-col space-y-2 w-[50%]">
            <ThemeSwitcher />
            <StageAndScreen />
          </div>
        </div>
        <Display />
        <Sound setAudioVolume={controls.volume} />
        <Music isPlaying={state.playing} togglePlayPause={controls.toggle} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
