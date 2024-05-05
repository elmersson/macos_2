import { DraggableItem } from './draggable-item';
import { useSystem } from '@/hooks/useSystem';

export function VSCode() {
  const { closeApp } = useSystem();

  return (
    <DraggableItem onclose={() => closeApp('visual_studio_code')}>
      <iframe
        className="w-full h-full bg-black"
        title="VSCode GitHub"
        src="https://github1s.com/elmersson/macos_2"
      />
    </DraggableItem>
  );
}
