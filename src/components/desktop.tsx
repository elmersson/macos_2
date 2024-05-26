import { Apps } from './apps';
import Dock from './dock';
import { useSystemStore } from './providers/store-provider';
import { SearchCommand } from './search-command';

export function Desktop() {
  const { launchPad } = useSystemStore((state) => state);

  return (
    <div className="flex overflow-hidden no-scrollbar h-screen">
      <SearchCommand />
      {!launchPad && <Apps />}
      <Dock />
    </div>
  );
}
