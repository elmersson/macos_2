import { Apps } from './apps';
import Dock from './dock';
import { useSystemStore } from './providers/store-provider';

export function Desktop() {
  const { launchPad } = useSystemStore((state) => state);

  return (
    <div className="flex overflow-hidden no-scrollbar h-screen">
      {!launchPad && <Apps />}
      <Dock />
    </div>
  );
}
