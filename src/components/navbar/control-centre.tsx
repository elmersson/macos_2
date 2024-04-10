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

export function ControlCentre() {
  const [_audio, state, controls, _ref] = useAudio({
    src: "/music/Stockholmsvy.mp3",
    autoReplay: true,
  });

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
      <DropdownMenuContent className="w-[340px] mt-1 rounded-xl space-y-2 p-3">
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
