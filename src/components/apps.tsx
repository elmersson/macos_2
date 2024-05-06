import { useSystem } from '@/hooks/useSystem';
import { VSCode } from './apps/vscode';
import { Finder } from './apps/finder';
import { Arc } from './apps/arc';
import { Notes } from './apps/notes';
import { Iterm2 } from './apps/iterm2';
import { Outlook } from './apps/outlook';
export function Apps() {
  const { apps, closeApp, bringToFront } = useSystem();

  return (
    <div className="flex relative w-full h-full">
      {apps.map(
        (app) =>
          app.isOpen && (
            <>
              {app.id === 'visual_studio_code' ? (
                <VSCode
                  key={app.id}
                  appData={app}
                  closeApp={() => closeApp(app.id)}
                  bringToFront={() => bringToFront(app.id)}
                />
              ) : app.id === 'finder' ? (
                <Finder
                  key={app.id}
                  appData={app}
                  closeApp={() => closeApp(app.id)}
                  bringToFront={() => bringToFront(app.id)}
                />
              ) : app.id === 'arc' ? (
                <Arc
                  key={app.id}
                  appData={app}
                  closeApp={() => closeApp(app.id)}
                  bringToFront={() => bringToFront(app.id)}
                />
              ) : app.id === 'notes' ? (
                <Notes
                  key={app.id}
                  appData={app}
                  closeApp={() => closeApp(app.id)}
                  bringToFront={() => bringToFront(app.id)}
                />
              ) : app.id === 'iterm2' ? (
                <Iterm2
                  key={app.id}
                  appData={app}
                  closeApp={() => closeApp(app.id)}
                  bringToFront={() => bringToFront(app.id)}
                />
              ) : app.id === 'mail' ? (
                <Outlook
                  key={app.id}
                  appData={app}
                  closeApp={() => closeApp(app.id)}
                  bringToFront={() => bringToFront(app.id)}
                />
              ) : null}
            </>
          )
      )}
    </div>
  );
}
