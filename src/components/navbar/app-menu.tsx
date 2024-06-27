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
import { FaCheck } from 'react-icons/fa6';

export function AppMenu() {
  const { activeApp, apps } = useAppStore((state) => state);
  const activeAppData = apps.find((app: AppData) => app.id === activeApp);

  if (!activeAppData?.triggers) {
    return null;
  }

  const renderMenuItems = (menuItems: MenuItem[], checklist?: boolean) => {
    return menuItems.map((item) => (
      <Fragment key={item.id}>
        {!item.subMenu && (
          <DropdownMenuItem onSelect={item.action} disabled={item.disabled}>
            <div className="flex items-center mr-6">
              {checklist && (
                <span className="w-4 h-4 mr-1 flex items-center justify-center">
                  {item.checked && <FaCheck />}
                </span>
              )}
              <p className="text-s">{item.title}</p>
            </div>
            {item.shortcut && (
              <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        )}
        {item.subMenu && (
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <div className="flex items-center">
                {checklist && (
                  <span className="w-4 h-4 mr-1 flex items-center justify-center">
                    {item.checked && <FaCheck />}
                  </span>
                )}
                <p className="text-s">{item.title}</p>
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {renderMenuItems(item.subMenu)}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        )}
        {item.separator && <DropdownMenuSeparator className="bg-white/20" />}
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
            {renderMenuItems(trigger.menu, trigger.checklist)}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
}
