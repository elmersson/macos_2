import { VSCode } from "./apps/vscode";
import Dock from "./dock";

export function Desktop() {
  return (
    <div className="flex overflow-hidden no-scrollbar">
      <VSCode />
      <Dock />
    </div>
  );
}
