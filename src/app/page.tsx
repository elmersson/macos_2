"use client";
import { Boot } from "@/components/boot";
import { Desktop } from "@/components/desktop";
import { Login } from "@/components/login";
import Wallpaper from "@/components/wallpaper";
import { useSystem } from "@/hooks/useSystem";

export default function Home() {
  const { booted, logedIn } = useSystem();
  return (
    <>
      {!booted && <Boot />}
      {logedIn ? <Desktop /> : <Login />}
      <Wallpaper />
    </>
  );
}
