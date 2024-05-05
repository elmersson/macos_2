import { useSystem } from '@/hooks/useSystem';
import { VSCode } from './apps/vscode';
import { Finder } from './apps/finder';
import { Arc } from './apps/arc';
import { Notes } from './apps/notes';
import { Iterm2 } from './apps/iterm2';
import { Outlook } from './apps/outlook';
export function Apps() {
  const { apps, bringToFront } = useSystem();
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
              ) : app.id === 'mail' ? (
                <Outlook />
              ) : null}
            </div>
          )
      )}
    </div>
  );
}
