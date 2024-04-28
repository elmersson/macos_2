import { useSystem } from '@/hooks/useSystem';
import { Apps } from './apps';
import Dock from './dock';

export function Desktop() {
  const { launchPad } = useSystem();

  return (
    <div className="flex overflow-hidden no-scrollbar h-screen">
      {!launchPad && <Apps />}
      <Dock />
    </div>
  );
}
