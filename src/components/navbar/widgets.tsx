import Calendar from './widgets/calendar';
import { Weather } from './widgets/weather';

export function Widgets() {
  return (
    <div className="space-y-3">
      <Weather />
      <Calendar />
      <div className="flex justify-center">
        <div className="h-[24px] w-[98px] bg-clip-padding backdrop-filter backdrop-blur-md bg-neutral-50/50 rounded-2xl shadow-2xl flex items-center justify-center">
          <p className="text-center text-xs text-slate-600">Edit widgets</p>
        </div>
      </div>
    </div>
  );
}
