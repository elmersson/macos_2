import { IoApps } from 'react-icons/io5';
import { TbBoxMultiple } from 'react-icons/tb';

export function StageAndScreen() {
  return (
    <div className="flex flex-row space-x-2">
      <div className="rounded-md px-3 py-1 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 dark:bg-slate-800/5 shadow-md flex justify-center items-center flex-col border-slate-400/40 border">
        <div className="flex justify-center items-center py-1 dark:text-slate-200/40">
          <IoApps style={{ fontSize: '24px' }} />
        </div>
        <div>
          <p className="text-xxs text-center">Stage Manager</p>
        </div>
      </div>
      <div className="rounded-md px-3 py-1 w-[100%] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-slate-200/10 dark:bg-slate-800/5 shadow-md flex justify-center items-center flex-col border-slate-400/40 border">
        <div className="flex justify-center items-center py-1 darktext-slate-200/40">
          <TbBoxMultiple style={{ fontSize: '24px' }} />
        </div>
        <div>
          <p className="text-xxs text-center">Screen Mirroring</p>
        </div>
      </div>
    </div>
  );
}
