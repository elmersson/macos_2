import { useSystem } from '@/hooks/useSystem';
import { DraggableItem } from './apps/draggable-item';
import { VSCode } from './apps/vscode';
export function Apps() {
  const { vsCode, setVsCode } = useSystem();
  return (
    <div className="flex">
      {vsCode && (
        <DraggableItem onclose={() => setVsCode(false)}>
          <VSCode />
        </DraggableItem>
      )}
    </div>
  );
}
