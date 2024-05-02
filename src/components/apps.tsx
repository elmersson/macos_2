import { useSystem } from '@/hooks/useSystem';
import { DraggableItem } from './apps/draggable-item';
import { VSCode } from './apps/vscode';
import { Finder } from './apps/finder';
import { Arc } from './apps/arc';
import { Notes } from './apps/notes';
import { Iterm2 } from './apps/iterm2';
export function Apps() {
  const { apps, closeApp, bringToFront } = useSystem();
  return (
    <div
      className="flex"
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {apps.map(
        (app) =>
          app.isOpen && (
            <div
              key={app.id}
              style={{
                zIndex: app.z,
                position: 'absolute'
              }}
              onClick={() => {
                bringToFront(app.id);
              }}
            >
              <DraggableItem onclose={() => closeApp(app.id)}>
                {app.id === 'visual_studio_code' ? (
                  <VSCode />
                ) : app.id === 'finder' ? (
                  <Finder />
                ) : app.id === 'arc' ? (
                  <Arc />
                ) : app.id === 'notes' ? (
                  <Notes />
                ) : app.id === 'iterm2' ? (
                  <Iterm2 />
                ) : null}
              </DraggableItem>
            </div>
          )
      )}
    </div>
  );
}
