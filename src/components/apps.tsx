import { VSCode } from './apps/vscode';
import { Finder } from './apps/finder';
import { Arc } from './apps/arc';
import { Notes } from './apps/notes';
import { Iterm2 } from './apps/iterm2';
import { Outlook } from './apps/outlook';
import { useAppStore } from './providers/store-provider';
import { Fragment } from 'react';
import { System } from './apps/system';
export function Apps() {
  const { apps } = useAppStore((state) => state);

  return (
    <div className="flex relative w-full h-full">
      {apps.map(
        (app) =>
          app.isOpen &&
          !app.isMinimized && (
            <Fragment key={app.id}>
              {app.id === 'visual_studio_code' ? (
                <VSCode key={app.id} appData={app} />
              ) : app.id === 'finder' ? (
                <Finder key={app.id} appData={app} />
              ) : app.id === 'arc' ? (
                <Arc key={app.id} appData={app} />
              ) : app.id === 'notes' ? (
                <Notes key={app.id} appData={app} />
              ) : app.id === 'iterm2' ? (
                <Iterm2 key={app.id} appData={app} />
              ) : app.id === 'outlook' ? (
                <Outlook key={app.id} appData={app} />
              ) : app.id === 'system' ? (
                <System key={app.id} appData={app} />
              ) : null}
            </Fragment>
          )
      )}
    </div>
  );
}
