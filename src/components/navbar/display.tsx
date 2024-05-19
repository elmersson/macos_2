import { Slider } from '../ui/slider';
import { BsFillSunFill } from 'react-icons/bs';
import { useSystemStore } from '../providers/store-provider';

export function Display() {
  const { display, setDisplay } = useSystemStore((state) => state);

  const handleDisplayChange = (value: number[]) => {
    setDisplay(value[0]);
  };

  return (
    <div className="rounded-md px-3 py-2 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 dark:bg-slate-800/5 shadow-md border-slate-400/40 border">
      <div className="space-y-2 mb-2">
        <p className="text-xs font-bold">Display</p>
        <Slider
          defaultValue={[display]}
          max={100}
          step={1}
          className="w-[100%]"
          onValueChange={handleDisplayChange}
          icon={<BsFillSunFill />}
        />
      </div>
    </div>
  );
}
