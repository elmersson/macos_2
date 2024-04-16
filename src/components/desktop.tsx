import { Apps } from './apps';
import { VSCode } from './apps/vscode';
import Dock from './dock';

export function Desktop() {
  return (
    <div className="flex overflow-hidden no-scrollbar h-screen">
      <Apps />
      <Dock />
    </div>
  );
}
