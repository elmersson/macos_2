"use client";
import { Boot } from "@/components/boot";
import { Desktop } from "@/components/desktop";
import { Login } from "@/components/login";
import { useSystem } from "@/hooks/useSystem";

export default function Home() {
  const { logedIn } = useSystem();
  return <>{logedIn ? <Desktop /> : <Login />}</>;
}
