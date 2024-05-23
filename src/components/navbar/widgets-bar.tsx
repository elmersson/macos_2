import useTime from '@/hooks/useTime';
import { MyDrawer } from '../drawer';
import { Widgets } from './widgets';
import { format } from 'date-fns';

export function WidgetsBar({ logedIn }: { logedIn: boolean }) {
  const timeHook = useTime();

  return (
    <MyDrawer
      trigger={
        <button className="flex items-center text-sm" disabled={!logedIn}>
          {format(timeHook, 'EEE d MMM HH:mm')}
        </button>
      }
      content={<Widgets />}
    />
  );
}
