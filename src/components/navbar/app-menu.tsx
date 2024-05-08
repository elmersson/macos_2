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

export function AppMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span role="button" className="text-sm drop-shadow-lg">
          File
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1">
        <DropdownMenuItem>
          <p className="text-s">About this Mac</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between">
          <p className="text-s">System Settings...</p>
          <div className="items-center px-3 rounded-xl bg-slate-400/50">
            <p className="text-xs ">1 Update</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-between">
          <p className="text-s">App Store...</p>
          <div className="items-center px-3 rounded-xl bg-slate-400/50">
            <p className="text-xs ">11 Updates</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <p className="text-s">Recent Items</p>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <p className="text-xs font-bold text-slate-400/50 px-2">
                Applications
              </p>
              <DropdownMenuItem>
                <p className="text-s">App</p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <p className="text-xs font-bold text-slate-400/50 px-2">
                Documents
              </p>
              <DropdownMenuSeparator />
              <p className="text-xs font-bold text-slate-400/50 px-2">
                Servers
              </p>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <p className="text-s">Clear Menu</p>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-s">Force Quit</p>
          <DropdownMenuShortcut>⌥⌘⎋</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-s">Sleep</p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-s">Restart...</p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-s">Shut Down...</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-s">Lock Screen</p>
          <DropdownMenuShortcut>⌃⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-s mr-8">Log Out Rasmus Elmersson...</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
