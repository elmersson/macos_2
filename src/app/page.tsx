'use client';
import { Boot } from '@/components/boot';
import { Desktop } from '@/components/desktop';
import { Launchpad } from '@/components/launchpad';
import { Login } from '@/components/login';
import { Navbar } from '@/components/navbar';
import { useSystemStore } from '@/components/providers/store-provider';
import Wallpaper from '@/components/wallpaper';
import { useEffect } from 'react';

export default function Home() {
  const { logedIn, display, launchPad, setDisplay, isSleeping, setIsSleeping } =
    useSystemStore((state) => state);
  const opacity = display * 0.01;

  useEffect(() => {
    const handleWakeUp = () => {
      if (isSleeping) {
        setDisplay(100);
        setIsSleeping(false);
      }
    };

    window.addEventListener('mousemove', handleWakeUp);
    window.addEventListener('keypress', handleWakeUp);

    return () => {
      window.removeEventListener('mousemove', handleWakeUp);
      window.removeEventListener('keypress', handleWakeUp);
    };
  }, [isSleeping, setDisplay, setIsSleeping]);

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
