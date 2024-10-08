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
import {
  useAppStore,
  useFinderStore,
  useItermStore,
  useNoteStore,
  useOutlookStore,
  useSystemStore
} from '../providers/store-provider';

export function AppleMenu() {
  const { setLogedIn, resetSystemStore, setIsSleeping } = useSystemStore(
    (state) => state
  );
  const { resetAppStore, openApp, bringToFront } = useAppStore(
    (state) => state
  );
  const { resetNoteStore } = useNoteStore((state) => state);
  const { resetItermStore } = useItermStore((state) => state);
  const { resetFinderStore } = useFinderStore((state) => state);
  const { resetOutlookStore } = useOutlookStore((state) => state);

  const handleQuit = () => {
    resetAppStore();
    resetItermStore();
    resetNoteStore();
    resetSystemStore();
    resetFinderStore();
    resetOutlookStore();
  };

  const handleSignOut = () => {
    setLogedIn(false);
  };

  const handleSleep = () => {
    setIsSleeping(true);
  };

  const handleSystemSettings = () => {
    openApp('system');
    bringToFront('system');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div role="button" className="flex items-center px-4 py-1 rounded-md">
          <div className="rounded-md">
            <IoLogoApple className="text-white size-[20px] drop-shadow-lg" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px] mt-1">
        <DropdownMenuItem>
          <p className="text-s">About this Mac</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/20" />
        <DropdownMenuItem
          className="flex justify-between"
          onClick={handleSystemSettings}
        >
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
        <DropdownMenuSeparator className="bg-white/20" />
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
        <DropdownMenuSeparator className="bg-white/20" />
        <DropdownMenuItem>
          <p className="text-s">Force Quit</p>
          <DropdownMenuShortcut>⌥⌘⎋</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/20" />
        <DropdownMenuItem>
          <p className="text-s" onClick={handleSleep}>
            Sleep
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleQuit}>
          <p className="text-s">Restart...</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleQuit}>
          <p className="text-s">Shut Down...</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/20" />
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
