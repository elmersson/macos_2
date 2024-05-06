import { AppProps } from '@/data/Apps';
import { DraggableItem } from './draggable-item';

export function VSCode({ appData, closeApp, bringToFront }: AppProps) {
  return (
    <DraggableItem
      onclose={closeApp}
      appData={appData}
      bringToFront={bringToFront}
    >
      <iframe
        className="w-full h-full bg-black"
        title="VSCode GitHub"
        src="https://github1s.com/elmersson/macos_2"
      />
    </DraggableItem>
  );
}
