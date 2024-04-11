import Dock from "./dock";

export function Desktop() {
  return (
    <div className="flex overflow-hidden no-scrollbar">
      <Dock />
    </div>
  );
}
