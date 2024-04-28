import { useSystem } from '@/hooks/useSystem';
import { DraggableItem } from './apps/draggable-item';
import { VSCode } from './apps/vscode';
import { Finder } from './apps/finder';
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
                console.log(app.id);
                bringToFront(app.id);
              }}
            >
              <DraggableItem onclose={() => closeApp(app.id)}>
                {app.id === 'visual_studio_code' ? (
                  <VSCode />
                ) : app.id === 'finder' ? (
                  <Finder />
                ) : null}
              </DraggableItem>
            </div>
          )
      )}
    </div>
  );
}
