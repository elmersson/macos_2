"use client";
import { useSystem } from "@/hooks/useSystem";
import { useEffect, useState } from "react";
import { IoLogoApple } from "react-icons/io5";

export function Boot() {
  const [progress, setProgress] = useState<number>(0);
  const { booted, setBooted } = useSystem();

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress + 1) % 101);
      }, 50);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setBooted(true);
      }, 1000);
    }
  }, [progress, setBooted]);

  if (booted) {
    return;
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black justify-center z-[999999] fixed top-0 left-0">
      <IoLogoApple className="text-white size-[130px]" />
      <div className="h-1.5 w-64 rounded-full bg-neutral-700/80 border border-neutral-100/20 mt-[5%]">
        <div
          className="h-1 rounded-full bg-white border"
          style={{ width: `${progress}%`, transition: "width 0.5s ease" }}
        ></div>
      </div>
    </div>
  );
}
