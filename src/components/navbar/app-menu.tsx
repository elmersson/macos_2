import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { useAppStore } from '../providers/store-provider';
import { Fragment } from 'react';
import { AppData, MenuItem, Trigger } from '@/data/Apps';

export function AppMenu() {
  const { activeApp, apps } = useAppStore((state) => state);
  const activeAppData = apps.find((app: AppData) => app.id === activeApp);

  if (!activeAppData?.triggers) {
    return null;
  }

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map((item) => (
      <Fragment key={item.id}>
        <DropdownMenuItem onSelect={item.action}>
          <p className="text-s mr-6">{item.title}</p>
          {item.shortcut && (
            <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
          )}
        </DropdownMenuItem>
        {item.subMenu && (
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <p className="text-s">{item.title}</p>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {renderMenuItems(item.subMenu)}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        )}
        {item.separator && <DropdownMenuSeparator />}
      </Fragment>
    ));
  };

  return (
    <div className="space-x-4">
      {activeAppData.triggers.map((trigger: Trigger) => (
        <DropdownMenu key={trigger.id}>
          <DropdownMenuTrigger asChild>
            <span role="button" className="text-sm drop-shadow-lg">
              {trigger.label}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1">
            {renderMenuItems(trigger.menu)}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
}
