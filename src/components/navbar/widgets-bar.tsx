import useTime from '@/hooks/useTime';
import getFullFormatDate from '@/lib/date/getFullFormatDate';
import { MyDrawer } from '../drawer';
import { Widgets } from './widgets';

export function WidgetsBar() {
  const timeHook = useTime();
  const { dayOfWeek, dayOfMonth, month, time } = getFullFormatDate(timeHook);

  return (
    <MyDrawer
      trigger={
        <div className="flex items-center space-x-1 text-sm" role="button">
          <span>{dayOfWeek.substring(0, 3)}</span>
          <span>{dayOfMonth}</span>
          <span>{month.substring(0, 3)}</span>
          <span>{time}</span>
        </div>
      }
      content={<Widgets />}
    />
  );
}
