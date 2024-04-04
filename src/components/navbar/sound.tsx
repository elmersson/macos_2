import { Slider } from "../ui/slider";

interface SoundProps {
  volume: number;
  setVolume: (newVolume: number) => void;
}

export function Sound({ volume, setVolume }: SoundProps) {
  const handleDisplayChange = (value: number[]) => {
    setVolume(value[0] / 100);
  };
  return (
    <div className="rounded-md px-3 py-2 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 shadow-md border-slate-400/40 border">
      <div className="space-y-2 mb-2">
        <p className="text-xs font-bold">Sound</p>
        <Slider
          defaultValue={[volume]}
          max={100}
          step={1}
          className="w-[100%]"
          onValueChange={handleDisplayChange}
        />
      </div>
    </div>
  );
}
