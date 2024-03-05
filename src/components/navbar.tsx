"use client";

import { useSystem } from "@/hooks/useSystem";
import useTime from "@/hooks/useTime";
import getFullFormatDate from "@/lib/date/getFullFormatDate";
import { cn } from "@/lib/utils";
import { IoLogoApple } from "react-icons/io5";
import { Battery } from "./navbar/battery";

export function Navbar() {
  const { logedIn } = useSystem();

  const timeHook = useTime();
  const { dayOfWeek, dayOfMonth, month, time } = getFullFormatDate(timeHook);

  return (
    <div
      className={cn(
        "flex justify-between py-2 px-2 fixed top-0 left-0 right-0 z-50 w-full",
        logedIn &&
          "bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 dark:bg-slate-800/40"
      )}
    >
      <div className="flex flex-row items-center">
        <div className="px-2.5 rounded-md py-1">
          <IoLogoApple className="text-white size-[18px] drop-shadow-lg" />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <Battery />
        <div className="flex items-center space-x-1 text-sm text-slate-300">
          <span>{dayOfWeek.substring(0, 3)}</span>
          <span>{dayOfMonth}</span>
          <span>{month.substring(0, 3)}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
