"use client";

import { useSystem } from "@/hooks/useSystem";
import { cn } from "@/lib/utils";
import { Battery } from "./navbar/battery";
import { AppleMenu } from "./navbar/apple-menu";
import { ControlCentre } from "./navbar/control-centre";
import { WidgetsBar } from "./navbar/widgets-bar";

export function Navbar() {
  const { logedIn } = useSystem();

  return (
    <div
      className={cn(
        "flex justify-between py-2 px-2 fixed top-0 left-0 right-0 z-50 w-full",
        logedIn &&
          "bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 dark:bg-slate-800/40"
      )}
    >
      <AppleMenu />
      <div className="flex flex-row items-center space-x-2">
        <Battery />
        <ControlCentre />
        <WidgetsBar />
      </div>
    </div>
  );
}
