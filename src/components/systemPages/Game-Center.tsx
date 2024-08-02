import { ContentBox } from '../apps/system';
import { Switch } from '../ui/switch';
import { FcInTransit } from 'react-icons/fc';

export function GameCenter() {
  return (
    <div>
      <ContentBox className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-2">
          <div className="mt-1">
            <span className="bg-white text-blue-500 w-6 h-6 flex items-center justify-center rounded">
              <FcInTransit />
            </span>
          </div>
          <div className="flex flex-col">
            <span>iCloud</span>
            <span className="text-sm text-neutral-400">
              A social gaming service that lets you interact with friends, track
              and compare scores and achievements, challenge other players and
              compete in muliplayer games.
            </span>
            <span className="text-sm text-blue-500">
              See how your data is managed...
            </span>
          </div>
        </div>
        <div>
          <Switch />
        </div>
      </ContentBox>
    </div>
  );
}
