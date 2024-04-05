"use client";
import { Boot } from "@/components/boot";
import { Desktop } from "@/components/desktop";
import { Login } from "@/components/login";
import { Navbar } from "@/components/navbar";
import Wallpaper from "@/components/wallpaper";
import { useSystem } from "@/hooks/useSystem";

export default function Home() {
  const { logedIn, display } = useSystem();
  const opacity = display * 0.01;

  return (
    <div style={{ opacity }}>
      <Boot />
      <Navbar />
      {logedIn ? <Desktop /> : <Login />}
      <Wallpaper />
    </div>
  );
}
