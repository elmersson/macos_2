import { IoLogoApple } from 'react-icons/io5';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from '../ui/dropdown-menu';
import { useSystem } from '@/hooks/useSystem';

export function AppleMenu() {
  const { logedIn, setBooted, setLogedIn } = useSystem();

  const handleQuit = () => {
    setBooted(false);
    setLogedIn(false);
  };

  const handleSignOut = () => {
    setLogedIn(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className={'flex items-center px-2.5 py-1 rounded-md'}
        >
          <div className="rounded-md">
            <IoLogoApple className="text-white size-[18px] drop-shadow-lg" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px] mt-1">
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
          <p className="text-s" onClick={handleSignOut}>
            Sleep
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleQuit}>
          <p className="text-s">Restart...</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleQuit}>
          <p className="text-s">Shut Down...</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-s" onClick={handleSignOut}>
            Lock Screen
          </p>
          <DropdownMenuShortcut>⌃⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-s" onClick={handleSignOut}>
            Log Out Rasmus Elmersson...
          </p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
