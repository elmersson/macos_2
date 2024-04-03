import { Slider } from "../ui/slider";

export function Display() {
  return (
    <div className="rounded-md px-3 py-2 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md">
      <Slider defaultValue={[50]} max={100} step={1} className="w-[100%]" />
    </div>
  );
}
