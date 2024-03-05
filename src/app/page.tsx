"use client";
import { Desktop } from "@/components/desktop";
import { Login } from "@/components/login";
import { useSystem } from "@/hooks/useSystem";

export default function Home() {
  const { logedIn } = useSystem();
  return <>{logedIn ? <Desktop /> : <Login />}</>;
}
