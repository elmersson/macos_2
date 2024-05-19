'use client';
import { Boot } from '@/components/boot';
import { Desktop } from '@/components/desktop';
import { Launchpad } from '@/components/launchpad';
import { Login } from '@/components/login';
import { Navbar } from '@/components/navbar';
import { useSystemStore } from '@/components/providers/store-provider';
import Wallpaper from '@/components/wallpaper';

export default function Home() {
  const { logedIn, display, launchPad } = useSystemStore((state) => state);
  const opacity = display * 0.01;

  return (
    <div style={{ opacity }}>
      <Boot />
      {launchPad && <Launchpad />}
      {!launchPad && <Navbar />}
      {logedIn ? <Desktop /> : <Login />}
      <Wallpaper />
    </div>
  );
}
