import { StaticImageData } from 'next/image';
import Finder from '@/assets/apps/finder.png';
import MiniFinder from '@/assets/apps/minimized/finder-minimized.png';
import LaunchPad from '@/assets/apps/launchpad.png';
import Arc from '@/assets/apps/arc.png';
import MiniArc from '@/assets/apps/minimized/arc-minimized.png';
import Mail from '@/assets/apps/outlook.png';
import MiniMail from '@/assets/apps/minimized/outlook-minimized.png';
import Iterm2 from '@/assets/apps/iterm2.png';
import MiniIterm2 from '@/assets/apps/minimized/iterm2-minimized.png';
import VsCode from '@/assets/apps/vscode.png';
import MiniVsCode from '@/assets/apps/minimized/vscode-minimized.png';
import Github from '@/assets/apps/github.png';
import Notes from '@/assets/apps/notes.png';
import MiniNotes from '@/assets/apps/minimized/notes-minimized.png';
import Lotion from '@/assets/apps/lotion.png';
import Liro from '@/assets/apps/liro.png';
import System from '@/assets/apps/system.png';

export interface MenuItem {
  id: string;
  title: string;
  shortcut?: string;
  action?: () => void;
  subMenu?: MenuItem[];
  separator?: boolean;
  disabled?: boolean;
  checked?: boolean;
  input?: true;
}

export interface Trigger {
  id: string;
  label: string;
  menu: MenuItem[];
  checklist?: boolean;
}

export interface AppData {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  img: StaticImageData;
  miniImg?: StaticImageData;
  url?: string;
  z: number;
  size: { width: number; height: number };
  position: { x: number; y: number };
  triggers: Trigger[];
}

export interface AppProps {
  appData: AppData;
}

export const apps: AppData[] = [
  {
    id: 'finder',
    title: 'Finder',
    isOpen: false,
    isMinimized: false,
    img: Finder,
    miniImg: MiniFinder,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'title',
        label: 'Finder',
        menu: [
          { id: 'about-finder', title: 'About Finder', separator: true },
          {
            id: 'settings',
            title: 'Settings...',
            shortcut: '⌘,',
            separator: true
          },
          {
            id: 'empty-bin',
            title: 'Empty Bin...',
            shortcut: '⇧⌘⌫',
            separator: true
          },
          {
            id: 'services',
            title: 'Services',
            subMenu: [
              { id: 'new-iterm2-tab-here', title: 'New iTerm2 Tab Here' },
              {
                id: 'new-iterm2-window-here',
                title: 'New iTerm2 Window Here',
                separator: true
              },
              { id: 'activity-monitor', title: 'Activity Monitor' },
              { id: 'allocations-leaks', title: 'Allocations & Leaks' },
              { id: 'file-activity', title: 'File Activity' },
              { id: 'system-trace', title: 'System Trace' },
              {
                id: 'time-profile-active-app',
                title: 'Time Profile Active Application'
              },
              {
                id: 'time-profile-app-under-mouse',
                title: 'Time Profile App Under Mouse'
              },
              {
                id: 'time-profile-entire-system',
                title: 'Time Profile Entire System'
              },
              {
                id: 'toggle-instruments-recording',
                title: 'Toggle Instruments Recording',
                separator: true
              },

              { id: 'services-settings', title: 'Services Settings...' }
            ],
            separator: true
          },
          { id: 'hide-finder', title: 'Hide Finder', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          { id: 'show-all', title: 'Show All', disabled: true }
        ]
      },
      {
        id: 'file',
        label: 'File',
        menu: [
          {
            id: 'new-finder-window',
            title: 'New Finder Window',
            shortcut: '⌘N'
          },
          {
            id: 'new-folder',
            title: 'New Folder',
            shortcut: '⇧⌘N',
            disabled: true
          },
          {
            id: 'new-folder-with-selection',
            title: 'New Folder with Selection',
            shortcut: '⌃⌘N',
            disabled: true
          },
          { id: 'new-smart-folder', title: 'New Smart Folder' },
          { id: 'new-tab', title: 'New Tab', shortcut: '⌘T' },
          { id: 'open', title: 'Open', shortcut: '⌘O' },
          {
            id: 'open-with',
            title: 'Open With',
            subMenu: [
              { id: 'preview', title: 'Preview (default)' },
              { id: '010-editor', title: '010 Editor' },
              { id: 'arc', title: 'Arc' },
              { id: 'books', title: 'Books' },
              { id: 'calibre', title: 'calibre' },
              { id: 'chromium', title: 'Chromium' },
              { id: 'colorsync-utility', title: 'ColorSync Utility' },
              { id: 'firefox', title: 'Firefox' },
              { id: 'google-chrome', title: 'Google Chrome' },
              { id: 'microsoft-word', title: 'Microsoft Word' },
              { id: 'nightly', title: 'Nightly' },
              { id: 'safari', title: 'Safari' },
              {
                id: 'save-as-adobe-pdf',
                title: 'Save as Adobe PDF',
                separator: true
              },
              { id: 'app-store', title: 'App Store...' },
              { id: 'other', title: 'Other...' }
            ],
            disabled: true
          },
          {
            id: 'close-window',
            title: 'Close Window',
            shortcut: '⌘W',
            separator: true
          },
          { id: 'get-info', title: 'Get Info', shortcut: '⌘I', disabled: true },
          { id: 'rename', title: 'Rename', disabled: true },
          { id: 'compress', title: 'Compress' },
          {
            id: 'duplicate',
            title: 'Duplicate',
            shortcut: '⌘D',
            disabled: true
          },
          {
            id: 'make-alias',
            title: 'Make Alias',
            shortcut: '⌃⌘A',
            disabled: true
          },
          {
            id: 'quick-look',
            title: 'Quick Look',
            shortcut: '⌘Y',
            disabled: true
          },
          {
            id: 'print',
            title: 'Print',
            shortcut: '⌘P',
            separator: true,
            disabled: true
          },
          { id: 'share', title: 'Share...', separator: true, disabled: true },
          {
            id: 'show-enclosing-folder',
            title: 'Show in Enclosing Folder',
            shortcut: '⌘R',
            disabled: true
          },
          {
            id: 'add-to-dock',
            title: 'Add to Dock',
            shortcut: '⌃⇧⌘T',
            separator: true,
            disabled: true
          },
          {
            id: 'move-to-bin',
            title: 'Move to Bin',
            shortcut: '⌘⌫',
            disabled: true
          },
          {
            id: 'eject',
            title: 'Eject',
            shortcut: '⌘E',
            separator: true,
            disabled: true
          },
          { id: 'tags', title: 'Tags...', separator: true, disabled: true },
          { id: 'find', title: 'Find', shortcut: '⌘F' }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          { id: 'undo', title: 'Undo', shortcut: '⌘Z', disabled: true },
          {
            id: 'redo',
            title: 'Redo',
            shortcut: '⇧⌘Z',
            separator: true,
            disabled: true
          },
          { id: 'cut', title: 'Cut', shortcut: '⌘X', disabled: true },
          { id: 'copy', title: 'Copy', shortcut: '⌘C', disabled: true },
          { id: 'paste', title: 'Paste', shortcut: '⌘V', disabled: true },
          {
            id: 'select-all',
            title: 'Select All',
            shortcut: '⌘A',
            separator: true
          },
          { id: 'show-clipboard', title: 'Show Clipboard', separator: true },
          {
            id: 'autofill',
            title: 'AutoFill',
            subMenu: [
              { id: 'contact', title: 'Contact...', disabled: true },
              { id: 'passwords', title: 'Passwords...', disabled: true }
            ]
          },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        checklist: true,
        menu: [
          { id: 'as-icons', title: 'as Icons', shortcut: '⌘1', checked: true },
          { id: 'as-list', title: 'as List', shortcut: '⌘2' },
          { id: 'as-columns', title: 'as Columns', shortcut: '⌘3' },
          {
            id: 'as-gallery',
            title: 'as Gallery',
            shortcut: '⌘4',
            separator: true
          },
          { id: 'use-groups', title: 'Use Groups', shortcut: '⌃⌘0' },
          {
            id: 'sort-by',
            title: 'Sort By',
            subMenu: [
              { id: 'name', title: 'Name', shortcut: '⌃⌥⌘1' },
              { id: 'kind', title: 'Kind', shortcut: '⌃⌥⌘2' },
              {
                id: 'date-last-opened',
                title: 'Date Last Opened',
                shortcut: '⌃⌥⌘3',
                checked: true
              },
              { id: 'date-added', title: 'Date Added', shortcut: '⌃⌥⌘4' },
              { id: 'date-modified', title: 'Date Modified', shortcut: '⌃⌥⌘5' },
              { id: 'date-created', title: 'Date Created', shortcut: '⌃⌥⌘6' },
              { id: 'size', title: 'Size', shortcut: '⌃⌥⌘7' },
              { id: 'tags', title: 'Tags', shortcut: '⌃⌥⌘8' }
            ]
          },
          { id: 'clean-up', title: 'Clean Up', disabled: true },
          {
            id: 'clean-up-by',
            title: 'Clean Up By',
            subMenu: [],
            disabled: true,
            separator: true
          },
          { id: 'show-tab-bar', title: 'Show Tab Bar', shortcut: '⇧⌘T' },
          {
            id: 'show-all-tabs',
            title: 'Show All Tabs',
            shortcut: "⇧⌘'",
            separator: true
          },
          { id: 'hide-sidebar', title: 'Hide Sidebar', shortcut: '⌥⌘S' },
          {
            id: 'show-preview',
            title: 'Show Preview',
            shortcut: '⇧⌘P',
            separator: true
          },
          { id: 'hide-toolbar', title: 'Hide Toolbar', shortcut: '⌥⌘T' },
          { id: 'hide-path-bar', title: 'Hide Path Bar', shortcut: '⌥⌘P' },
          {
            id: 'hide-status-bar',
            title: 'Hide Status Bar',
            shortcut: '⌘/',
            separator: true
          },
          { id: 'customise-toolbar', title: 'Customise Toolbar...' },
          {
            id: 'show-view-options',
            title: 'Show View Options',
            shortcut: '⌘J'
          },
          {
            id: 'show-preview-options',
            title: 'Show PreView Options',
            disabled: true,
            separator: true
          },
          {
            id: 'enter-full-screen',
            title: 'Enter Full Screen',
            shortcut: '⌃⌘F'
          }
        ]
      },
      {
        id: 'go',
        label: 'Go',
        menu: [
          { id: 'back', title: 'Back', shortcut: '⌃Ö', disabled: true },
          { id: 'forward', title: 'Forward', shortcut: '⌃Ä', disabled: true },
          {
            id: 'enclosing-folder',
            title: 'Enclosing Folder',
            shortcut: '⇧⌃⌘A',
            disabled: true
          },
          { id: 'recents', title: 'Recents', shortcut: '⇧⌘F' },
          { id: 'documents', title: 'Documents', shortcut: '⇧⌘O' },
          { id: 'desktop', title: 'Desktop', shortcut: '⇧⌘D' },
          { id: 'downloads', title: 'Downloads', shortcut: '⌥⌘L' },
          { id: 'home', title: 'Home', shortcut: '⇧⌘H' },
          { id: 'library', title: 'Library', shortcut: '⇧⌘L' },
          { id: 'computer', title: 'Computer', shortcut: '⇧⌘C' },
          { id: 'airdrop', title: 'AirDrop', shortcut: '⇧⌘R' },
          { id: 'network', title: 'Network', shortcut: '⇧⌘K' },
          { id: 'icloud-drive', title: 'iCloud Drive', shortcut: '⇧⌘I' },
          { id: 'shared', title: 'Shared', shortcut: '⇧⌘S' },
          { id: 'applications', title: 'Applications', shortcut: '⇧⌘A' },
          {
            id: 'utilities',
            title: 'Utilities',
            shortcut: '⇧⌘U',
            separator: true
          },
          {
            id: 'recent-folders',
            title: 'Recent Folders',
            subMenu: [
              { id: '3d-print', title: '3D Print' },
              { id: 'desktop', title: 'Desktop' },
              { id: 'documents', title: 'Documents' },
              { id: 'downloads', title: 'Downloads' },
              { id: 'github', title: 'Github' },
              { id: 'macos_2', title: 'macos_2' },
              { id: 'molecule-lamp', title: 'Molecule Lamp' },
              { id: 'molecule-lamp-table', title: 'molecule lamp table' },
              { id: 'recents', title: 'Recents', separator: true },
              { id: 'clear-menu', title: 'Clear Menu' }
            ],
            separator: true
          },
          { id: 'go-to-folder', title: 'Go to Folder...', shortcut: '⌘G' },
          {
            id: 'connect-to-server',
            title: 'Connect to Server...',
            shortcut: '⌘K'
          }
        ]
      },
      {
        id: 'window',
        label: 'Window',
        checklist: true,
        menu: [
          { id: 'minimise', title: 'Minimise', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom' },
          {
            id: 'tile-window-to-left-of-screen',
            title: 'Tile Window to Left of Screen'
          },
          {
            id: 'tile-window-to-right-of-screen',
            title: 'Tile Window to Right of Screen'
          },
          {
            id: 'replace-tiled-window',
            title: 'Replace Tiled Window',
            disabled: true,
            separator: true
          },
          {
            id: 'remove-window-from-set',
            title: 'Remove Window from Set',
            disabled: true,
            separator: true
          },
          {
            id: 'move-to-ipad',
            title: 'Move To Ipad'
          },
          {
            id: 'cycle-through-windows',
            title: 'Cycle Through Windows',
            shortcut: '⌘<'
          },
          {
            id: 'show-progress-window',
            title: 'Show Progress Window',
            disabled: true,
            separator: true
          },
          {
            id: 'show-previous-tab',
            title: 'Show Previous Tab',
            shortcut: '⇧⌃⇥',
            disabled: true
          },
          {
            id: 'show-next-tab',
            title: 'Show Next Tab',
            shortcut: '⇧⌃⇧⇥',
            disabled: true
          },
          {
            id: 'move-tab-to-new-window',
            title: 'Move Tab to New Window',
            disabled: true
          },
          {
            id: 'merge-all-windows',
            title: 'Merge All Windows',
            disabled: true,
            separator: true
          },
          {
            id: 'bring-all-to-front',
            title: 'Bring All to Front',
            separator: true
          },
          { id: 'recents', title: 'Recents', checked: true }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search', input: true },
          { id: 'tips-for-your-mac', title: 'Tips for Your Mac' },
          { id: 'macos-help', title: 'macOS Help' }
        ]
      }
    ]
  },
  {
    id: 'launchpad',
    title: 'Launchpad',
    isOpen: false,
    isMinimized: false,
    img: LaunchPad,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: []
  },
  {
    id: 'arc',
    title: 'Arc',
    isOpen: false,
    isMinimized: false,
    img: Arc,
    miniImg: MiniArc,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'arc',
        label: 'Arc',
        checklist: true,
        menu: [
          { id: 'about-arc', title: 'About Arc', separator: true },
          { id: 'settings', title: 'Settings...', shortcut: '⌘,' },
          { id: 'share-arc', title: 'Share Arc' },
          {
            id: 'set-as-default-browser',
            title: 'Set as Default Browser',
            shortcut: '⌘♥',
            disabled: true,
            checked: true
          },
          {
            id: 'import-from-another-browser',
            title: 'Import from Another Browser...',
            separator: true
          },
          {
            id: 'update-available',
            title: 'Update Available...',
            subMenu: [{ id: 'update', title: '1 update' }],
            separator: true
          },
          {
            id: 'services',
            title: 'Services',
            subMenu: [
              { id: 'activity-monitor', title: 'Activity Monitor' },
              { id: 'allocations-leaks', title: 'Allocations & Leaks' },
              { id: 'file-activity', title: 'File Activity' },
              { id: 'system-trace', title: 'System Trace' },
              {
                id: 'time-profile-active-app',
                title: 'Time Profile Active Application'
              },
              {
                id: 'time-profile-app-under-mouse',
                title: 'Time Profile App Under Mouse'
              },
              {
                id: 'time-profile-entire-system',
                title: 'Time Profile Entire System'
              },
              {
                id: 'toggle-instruments-recording',
                title: 'Toggle Instruments Recording',
                separator: true
              },

              { id: 'services-settings', title: 'Services Settings...' }
            ]
          },
          { id: 'privacy-policy', title: 'Privacy Policy', separator: true },
          { id: 'hide-arc', title: 'Hide Arc', shortcut: '⌘H' },
          {
            id: 'hide-other-windows',
            title: 'Hide Other Windows',
            shortcut: '⌥⌘H'
          },
          {
            id: 'show-all',
            title: 'Show All',
            disabled: true,
            separator: true
          },
          { id: 'sign-out', title: 'Sign Out', separator: true },
          { id: 'quit-arc', title: 'Quit Arc', shortcut: '⌘Q' }
        ]
      },
      {
        id: 'file',
        label: 'File',
        menu: [
          { id: 'new-tab', title: 'New Tab...', shortcut: '⌘T' },
          { id: 'new-window', title: 'New Window', shortcut: '⌘N' },
          { id: 'blank-window', title: 'Blank Window', shortcut: '⇧⌘N' },
          {
            id: 'new-incognito-window',
            title: 'New Incognito Window',
            shortcut: '⌥⌘N'
          },
          {
            id: 'new-little-arc-window',
            title: 'New Little Arc Window',
            shortcut: '⌥⌘N'
          },
          {
            id: 'restore-last-closed-tab',
            title: 'Restore Last Closed Tab',
            shortcut: '⇧⌘T',
            disabled: true,
            separator: true
          },
          {
            id: 'open-command-bar',
            title: 'Open Command Bar',
            shortcut: '⌘L',
            separator: true
          },
          {
            id: 'new-easel',
            title: 'New Easel',
            shortcut: '⌃⌘E',
            separator: true
          },
          { id: 'close-window', title: 'Close Window', shortcut: '⇧⌘W' },
          {
            id: 'archive-tab',
            title: 'Archive Tab',
            shortcut: '⌘W',
            separator: true
          },
          { id: 'share', title: 'Share...', disabled: true },
          { id: 'capture', title: 'Capture...', shortcut: '⌃⌘2' },
          { id: 'capture-full-page', title: 'Capture Full Page' },
          { id: 'capture-portrait-mode', title: 'Capture in Portrait Mode' },
          { id: 'save-page-as', title: 'Save Page As', shortcut: '⌃⇧⌘S' },
          { id: 'print', title: 'Print', shortcut: '⌘P' }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          { id: 'undo', title: 'Undo', shortcut: '⌘Z' },
          { id: 'redo', title: 'Redo', shortcut: '⇧⌘Z', separator: true },
          { id: 'cut', title: 'Cut', shortcut: '⌘X' },
          { id: 'copy', title: 'Copy', shortcut: '⌘C' },
          { id: 'copy-url', title: 'Copy URL', shortcut: '⌥⌘C' },
          {
            id: 'copy-url-as-markdown',
            title: 'Copy URL as Markdown',
            shortcut: '⌃⇧⌘C'
          },
          {
            id: 'copy-url-as-quote',
            title: 'Copy URL as Quote',
            shortcut: '⌃⌘C',
            disabled: true
          },
          { id: 'paste', title: 'Paste', shortcut: '⌘V' },
          {
            id: 'paste-and-match-style',
            title: 'Paste and Match Style',
            shortcut: '⌥⇧⌘V'
          },
          { id: 'delete', title: 'Delete' },
          {
            id: 'select-all',
            title: 'Select All',
            shortcut: '⌘A',
            separator: true
          },
          {
            id: 'find',
            title: 'Find',
            subMenu: [
              { id: 'find', title: 'Find...', shortcut: '⌘F' },
              {
                id: 'find-and-replace',
                title: 'Find and Replace',
                shortcut: '⌥⌘F',
                disabled: true
              },
              {
                id: 'find-next',
                title: 'Find Next',
                shortcut: '⌘G',
                disabled: true
              },
              {
                id: 'find-previous',
                title: 'Find Previous',
                shortcut: '⇧⌘G',
                disabled: true
              },
              {
                id: 'use-selection-to-find',
                title: 'Use Selection to Find',
                disabled: true
              },
              {
                id: 'jump-to-selection',
                title: 'Jump to Selection',
                shortcut: '⌘J',
                disabled: true
              }
            ]
          },
          {
            id: 'spelling-and-grammar',
            title: 'Spelling and Grammar',
            subMenu: [
              {
                id: 'show-spelling-and-grammar',
                title: 'Show Spelling and Grammar',
                shortcut: '⌃⌘Å'
              },
              {
                id: 'check-document-now',
                title: 'Check Document Now',
                shortcut: '⌘Å',
                separator: true
              },
              {
                id: 'check-spelling-while-typing',
                title: 'Check Spelling While Typing',
                checked: true
              },
              {
                id: 'check-grammar-with-spelling',
                title: 'Check Grammar With Spelling',
                disabled: true
              },
              {
                id: 'correct-spelling-automatically',
                title: 'Correct Spelling Automatically',
                disabled: true
              }
            ]
          },
          {
            id: 'substitutions',
            title: 'Substitutions',
            subMenu: [
              {
                id: 'show-substitutions',
                title: 'Show Substitutions',
                separator: true
              },
              {
                id: 'smart-copy-paste',
                title: 'Smart Copy/Paste',
                disabled: true
              },
              { id: 'smart-quotes', title: 'Smart Quotes', disabled: true },
              { id: 'smart-dashes', title: 'Smart Dashes', disabled: true },
              { id: 'smart-links', title: 'Smart Links', disabled: true },
              { id: 'data-detectors', title: 'Data Detectors', disabled: true },
              {
                id: 'text-replacement',
                title: 'Text Replacement',
                checked: true
              }
            ]
          },
          {
            id: 'transformations',
            title: 'Transformations',
            subMenu: [
              {
                id: 'make-upper-case',
                title: 'Make Upper Case',
                disabled: true
              },
              {
                id: 'make-lower-case',
                title: 'Make Lower Case',
                disabled: true
              },
              { id: 'capitalize', title: 'Capitalize', disabled: true }
            ]
          },
          {
            id: 'speech',
            title: 'Speech',
            subMenu: [
              { id: 'start-speaking', title: 'Start Speaking' },
              { id: 'stop-speaking', title: 'Stop Speaking', disabled: true }
            ]
          },
          {
            id: 'format',
            title: 'Format',
            subMenu: [
              {
                id: 'format',
                title: 'Format',
                subMenu: [
                  { id: 'bold', title: 'Bold', shortcut: '⌘B', disabled: true },
                  {
                    id: 'italic',
                    title: 'Italic',
                    shortcut: '⌘I',
                    disabled: true
                  },
                  { id: 'underline', title: 'Underline', shortcut: '⌘U' }
                ]
              }
            ],
            separator: true
          },
          {
            id: 'autofill',
            title: 'AutoFill',
            subMenu: [
              { id: 'contact', title: 'Contact...', disabled: true },
              { id: 'passwords', title: 'Passwords...', disabled: true }
            ]
          },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        menu: [
          {
            id: 'appearance',
            title: 'Appearance',
            subMenu: [
              { id: 'automatic', title: 'Automatic', checked: true },
              { id: 'light', title: 'Light' },
              { id: 'dark', title: 'Dark' }
            ],
            separator: true
          },
          { id: 'hide-sidebar', title: 'Hide Sidebar', shortcut: '⌘S' },
          { id: 'show-toolbar', title: 'Show Toolbar', shortcut: '⇧⌘D' },
          {
            id: 'collapse-pinned-tabs',
            title: 'Collapse Pinned Tabs',
            disabled: true,
            separator: true
          },
          {
            id: 'stop-loading',
            title: 'Stop Loading',
            shortcut: '⌘.',
            disabled: true
          },
          {
            id: 'force-refresh',
            title: 'Force Refresh the Page',
            shortcut: '⌘⇧R'
          },
          { id: 'clear-cookies-refresh', title: 'Clear Cookies and Refresh' },
          {
            id: 'clear-cache-refresh',
            title: 'Clear Cache and Refresh',
            separator: true
          },
          { id: 'add-split-view', title: 'Add Split View', shortcut: '⌃⌘+' },
          {
            id: 'close-split-pane',
            title: 'Close this Split Pane',
            shortcut: '⌃⌘-',
            disabled: true
          },
          {
            id: 'separate-page-split-view',
            title: 'Separate Page from Split View',
            disabled: true
          },
          {
            id: 'expand-current-split',
            title: 'Expand Current Split',
            disabled: true,
            separator: true
          },
          {
            id: 'zoom-actual-size',
            title: 'Zoom to Actual Size',
            shortcut: '⌘0'
          },
          { id: 'zoom-in', title: 'Zoom In', shortcut: '⌘+' },
          {
            id: 'zoom-out',
            title: 'Zoom Out',
            shortcut: '⌘-',
            separator: true
          },
          { id: 'cast', title: 'Cast', separator: true },
          {
            id: 'developer',
            title: 'Developer',
            subMenu: [
              { id: 'view-source', title: 'View Source', shortcut: '⌥⌘U' },
              {
                id: 'developer-tools',
                title: 'Developer Tools',
                shortcut: '⌥⌘I'
              },
              {
                id: 'inspect-elements',
                title: 'Inspect Elements',
                shortcut: '⌥⌘C'
              },
              {
                id: 'javascript-console',
                title: 'JavaScript Console',
                shortcut: '⌥⌘J'
              },
              { id: 'network-inspector', title: 'Network Inspector' },
              {
                id: 'allow-javascript-apple-events',
                title: 'Allow JavaScript from Apple Events'
              },
              {
                id: 'turn-on-developer-mode',
                title: 'Turn on Developer Mode for this site',
                shortcut: '⌥⇧⌘D'
              }
            ],
            separator: true
          },
          {
            id: 'enter-exit-reader-mode',
            title: 'Enter/Exit Reader Mode (beta)',
            shortcut: '⌥⌘R',
            disabled: true
          },
          {
            id: 'enter-full-screen',
            title: 'Enter Full Screen',
            shortcut: '⌃⌘F'
          }
        ]
      },
      {
        id: 'spaces',
        label: 'Spaces',
        checklist: true,
        menu: [
          { id: 'new-space', title: 'New Space...' },
          { id: 'edit-theme', title: 'Edit Theme...' },
          { id: 'rename-space', title: 'Rename Space', separator: true },
          { id: 'next-space', title: 'Next Space', shortcut: '⌃⌘→' },
          {
            id: 'previous-space',
            title: 'Previous Space',
            shortcut: '⌃⌘←',
            separator: true
          },
          {
            id: '🤓 private-space',
            title: 'Privat',
            shortcut: '⌃1',
            checked: true
          },
          {
            id: '👨‍💻 work-space',
            title: 'Work',
            shortcut: '⌃2',
            separator: true
          },
          { id: 'manage-spaces', title: 'Manage Spaces...' }
        ]
      },
      {
        id: 'tabs',
        label: 'Tabs',
        menu: [
          { id: 'new-tab', title: 'New Tab...', shortcut: '⌘T' },
          { id: 'pin-tab', title: 'Pin Tab', shortcut: '⌘D' },
          { id: 'new-folder', title: 'New Folder...', separator: true },
          { id: 'next-tab', title: 'Next Tab', shortcut: '⌃⇧⌘▼' },
          { id: 'previous-tab', title: 'Previous Tab', shortcut: '⌃⇧⌘▲' },
          { id: 'reveal-tab', title: 'Reveal Tab in Sidebar', separator: true },
          { id: 'clear-today', title: 'Clear Today', shortcut: '⌃⇧⌘K' },
          { id: 'reset-tabs', title: 'Reset all tabs in this Space' }
        ]
      },
      {
        id: 'archive',
        label: 'Archive',
        menu: [
          { id: 'go-back', title: 'Go Back', shortcut: '⌘Ö', disabled: true },
          {
            id: 'go-forward',
            title: 'Go Forward',
            shortcut: '⌘Ä',
            disabled: true,
            separator: true
          },
          { id: 'view-history', title: 'View History', shortcut: '⌘Y' },
          { id: 'view-archive', title: 'View Archive...' },
          { id: 'clear-archive', title: 'Clear Archive' }
        ]
      },
      {
        id: 'extensions',
        label: 'Extensions',
        menu: [
          { id: '1password', title: '1Password – Password Manager' },
          {
            id: 'adobe-acrobat',
            title: 'Adobe Acrobat: PDF edit, convert, sign tools'
          },
          {
            id: 'browsing-protection',
            title: 'Browsing Protection by F-Secure'
          },
          { id: 'fontanello', title: 'Fontanello' },
          { id: 'google-docs-offline', title: 'Google Docs Offline' },
          { id: 'json-formatter', title: 'JSON Formatter' },
          {
            id: 'le-git-graph',
            title: 'Le Git Graph - Commits Graph for GitHub'
          },
          { id: 'metamask', title: 'MetaMask' },
          { id: 'phantom', title: 'Phantom' },
          {
            id: 'picture-in-picture',
            title: 'Picture-in-Picture Extension (by Google)'
          },
          { id: 'redux-devtools', title: 'Redux DevTools' },
          { id: 'ublock-origin', title: 'uBlock Origin', separator: true },
          { id: 'add-extension', title: 'Add Extension...' },
          { id: 'manage-extensions', title: 'Manage Extensions...' }
        ]
      },

      {
        id: 'window',
        label: 'Window',
        checklist: true,
        menu: [
          { id: 'stay-on-top', title: 'Stay On Top' },
          { id: 'minimize-window', title: 'Minimize Window', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom' },
          { id: 'tile-window-left', title: 'Tile Window to Left of Screen' },
          { id: 'tile-window-right', title: 'Tile Window to Right of Screen' },
          {
            id: 'replace-tiled-window',
            title: 'Replace Tiled Window',
            disabled: true,
            separator: true
          },
          {
            id: 'remove-window-from-set',
            title: 'Remove Window from Set',
            disabled: true,
            separator: true
          },
          { id: 'move-to-ipad', title: 'Move to Ipad', separator: true },
          { id: 'open-library', title: 'Open Library...', shortcut: '⌃⌘L' },
          { id: 'view-downloads', title: 'View Downloads...', shortcut: '⌃⌘J' },
          { id: 'view-easels', title: 'View Easels...' },
          { id: 'view-media', title: 'View Media...' },
          { id: 'view-boosts', title: 'View Boosts...', separator: true },
          {
            id: 'bring-all-to-front',
            title: 'Bring All to Front',
            separator: true
          },
          { id: 'localhost-3000', title: 'localhost:3000' },
          { id: 'rasmus-elmersson', title: 'Rasmus Elmersson', checked: true }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search', input: true },
          { id: 'getting-started', title: 'Getting Started' },
          {
            id: 'essential-keyboard-shortcuts',
            title: 'Essential Keyboard Shortcuts'
          },
          { id: 'contact-the-team', title: 'Contact the Team' },
          { id: 'visit-help-center', title: 'Visit Help Center' },
          { id: 'restore-data', title: 'Restore Data' },
          {
            id: 'export-arc-notes',
            title: 'Export Arc Notes',
            separator: true
          },
          {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subMenu: [
              {
                id: 'record-trace',
                title: 'Record Trace'
              },
              {
                id: 'open-task-manager',
                title: 'Open Task Manager',
                separator: true
              },
              {
                id: 'separator-1',
                title: '',
                separator: true
              },
              {
                id: 'reveal-arc-data',
                title: 'Reveal Arc Data'
              },
              {
                id: 'copy-arc-info',
                title: 'Copy Arc Info'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'outlook',
    title: 'Outlook',
    isOpen: false,
    isMinimized: false,
    img: Mail,
    miniImg: MiniMail,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'outlook',
        label: 'Outlook',
        menu: [
          { id: 'about-outlook', title: 'About Outlook', separator: true },
          { id: 'legacy-outlook', title: 'Legacy Outlook', separator: true },
          {
            id: 'settings',
            title: 'Settings...',
            shortcut: '⌘,',
            separator: true
          },
          { id: 'work-offline', title: 'Work Offline' },
          {
            id: 'turn-off-reminders',
            title: 'Turn Off Reminders',
            separator: true
          },
          {
            id: 'services',
            title: 'Services',
            subMenu: [
              { id: 'activity-monitor', title: 'Activity Monitor' },
              { id: 'allocations-leaks', title: 'Allocations & Leaks' },
              { id: 'file-activity', title: 'File Activity' },
              { id: 'system-trace', title: 'System Trace' },
              {
                id: 'time-profile-active-app',
                title: 'Time Profile Active Application'
              },
              {
                id: 'time-profile-app-under-mouse',
                title: 'Time Profile App Under Mouse'
              },
              {
                id: 'time-profile-entire-system',
                title: 'Time Profile Entire System'
              },
              {
                id: 'toggle-instruments-recording',
                title: 'Toggle Instruments Recording',
                separator: true
              },

              { id: 'services-settings', title: 'Services Settings...' }
            ],
            separator: true
          },
          { id: 'hide-outlook', title: 'Hide Outlook', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          {
            id: 'show-all',
            title: 'Show All',
            disabled: true,
            separator: true
          },
          { id: 'quit-outlook', title: 'Quit Outlook', shortcut: '⌘Q' }
        ]
      },
      {
        id: 'file',
        label: 'File',
        menu: [
          {
            id: 'new',
            title: 'New',
            subMenu: [
              {
                id: 'email',
                title: 'Email',
                shortcut: '⌘N',
                separator: true
              },
              {
                id: 'email-2',
                title: 'Email',
                shortcut: '⌥⌘N'
              },
              {
                id: 'event',
                title: 'Event'
              },
              {
                id: 'contact',
                title: 'Contact'
              },
              {
                id: 'contact-list',
                title: 'Contact List'
              },
              {
                id: 'email-from-template',
                title: 'Email from template',
                separator: true
              },
              {
                id: 'folder',
                title: 'Folder',
                shortcut: '⌃⌘N'
              },
              {
                id: 'folder-at-this-level',
                title: 'Folder At This Level',
                shortcut: '⌥⌘N',
                separator: true
              },

              {
                id: 'main-window',
                title: 'Main Window'
              }
            ]
          },
          {
            id: 'open',
            title: 'Open',
            subMenu: [
              {
                id: 'current-items',
                title: 'Current Items',
                shortcut: '⌘O',
                disabled: true
              },
              {
                id: 'shared-calendar',
                title: 'Shared Calendar...'
              },
              {
                id: 'shared-mailbox',
                title: 'Shared Mailbox...'
              },
              {
                id: 'on-my-mac',
                title: 'On My Mac...'
              }
            ]
          },
          { id: 'close', title: 'Close', shortcut: '⌘W', separator: true },
          { id: 'save', title: 'Save', shortcut: '⌘S', disabled: true },
          {
            id: 'save-as',
            title: 'Save As...',
            shortcut: '⇧⌘S',
            disabled: true
          },
          {
            id: 'save-as-template',
            title: 'Save As Template...',
            disabled: true,
            separator: true
          },
          {
            id: 'folder',
            title: 'Folder',
            subMenu: [
              {
                id: 'go-to-folder',
                title: 'Go to Folder...',
                shortcut: '⌥⌘G'
              },
              {
                id: 'remove-from-favourites',
                title: 'Remove from Favourites'
              }
            ],
            separator: true
          },
          { id: 'import', title: 'Import...', disabled: true },
          { id: 'export', title: 'Export...', disabled: true, separator: true },
          { id: 'page-setup', title: 'Page Setup...' },
          { id: 'print', title: 'Print...', shortcut: '⌘P' }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          {
            id: 'undo-send',
            title: 'Undo Send',
            shortcut: '⌥⌘⏎',
            disabled: true,
            separator: true
          },
          { id: 'undo', title: 'Undo', shortcut: '⌘Z', disabled: true },
          { id: 'redo', title: 'Redo', shortcut: '⇧⌘Z', disabled: true },
          { id: 'cut', title: 'Cut', shortcut: '⌘X', disabled: true },
          { id: 'copy', title: 'Copy', shortcut: '⌘C', disabled: true },
          { id: 'copy-formatting', title: 'Copy Formatting', disabled: true },
          { id: 'paste', title: 'Paste', shortcut: '⌘V', disabled: true },
          {
            id: 'paste-match-style',
            title: 'Paste and Match Style',
            shortcut: '⌥⇧⌘V',
            disabled: true
          },
          { id: 'paste-formatting', title: 'Paste Formatting', disabled: true },
          {
            id: 'clear-formatting',
            title: 'Clear Formatting',
            disabled: true,
            separator: true
          },
          {
            id: 'select-all',
            title: 'Select All',
            shortcut: '⌘A',
            disabled: true
          },
          {
            id: 'duplicate',
            title: 'Duplicate',
            disabled: true,
            separator: true
          },
          { id: 'delete', title: 'Delete', shortcut: '⌘⌫', disabled: true },
          {
            id: 'permanently-delete',
            title: 'Permanently Delete',
            shortcut: '⇧⌘⌫',
            disabled: true
          },
          {
            id: 'delete-all',
            title: 'Delete All',
            separator: true,
            disabled: true
          },
          {
            id: 'find',
            title: 'Find',
            subMenu: [
              {
                id: 'outlook-items-search',
                title: 'Outlook Items Search',
                shortcut: '⌥⌘F'
              },
              {
                id: 'advanced-search',
                title: 'Advanced Search...',
                shortcut: '⌥⇧⌘F',
                separator: true
              },
              {
                id: 'find',
                title: 'Find...',
                shortcut: '⌘F'
              },
              {
                id: 'find-next',
                title: 'Find Next',
                shortcut: '⌘G'
              },
              {
                id: 'find-previous',
                title: 'Find Previous',
                shortcut: '⇧⌘G'
              }
            ],
            separator: true
          },
          {
            id: 'spelling-grammar',
            title: 'Spelling and Grammar',
            subMenu: [
              {
                id: 'editor',
                title: 'Editor',
                shortcut: '⌥⌘Å',
                disabled: true
              },
              {
                id: 'reset-ignored-words',
                title: 'Reset Ignored Words and Grammar',
                disabled: true
              },
              {
                id: 'language',
                title: 'Language',
                subMenu: [],
                separator: true
              },
              {
                id: 'spelling-only',
                title: 'Spelling only',
                disabled: true
              },
              {
                id: 'spelling-and-grammar',
                title: 'Spelling and Grammar',
                disabled: true
              }
            ]
          },
          {
            id: 'check-accessibility',
            title: 'Check Accessibility...',
            disabled: true
          },
          {
            id: 'change-case',
            title: 'Change Case',
            shortcut: '⌥⇧⌘C',
            disabled: true,
            separator: true
          },
          {
            id: 'speech',
            title: 'Speech',
            subMenu: [
              {
                id: 'start-speaking',
                title: 'Start Speaking',
                disabled: true
              },
              {
                id: 'stop-speaking',
                title: 'Stop Speaking',
                disabled: true
              }
            ],
            separator: true
          },
          {
            id: 'autofill',
            title: 'AutoFill',
            subMenu: [
              {
                id: 'contact',
                title: 'Contact...'
              },
              {
                id: 'passwords',
                title: 'Passwords...'
              }
            ]
          },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        checklist: true,
        menu: [
          {
            id: 'previous',
            title: 'Previous',
            shortcut: '⌃⌥Ö',
            disabled: true
          },
          {
            id: 'next',
            title: 'Next',
            shortcut: '⌃⌥Ä',
            disabled: true,
            separator: true
          },
          { id: 'previous-pane', title: 'Previous Pane', shortcut: '⌃⇧Ö' },
          {
            id: 'next-pane',
            title: 'Next Pane',
            shortcut: '⌃⇧Ä',
            separator: true
          },
          {
            id: 'go-to',
            title: 'Go To',
            subMenu: [
              {
                id: 'mail',
                title: 'Mail',
                shortcut: '⌘1',
                checked: true
              },
              {
                id: 'calendar',
                title: 'Calendar',
                shortcut: '⌘2'
              },
              {
                id: 'people',
                title: 'People',
                shortcut: '⌘3'
              },
              {
                id: 'favourites',
                title: 'Favourites',
                shortcut: '⌘4'
              }
            ],
            separator: true
          },
          {
            id: 'sort-by',
            title: 'Sort By',
            subMenu: [
              {
                id: 'date',
                title: 'Date',
                checked: true
              },
              {
                id: 'from',
                title: 'From'
              },
              {
                id: 'size',
                title: 'Size'
              },
              {
                id: 'importance',
                title: 'Importance'
              },
              {
                id: 'subject',
                title: 'Subject'
              },
              {
                id: 'oldest-on-top',
                title: 'Oldest on Top',
                separator: true
              },
              {
                id: 'newest-on-top',
                title: 'Newest on Top',
                checked: true
              }
            ],
            separator: true
          },
          {
            id: 'filter-by',
            title: 'Filter By',
            subMenu: [
              {
                id: 'unread',
                title: 'Unread',
                shortcut: '⇧⌘O'
              },
              {
                id: 'flag',
                title: 'Flag',
                subMenu: []
              },
              {
                id: 'to-me',
                title: 'To Me'
              },
              {
                id: 'has-attachments',
                title: 'Has Attachments',
                shortcut: '⇧⌘A'
              },
              {
                id: 'mentions-me',
                title: 'Mentions Me'
              },
              {
                id: 'categories',
                title: 'Categories',
                subMenu: []
              }
            ]
          },
          {
            id: 'display-density',
            title: 'Display Density',
            subMenu: [
              {
                id: 'compact',
                title: 'Compact',
                checked: true
              },
              {
                id: 'cozy',
                title: 'Cozy'
              },
              {
                id: 'roomy',
                title: 'Roomy'
              }
            ]
          },
          {
            id: 'show-message-previews',
            title: 'Show Message Previews',
            checked: true
          },
          {
            id: 'show-sender-image',
            title: 'Show Sender Image',
            checked: true
          },
          {
            id: 'show-event-rsvp',
            title: 'Show Event RSVP',
            checked: true
          },
          {
            id: 'show-group-headers',
            title: 'Show Group Headers',
            checked: true
          },
          {
            id: 'show-as-conversations',
            title: 'Show as Conversations',
            checked: true
          },
          {
            id: 'turn-on-focused-inbox',
            title: 'Turn on Focused Inbox',
            checked: true
          },
          {
            id: 'switch-to-other',
            title: 'Switch to Other',
            shortcut: '⇧⌃.'
          },
          {
            id: 'use-column-layout',
            title: 'Use Column Layout'
          },
          {
            id: 'reading-pane',
            title: 'Reading Pane',
            subMenu: [
              {
                id: 'right',
                title: 'Right',
                shortcut: "⌘'",
                checked: true
              },
              {
                id: 'below',
                title: 'Below',
                shortcut: "⇧⌘'"
              },
              {
                id: 'hidden',
                title: 'Hidden',
                shortcut: "⌥⌘'"
              }
            ]
          },
          {
            id: 'customise-toolbar',
            title: 'Customise Toolbar...'
          },
          {
            id: 'sidebar',
            title: 'Sidebar'
          },
          {
            id: 'task-pane',
            title: 'Task Pane'
          },
          {
            id: 'enter-full-screen',
            title: 'Enter Full Screen',
            shortcut: '⌃⌘F'
          }
        ]
      },
      {
        id: 'messages',
        label: 'Messages',
        menu: [
          {
            id: 'react',
            title: 'React',
            shortcut: '⌃⇧R',
            disabled: true
          },
          {
            id: 'reply',
            title: 'Reply',
            shortcut: '⌘R',
            disabled: true
          },
          {
            id: 'reply-all',
            title: 'Reply All',
            shortcut: '⇧⌘R',
            disabled: true
          },
          {
            id: 'forward',
            title: 'Forward',
            shortcut: '⌘J',
            disabled: true
          },
          {
            id: 'forward-as-attachment',
            title: 'Forward as Attachment',
            shortcut: '⌃⇧⌘J',
            disabled: true,
            separator: true
          },
          {
            id: 'create',
            title: 'Create',
            subMenu: [],
            disabled: true,
            separator: true
          },
          {
            id: 'toggle-unread',
            title: 'Toggle Unread',
            disabled: true
          },
          {
            id: 'mark-as-read',
            title: 'Mark as Read',
            shortcut: '⌘T',
            disabled: true
          },
          {
            id: 'mark-as-unread',
            title: 'Mark as Unread',
            shortcut: '⇧⌘T',
            disabled: true
          },
          {
            id: 'mark-all-as-read',
            title: 'Mark All as Read',
            shortcut: '⌥⇧⌘T',
            separator: true
          },
          {
            id: 'snooze',
            title: 'Snooze',
            subMenu: [],
            disabled: true,
            separator: true
          },
          {
            id: 'attachments',
            title: 'Attachments',
            subMenu: [],
            disabled: true
          },
          {
            id: 'add-sender-to-contacts',
            title: 'Add Sender to Contacts',
            disabled: true,
            separator: true
          },
          {
            id: 'move-to-other',
            title: 'Move to Other',
            shortcut: '⌥⇧⌘O',
            disabled: true
          },
          {
            id: 'always-move-to-other',
            title: 'Always Move to Other',
            shortcut: '⌥⇧⌘O',
            disabled: true,
            separator: true
          },
          {
            id: 'categorise',
            title: 'Categorise',
            subMenu: [],
            disabled: true,
            separator: true
          },
          {
            id: 'report',
            title: 'Report',
            subMenu: [
              {
                id: 'report-junk',
                title: 'Report Junk',
                shortcut: '⇧⌘J'
              },
              {
                id: 'report-phishing',
                title: 'Report Phishing',
                disabled: true
              }
            ]
          },
          {
            id: 'block',
            title: 'Block',
            disabled: true,
            separator: true
          },
          {
            id: 'archive',
            title: 'Archive',
            shortcut: '⌘E',
            disabled: true
          },
          {
            id: 'retention',
            title: 'Retention',
            subMenu: [],
            disabled: true
          },
          {
            id: 'move',
            title: 'Move',
            subMenu: [],
            disabled: true
          },
          {
            id: 'rules',
            title: 'Rules',
            subMenu: [{ id: 'edit-rules', title: 'Edit Rules...' }],
            disabled: false
          }
        ]
      },
      {
        id: 'format',
        label: 'Format',
        menu: [
          {
            id: 'font',
            title: 'Font...',
            shortcut: '⌘D',
            disabled: true,
            separator: true
          },
          {
            id: 'increase-font-size',
            title: 'Increase Font Size',
            shortcut: '⌘+',
            disabled: true
          },
          {
            id: 'decrease-font-size',
            title: 'Decrease Font Size',
            shortcut: '⌘-',
            disabled: true,
            separator: true
          },
          {
            id: 'alignment',
            title: 'Alignment',
            subMenu: [
              {
                id: 'left',
                title: 'Left',
                shortcut: '⇧⌘Ö',
                disabled: true
              },
              {
                id: 'centred',
                title: 'Centred',
                shortcut: '⌘*',
                disabled: true
              },
              {
                id: 'right',
                title: 'Right',
                shortcut: '⇧⌘Ä',
                disabled: true
              },
              {
                id: 'justified',
                title: 'Justified',
                disabled: true
              }
            ],
            separator: true
          },
          { id: 'numbered-list', title: 'Numbered List', disabled: true },
          {
            id: 'bulleted-list',
            title: 'Bulleted List',
            disabled: true,
            separator: true
          },
          {
            id: 'increase-indent',
            title: 'Increase Indent',
            shortcut: '⌘Ä',
            disabled: true
          },
          {
            id: 'decrease-indent',
            title: 'Decrease Indent',
            shortcut: '⌘Ö',
            disabled: true,
            separator: true
          },
          {
            id: 'insert-table',
            title: 'Insert Table...',
            disabled: true,
            separator: true
          },
          {
            id: 'link',
            title: 'Link...',
            shortcut: '⌘K',
            disabled: true,
            separator: true
          },
          {
            id: 'edit-alt-text',
            title: 'Edit Alt Text...',
            shortcut: '⇧⌘2',
            disabled: true,
            separator: true
          },
          {
            id: 'insert-picture',
            title: 'Insert Picture...',
            shortcut: '⇧⌘1',
            disabled: true
          },
          {
            id: 'format-picture',
            title: 'Format Picture...',
            disabled: true,
            separator: true
          },
          { id: 'zoom', title: 'Zoom', shortcut: '⌥⌘Z', disabled: true }
        ]
      },
      {
        id: 'profiles',
        label: 'Profiles',
        checklist: true,
        menu: [
          {
            id: 'all-accounts',
            title: 'All Accounts',
            checked: true,
            separator: true
          },
          { id: 'create-profile', title: 'Create Profile' },
          { id: 'manage-profiles', title: 'Manage Profiles' }
        ]
      },
      {
        id: 'tools',
        label: 'Tools',
        menu: [
          { id: 'sync', title: 'Sync', shortcut: '⌥⌘K', separator: true },
          {
            id: 'automatic-replies',
            title: 'Automatic Replies...',
            separator: true
          },
          { id: 'rules', title: 'Rules...' },
          {
            id: 'junk-email-preferences',
            title: 'Junk Email Preferences',
            separator: true
          },
          { id: 'accounts', title: 'Accounts...' },
          { id: 'get-add-ins', title: 'Get Add-ins', separator: true },
          {
            id: 'keyboard-shortcuts',
            title: 'Keyboard Shortcuts',
            shortcut: '⌘.'
          }
        ]
      },
      {
        id: 'window',
        label: 'Window',
        checklist: true,
        menu: [
          { id: 'minimise', title: 'Minimise', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom' },
          { id: 'tile-window-left', title: 'Tile Window to Left of Screen' },
          { id: 'tile-window-right', title: 'Tile Window to Right of Screen' },
          {
            id: 'replace-tiled-window',
            title: 'Replace Tiled Window',
            disabled: true
          },
          {
            id: 'enter-full-screen',
            title: 'Enter Full Screen',
            shortcut: '⌃⌘F',
            separator: true
          },
          {
            id: 'remove-window-from-set',
            title: 'Remove Window from Set',
            disabled: true,
            separator: true
          },
          {
            id: 'reminders',
            title: 'Reminders',
            shortcut: '⌘9',
            separator: true
          },
          {
            id: 'media-browser',
            title: 'Media Browser',
            subMenu: [
              {
                id: 'photo-browser',
                title: 'Photo Browser'
              },
              {
                id: 'audio-browser',
                title: 'Audio Browser'
              },
              {
                id: 'film-browser',
                title: 'Film Browser'
              }
            ],
            separator: true
          },
          { id: 'calendar', title: 'Calendar', checked: true }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search', input: true },
          { id: 'outlook-help', title: 'Outlook Help' },
          { id: 'contact-support', title: 'Contact Support' },
          {
            id: 'feedback',
            title: 'Feedback',
            subMenu: [
              {
                id: 'give-feedback',
                title: 'Give Feedback'
              },
              {
                id: 'suggest-feature',
                title: 'Suggest a Feature'
              },
              {
                id: 'report-problem',
                title: 'Report a Problem'
              }
            ]
          },
          {
            id: 'collect-diagnostics',
            title: 'Collect Diagnostics',
            separator: true
          },
          { id: 'whats-new', title: "What's New" },
          {
            id: 'revert-to-legacy-outlook',
            title: 'Revert to Legacy Outlook',
            separator: true
          },
          { id: 'clear-application-data', title: 'Clear Application Data' }
        ]
      }
    ]
  },
  {
    id: 'iterm2',
    title: 'Iterm2',
    isOpen: false,
    isMinimized: false,
    img: Iterm2,
    miniImg: MiniIterm2,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'main-menu',
        label: 'iTerm2',
        menu: [
          { id: 'about-iterm2', title: 'About iTerm2' },
          {
            id: 'show-tip-of-the-day',
            title: 'Show Tip of the Day',
            separator: true
          },
          {
            id: 'check-for-updates',
            title: 'Check For Updates...',
            separator: true
          },
          { id: 'toggle-debug-logging', title: 'Toggle Debug Logging' },
          { id: 'copy-performance-stats', title: 'Copy Performance Stats' },
          {
            id: 'capture-gpu-frame',
            title: 'Capture GPU Frame',
            disabled: true,
            separator: true
          },
          {
            id: 'settings',
            title: 'Settings...',
            shortcut: '⌘,',
            separator: true
          },
          {
            id: 'services',
            title: 'Services',
            subMenu: [
              {
                id: 'activity-monitor',
                title: 'Activity Monitor'
              },
              {
                id: 'allocations-leaks',
                title: 'Allocations & Leaks'
              },
              {
                id: 'file-activity',
                title: 'File Activity'
              },
              {
                id: 'system-trace',
                title: 'System Trace'
              },
              {
                id: 'time-profile-active-app',
                title: 'Time Profile Active Application'
              },
              {
                id: 'time-profile-app-under-mouse',
                title: 'Time Profile App Under Mouse'
              },
              {
                id: 'time-profile-entire-system',
                title: 'Time Profile Entire System'
              },
              {
                id: 'toggle-instruments-recording',
                title: 'Toggle Instruments Recording'
              },
              {
                id: 'services-settings',
                title: 'Services Settings...'
              }
            ],
            separator: true
          },
          { id: 'hide-iterm2', title: 'Hide iTerm2', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          {
            id: 'show-all',
            title: 'Show All',
            disabled: true,
            separator: true
          },
          {
            id: 'secure-keyboard-entry',
            title: 'Secure Keyboard Entry',
            separator: true
          },
          {
            id: 'make-iterm2-default-term',
            title: 'Make iTerm2 Default Term',
            disabled: true
          },
          {
            id: 'install-shell-integration',
            title: 'Install Shell Integration',
            separator: true
          },
          { id: 'quit-iterm2', title: 'Quit iTerm2', shortcut: '⌘Q' }
        ]
      },
      {
        id: 'shell',
        label: 'Shell',
        menu: [
          { id: 'new-window', title: 'New Window', shortcut: '⌘N' },
          {
            id: 'new-window-with-current-profile',
            title: 'New Window with Current Profile'
          },
          { id: 'new-tab', title: 'New Tab', shortcut: '⌘T' },
          {
            id: 'new-tab-with-current-profile',
            title: 'New Tab with Current Profile',
            separator: true
          },
          { id: 'duplicate-tab', title: 'Duplicate Tab', separator: true },
          {
            id: 'split-horizontally-with-current-profile',
            title: 'Split Horizontally with Current Profile'
          },
          {
            id: 'split-vertically-with-current-profile',
            title: 'Split Vertically with Current Profile'
          },
          { id: 'split-horizontally', title: 'Split Horizontally...' },
          {
            id: 'split-vertically',
            title: 'Split Vertically...',
            separator: true
          },
          {
            id: 'save-selected-text',
            title: 'Save Selected Text...',
            disabled: true,
            separator: true
          },
          { id: 'close', title: 'Close', shortcut: '⌘W' },
          { id: 'close-terminal-window', title: 'Close Terminal Window' },
          {
            id: 'close-all-panes-in-tab',
            title: 'Close All Panes in Tab',
            separator: true
          },
          {
            id: 'undo-close',
            title: 'Undo Close',
            disabled: true,
            separator: true
          },
          {
            id: 'broadcast-input',
            title: 'Broadcast Input',
            subMenu: [
              {
                id: 'send-input-current-session',
                title: 'Send Input to Current Session Only',
                shortcut: '⌥⌘I',
                checked: true
              },
              {
                id: 'broadcast-input-all-panes-tabs',
                title: 'Broadcast Input to All Panes in All Tabs',
                shortcut: '⌥⌘I'
              },
              {
                id: 'broadcast-input-all-panes-tab',
                title: 'Broadcast Input to All Panes in Current Tab',
                shortcut: '⇧⌥⌘I'
              },
              {
                id: 'toggle-broadcast-input-current-session',
                title: 'Toggle Broadcast Input to Current Session',
                shortcut: '⌃⌥⌘I',
                separator: true
              },
              {
                id: 'show-background-pattern',
                title: 'Show Background Pattern Indicator'
              }
            ],
            separator: true
          },
          {
            id: 'tmux',
            title: 'tmux',
            subMenu: [
              {
                id: 'detach',
                title: 'Detach',
                shortcut: '⌃⌥⌘D',
                disabled: true
              },
              {
                id: 'force-detach',
                title: 'Force Detach',
                shortcut: '⇧⌃⌥⌘D',
                disabled: true,
                separator: true
              },
              {
                id: 'new-tmux-window',
                title: 'New Tmux Window',
                shortcut: '⇧⌃⌥⌘N',
                disabled: true
              },
              {
                id: 'new-tmux-tab',
                title: 'New Tmux Tab',
                shortcut: '⇧⌃⌥⌘T',
                disabled: true,
                separator: true
              },
              {
                id: 'pause-pane',
                title: 'Pause Pane',
                shortcut: '⇧⌃⌥⌘P',
                disabled: true,
                separator: true
              },
              {
                id: 'dashboard',
                title: 'Dashboard',
                shortcut: '⇧⌃⌥⌘⏎'
              }
            ],
            separator: true
          },
          { id: 'page-setup', title: 'Page Setup...', shortcut: '⌘P' },
          {
            id: 'print',
            title: 'Print...',
            subMenu: [
              {
                id: 'screen',
                title: 'Screen',
                shortcut: '⌘P'
              },
              {
                id: 'selection',
                title: 'Selection',
                shortcut: '⌥⌘P',
                disabled: true
              },
              {
                id: 'buffer',
                title: 'Buffer',
                shortcut: '⇧⌥⌘P'
              }
            ]
          }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          {
            id: 'undo-close-session',
            title: 'Undo Close Session',
            shortcut: '⌘Z',
            disabled: true
          },
          {
            id: 'redo',
            title: 'Redo',
            shortcut: '⇧⌘Z',
            disabled: true,
            separator: true
          },
          { id: 'cut', title: 'Cut', shortcut: '⌘X', disabled: true },
          { id: 'copy', title: 'Copy', shortcut: '⌘C', disabled: true },
          {
            id: 'copy-with-control-sequences',
            title: 'Copy with Control Sequences',
            disabled: true
          },
          { id: 'copy-mode', title: 'Copy Mode' },
          { id: 'paste', title: 'Paste', shortcut: '⌘V' },
          {
            id: 'paste-special',
            title: 'Paste Special',
            subMenu: [
              {
                id: 'advanced-paste',
                title: 'Advanced Paste...',
                shortcut: '⌥⌘V'
              },
              {
                id: 'paste-selection',
                title: 'Paste Selection',
                shortcut: '⌃⌥⌘V',
                disabled: true
              },
              {
                id: 'paste-file-base64-encoded',
                title: 'Paste File Base64-Encoded',
                disabled: true,
                separator: true
              },
              {
                id: 'paste-slowly',
                title: 'Paste Slowly',
                separator: true
              },
              {
                id: 'paste-faster',
                title: 'Paste Faster'
              },
              {
                id: 'paste-slower',
                title: 'Paste Slower',
                separator: true
              },
              {
                id: 'warn-before-multi-line-paste',
                title: 'Warn Before Multi-Line Paste',
                checked: true
              },
              {
                id: 'prompt-to-convert-tabs-to-spaces',
                title: 'Prompt to Convert Tabs to Spaces when Pasting',
                checked: true
              },
              {
                id: 'limit-multi-line-paste-warning',
                title: 'Limit Multi-Line Paste Warning to Shell Prompt',
                checked: true
              },
              {
                id: 'warn-before-pasting-one-line-ending',
                title:
                  'Warn Before Pasting One Line Ending in a Newline at Shell Prompt',
                checked: true
              }
            ],
            separator: true
          },
          {
            id: 'snippets',
            title: 'Snippets',
            subMenu: []
          },
          { id: 'actions', title: 'Actions', subMenu: [], separator: true },
          {
            id: 'open-selection',
            title: 'Open Selection',
            shortcut: '⌘O',
            disabled: true
          },
          {
            id: 'jump-to-selection',
            title: 'Jump to Selection',
            shortcut: '⌘J',
            separator: true
          },
          { id: 'select-all', title: 'Select All', shortcut: '⌘A' },
          {
            id: 'selection-respects-soft-boundaries',
            title: 'Selection Respects Soft Boundaries'
          },
          {
            id: 'select-output-of-last-command',
            title: 'Select Output of Last Command',
            disabled: true
          },
          {
            id: 'select-current-command',
            title: 'Select Current Command',
            disabled: true,
            separator: true
          },
          {
            id: 'find',
            title: 'Find',
            subMenu: [
              {
                id: 'find',
                title: 'Find...',
                shortcut: '⌘F'
              },
              {
                id: 'find-next',
                title: 'Find Next',
                shortcut: '⌘G'
              },
              {
                id: 'find-previous',
                title: 'Find Previous',
                shortcut: '⇧⌘G'
              },
              {
                id: 'use-selection-for-find',
                title: 'Use Selection for Find',
                shortcut: '⌘E',
                disabled: true
              },
              {
                id: 'find-globally',
                title: 'Find Globally...',
                shortcut: '⇧⌘F',
                separator: true
              },
              {
                id: 'find-urls',
                title: 'Find URLs',
                shortcut: '⌥⌘U'
              }
            ],
            separator: true
          },
          {
            id: 'marks-and-annotations',
            title: 'Marks and Annotations',
            subMenu: [
              {
                id: 'set-mark',
                title: 'Set Mark',
                shortcut: '⇧⌘M'
              },
              {
                id: 'jump-to-mark',
                title: 'Jump to Mark',
                shortcut: '⌘J',
                disabled: true,
                separator: true
              },
              {
                id: 'next-mark',
                title: 'Next Mark',
                shortcut: '⇧⌘→'
              },
              {
                id: 'previous-mark',
                title: 'Previous Mark',
                shortcut: '⇧⌘←',
                separator: true
              },
              {
                id: 'add-annotation',
                title: 'Add Annotation at Cursor',
                shortcut: '⌥⌘M',
                separator: true
              },
              {
                id: 'next-annotation',
                title: 'Next Annotation',
                shortcut: '⌥⌘→'
              },
              {
                id: 'previous-annotation',
                title: 'Previous Annotation',
                shortcut: '⌥⌘←',
                separator: true
              },
              {
                id: 'alerts',
                title: 'Alerts',
                subMenu: [
                  {
                    id: 'alert-on-next-mark',
                    title: 'Alert on Next Mark',
                    shortcut: '⌥⌘A',
                    separator: true
                  },
                  {
                    id: 'show-modal-alert-box',
                    title: 'Show Modal Alert Box'
                  },
                  {
                    id: 'post-notification',
                    title: 'Post Notification',
                    checked: true
                  }
                ]
              }
            ],
            separator: true
          },
          { id: 'clear-buffer', title: 'Clear Buffer' },
          {
            id: 'clear-scrollback-buffer',
            title: 'Clear Scrollback Buffer',
            disabled: true
          },
          {
            id: 'clear-to-start-of-selection',
            title: 'Clear to Start of Selection',
            disabled: true
          },
          {
            id: 'clear-to-last-mark',
            title: 'Clear to Last Mark',
            disabled: true,
            separator: true
          },
          {
            id: 'autofill',
            title: 'AutoFill',
            subMenu: [
              {
                id: 'contact',
                title: 'Contact...'
              },
              {
                id: 'passwords',
                title: 'Passwords...'
              }
            ]
          },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        checklist: true,
        menu: [
          { id: 'show-tabs-in-fullscreen', title: 'Show Tabs in Fullscreen' },
          {
            id: 'toggle-full-screen',
            title: 'Toggle Full Screen',
            shortcut: '⌘F'
          },
          {
            id: 'use-transparency',
            title: 'Use Transparency',
            checked: true,
            separator: true
          },
          {
            id: 'zoom-in-on-selection',
            title: 'Zoom In on Selection',
            disabled: true
          },
          {
            id: 'zoom-out',
            title: 'Zoom Out',
            disabled: true,
            separator: true
          },
          {
            id: 'find-cursor',
            title: 'Find Cursor',
            shortcut: '⌘/',
            separator: true
          },
          { id: 'show-cursor-guide', title: 'Show Cursor Guide' },
          { id: 'show-timestamps', title: 'Show Timestamps' },
          { id: 'show-annotations', title: 'Show Annotations' },
          { id: 'auto-command-completion', title: 'Auto Command Completion' },
          { id: 'composer', title: 'Composer', separator: true },
          {
            id: 'open-quickly',
            title: 'Open Quickly',
            shortcut: '⌘O',
            separator: true
          },
          {
            id: 'maximize-active-pane',
            title: 'Maximize Active Pane',
            disabled: true,
            separator: true
          },
          { id: 'make-text-bigger', title: 'Make Text Bigger', shortcut: '⌘+' },
          {
            id: 'make-text-normal-size',
            title: 'Make Text Normal Size',
            shortcut: '⌘0'
          },
          {
            id: 'make-text-smaller',
            title: 'Make Text Smaller',
            shortcut: '⌘-'
          },
          {
            id: 'size-changes-update-profile',
            title: 'Size Changes Update Profile',
            separator: true
          },
          {
            id: 'start-instant-replay',
            title: 'Start Instant Replay',
            separator: true
          },
          { id: 'tab-color', title: 'Tab Color', subMenu: [] }
        ]
      },
      {
        id: 'session',
        label: 'Session',
        menu: [
          {
            id: 'edit-session',
            title: 'Edit Session...',
            shortcut: '⌘I',
            separator: true
          },
          { id: 'run-coprocess', title: 'Run Coprocess...' },
          {
            id: 'stop-coprocess',
            title: 'Stop Coprocess',
            disabled: true,
            separator: true
          },
          { id: 'restart-session', title: 'Restart Session', separator: true },
          { id: 'open-autocomplete', title: 'Open Autocomplete...' },
          {
            id: 'open-command-history',
            title: 'Open Command History...',
            disabled: true
          },
          {
            id: 'open-recent-directories',
            title: 'Open Recent Directories...'
          },
          {
            id: 'open-paste-history',
            title: 'Open Paste History...',
            separator: true
          },
          {
            id: 'triggers',
            title: 'Triggers',
            subMenu: [
              {
                id: 'add_trigger',
                title: 'Add Trigger...'
              },
              {
                id: 'edit_triggers',
                title: 'Edit Triggers'
              },
              {
                id: 'enable_triggers',
                title: 'Enable Triggers in Interactive Apps',
                checked: true,
                separator: true
              },
              {
                id: 'enable_all',
                title: 'Enable All',
                disabled: true
              },
              {
                id: 'disable_all',
                title: 'Disable All',
                disabled: true
              }
            ],
            separator: true
          },
          { id: 'reset', title: 'Reset' },
          {
            id: 'reset-character-set',
            title: 'Reset Character Set',
            disabled: true,
            separator: true
          },
          {
            id: 'log',
            title: 'Log',
            subMenu: [
              {
                id: 'log_to_file',
                title: 'Log to File',
                separator: true
              },
              {
                id: 'import_recording',
                title: 'Import Recording'
              },
              {
                id: 'export_recording',
                title: 'Export Recording',
                separator: true
              },
              {
                id: 'save_contents',
                title: 'Save Contents...'
              }
            ],
            separator: true
          },
          {
            id: 'terminal-state',
            title: 'Terminal State',
            subMenu: [
              {
                id: 'alternate_screen',
                title: 'Alternate Screen',
                separator: true
              },
              {
                id: 'focus_reporting',
                title: 'Focus Reporting'
              },
              {
                id: 'mouse_reporting',
                title: 'Mouse Reporting'
              },
              {
                id: 'paste_bracketing',
                title: 'Paste Bracketing',
                checked: true,
                separator: true
              },
              {
                id: 'application_cursor',
                title: 'Application Cursor',
                checked: true
              },
              {
                id: 'application_keypad',
                title: 'Application Keypad',
                separator: true
              },
              {
                id: 'standard_key_reporting_mode',
                title: 'Standard Key Reporting Mode',
                checked: true
              },
              {
                id: 'modify_other_keys_mode1',
                title: 'modifyOtherKeys Mode 1'
              },
              {
                id: 'modify_other_keys_mode2',
                title: 'modifyOtherKeys Mode 2'
              },
              {
                id: 'csi_u_mode',
                title: 'CSI u Mode'
              },
              {
                id: 'raw_key_reporting_mode',
                title: 'Raw Key Reporting Mode',
                separator: true
              },
              {
                id: 'reset',
                title: 'Reset'
              }
            ],
            separator: true
          },
          { id: 'bury-session', title: 'Bury Session' },
          { id: 'buried-sessions', title: 'Buried Sessions', disabled: true }
        ]
      },
      {
        id: 'scripts',
        label: 'Scripts',
        menu: [
          {
            id: 'manage',
            title: 'Manage',
            subMenu: [
              {
                id: 'new_python_script',
                title: 'New Python Script',
                separator: true
              },
              {
                id: 'open_python_repl',
                title: 'Open Python REPL',
                separator: true
              },
              {
                id: 'manage_dependencies',
                title: 'Manage Dependencies...'
              },
              {
                id: 'install_python_runtime',
                title: 'Install Python Runtime'
              },
              {
                id: 'reveal_scripts_in_finder',
                title: 'Reveal Scripts in Finder',
                separator: true
              },
              {
                id: 'import',
                title: 'Import...'
              },
              {
                id: 'export',
                title: 'Export...',
                separator: true
              },
              {
                id: 'console',
                title: 'Console',
                shortcut: '⌥⌘J'
              }
            ]
          }
        ]
      },
      {
        id: 'profiles',
        label: 'Profiles',
        menu: [
          {
            id: 'open-profiles',
            title: 'Open Profiles...',
            shortcut: '⌘O',
            separator: true
          },
          {
            id: 'options',
            title: 'Press Option for new Window',
            disabled: true,
            separator: true
          },
          { id: 'default', title: 'Default', separator: true },
          { id: 'open-all', title: 'Open All', separator: true }
        ]
      },
      {
        id: 'toolbelt',
        label: 'Toolbelt',
        checklist: true,
        menu: [
          { id: 'show-toolbelt', title: 'Show Toolbelt', shortcut: '⌘B' },
          {
            id: 'set-default-width',
            title: 'Set Default Width',
            disabled: true,
            separator: true
          },
          { id: 'actions', title: 'Actions' },
          { id: 'captured-output', title: 'Captured Output' },
          { id: 'command-history', title: 'Command History' },
          { id: 'jobs', title: 'Jobs' },
          { id: 'notes', title: 'Notes' },
          { id: 'paste-history', title: 'Paste History' },
          { id: 'profiles', title: 'Profiles', checked: true },
          { id: 'recent-directories', title: 'Recent Directories' },
          { id: 'snippets', title: 'Snippets' }
        ]
      },
      {
        id: 'window',
        label: 'Window',
        checklist: true,
        menu: [
          { id: 'minimize', title: 'Minimize', shortcut: '⌘M' },
          { id: 'minimize-all', title: 'Minimize All' },
          { id: 'zoom', title: 'Zoom' },
          {
            id: 'tile-window-to-left-of-screen',
            title: 'Tile Window to Left of Screen'
          },
          {
            id: 'tile-window-to-right-of-screen',
            title: 'Tile Window to Right of Screen'
          },
          {
            id: 'replace-tiled-window',
            title: 'Replace Tiled Window',
            disabled: true,
            separator: true
          },
          {
            id: 'remove-window-from-set',
            title: 'Remove Window from Set',
            disabled: true,
            separator: true
          },
          { id: 'move-to-ipad', title: 'Move to iPad' },
          { id: 'edit-tab-title', title: 'Edit Tab Title' },
          {
            id: 'edit-window-title',
            title: 'Edit Window Title',
            separator: true
          },
          {
            id: 'window-style',
            title: 'Window Style',
            subMenu: [
              {
                id: 'normal',
                title: 'Normal',
                separator: true
              },
              {
                id: 'full_screen',
                title: 'Full Screen'
              },
              {
                id: 'maximized',
                title: 'Maximized',
                separator: true
              },
              {
                id: 'no_title_bar',
                title: 'No Title Bar',
                separator: true
              },
              {
                id: 'full_width_bottom',
                title: 'Full-Width Bottom of Screen'
              },
              {
                id: 'full_width_top',
                title: 'Full-Width Top of Screen'
              },
              {
                id: 'full_height_left',
                title: 'Full-Height Left of Screen'
              },
              {
                id: 'full_height_right',
                title: 'Full-Height Right of Screen',
                separator: true
              },
              {
                id: 'bottom_of_screen',
                title: 'Bottom of Screen'
              },
              {
                id: 'top_of_screen',
                title: 'Top of Screen'
              },
              {
                id: 'left_of_screen',
                title: 'Left of Screen'
              },
              {
                id: 'right_of_screen',
                title: 'Right of Screen'
              }
            ],
            separator: true
          },
          { id: 'merge-all-windows', title: 'Merge All Windows' },
          {
            id: 'arrange-windows-horizontally',
            title: 'Arrange Windows Horizontally'
          },
          {
            id: 'arrange-split-panes-evenly',
            title: 'Arrange Split Panes Evenly'
          },
          {
            id: 'move-session-to-window',
            title: 'Move Session to Window',
            disabled: true,
            separator: true
          },
          {
            id: 'save-window-arrangement',
            title: 'Save Window Arrangement',
            shortcut: '⌘S'
          },
          {
            id: 'restore-window-arrangement',
            title: 'Restore Window Arrangement',
            subMenu: []
          },
          {
            id: 'restore-window-arrangement-as-tabs',
            title: 'Restore Window Arrangement as Tabs',
            subMenu: [],
            separator: true
          },
          {
            id: 'select-split-pane',
            title: 'Select Split Pane',
            subMenu: [
              {
                id: 'select_pane_above',
                title: 'Select Pane Above',
                disabled: true
              },
              {
                id: 'select_pane_below',
                title: 'Select Pane Below',
                disabled: true
              },
              {
                id: 'select_pane_left',
                title: 'Select Pane Left',
                disabled: true
              },
              {
                id: 'select_pane_right',
                title: 'Select Pane Right',
                disabled: true,
                separator: true
              },
              {
                id: 'next_pane',
                title: 'Next Pane'
              },
              {
                id: 'previous_pane',
                title: 'Previous Pane'
              }
            ]
          },
          {
            id: 'resize-split-pane',
            title: 'Resize Split Pane',
            subMenu: [
              {
                id: 'move_divider_up',
                title: 'Move Divider Up',
                disabled: true
              },
              {
                id: 'move_divider_down',
                title: 'Move Divider Down',
                disabled: true
              },
              {
                id: 'move_divider_left',
                title: 'Move Divider Left',
                disabled: true
              },
              {
                id: 'move_divider_right',
                title: 'Move Divider Right',
                disabled: true
              }
            ],
            separator: true
          },
          {
            id: 'resize-window',
            title: 'Resize Window',
            subMenu: [
              {
                id: 'decrease_height',
                title: 'Decrease Height'
              },
              {
                id: 'increase_height',
                title: 'Increase Height'
              },
              {
                id: 'decrease_width',
                title: 'Decrease Width'
              },
              {
                id: 'increase_width',
                title: 'Increase Width'
              }
            ],
            separator: true
          },
          { id: 'select-next-tab', title: 'Select Next Tab', shortcut: '⌘]' },
          {
            id: 'select-previous-tab',
            title: 'Select Previous Tab',
            shortcut: '⌘['
          },
          {
            id: 'select-tab',
            title: 'Select Tab',
            subMenu: [
              {
                id: 'home_directory',
                title: '~ (-zsh)'
              }
            ],
            separator: true
          },
          { id: 'move-tab-left', title: 'Move Tab Left', disabled: true },
          {
            id: 'move-tab-right',
            title: 'Move Tab Right',
            disabled: true,
            separator: true
          },
          {
            id: 'password-manager',
            title: 'Password Manager',
            separator: true
          },
          {
            id: 'pin-hotkey-window',
            title: 'Pin Hotkey Window',
            disabled: true,
            checked: true,
            separator: true
          },
          {
            id: 'bring-all-to-front',
            title: 'Bring All To Front',
            separator: true
          },
          { id: 'session-name', title: '[Session Name]', checked: true }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search', input: true },

          { id: 'iterm2-help', title: 'iTerm2 Help' },
          {
            id: 'copy-mode-shortcuts',
            title: 'Copy Mode Shortcuts',
            separator: true
          },
          {
            id: 'open-source-licenses',
            title: 'Open Source Licenses',
            separator: true
          },
          {
            id: 'gpu-renderer-availability',
            title: 'GPU Renderer Availability'
          }
        ]
      }
    ]
  },
  {
    id: 'visual_studio_code',
    title: 'Visual Studio Code',
    isOpen: false,
    isMinimized: false,
    img: VsCode,
    miniImg: MiniVsCode,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'code',
        label: 'Code',
        menu: [
          { id: 'about', title: 'About Visual Studio Code' },
          {
            id: 'downloading-update',
            title: 'Downloading Update...',
            separator: true
          },
          {
            id: 'settings',
            title: 'Settings...',
            subMenu: [
              {
                id: 'profile_default',
                title: 'Profile (Default)',
                subMenu: [
                  {
                    id: 'default',
                    title: 'Default',
                    checked: true,
                    separator: true
                  },
                  {
                    id: 'show_profile_contents',
                    title: 'Show Profile Contents',
                    separator: true
                  },
                  {
                    id: 'create_profile',
                    title: 'Create Profile...'
                  },
                  {
                    id: 'delete_profile',
                    title: 'Delete Profile...',
                    disabled: true,
                    separator: true
                  },
                  {
                    id: 'export_profile',
                    title: 'Export Profile...'
                  },
                  {
                    id: 'import_profile',
                    title: 'Import Profile...'
                  }
                ]
              },
              {
                id: 'settings',
                title: 'Settings ⌘,'
              },
              {
                id: 'extensions',
                title: 'Extensions',
                shortcut: '⇧⌘X'
              },
              {
                id: 'keyboard_shortcuts',
                title: 'Keyboard Shortcuts ⌘K ⌘S'
              },
              {
                id: 'configure_user_snippets',
                title: 'Configure User Snippets'
              },
              {
                id: 'user_tasks',
                title: 'User Tasks'
              },
              {
                id: 'theme',
                title: 'Theme',
                subMenu: [
                  {
                    id: 'color_theme',
                    title: 'Color Theme [⌘K ⌘T]'
                  },
                  {
                    id: 'file_icon_theme',
                    title: 'File Icon Theme'
                  },
                  {
                    id: 'product_icon_theme',
                    title: 'Product Icon Theme'
                  }
                ],
                separator: true
              },
              {
                id: 'backup_and_sync_settings',
                title: 'Backup and Sync Settings...',
                separator: true
              },
              {
                id: 'online_services_settings',
                title: 'Online Services Settings'
              }
            ],
            separator: true
          },
          {
            id: 'services',
            title: 'Services',
            subMenu: [
              {
                id: 'activity_monitor',
                title: 'Activity Monitor'
              },
              {
                id: 'allocations_leaks',
                title: 'Allocations & Leaks'
              },
              {
                id: 'file_activity',
                title: 'File Activity'
              },
              {
                id: 'system_trace',
                title: 'System Trace'
              },
              {
                id: 'time_profile_active_application',
                title: 'Time Profile Active Application'
              },
              {
                id: 'time_profile_app_under_mouse',
                title: 'Time Profile App Under Mouse'
              },
              {
                id: 'time_profile_entire_system',
                title: 'Time Profile Entire System'
              },
              {
                id: 'toggle_instruments_recording',
                title: 'Toggle Instruments Recording',
                separator: true
              },
              {
                id: 'services_settings',
                title: 'Services Settings...'
              }
            ],
            separator: true
          },
          { id: 'hide', title: 'Hide Visual Studio Code', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          {
            id: 'show-all',
            title: 'Show All',
            disabled: true,
            separator: true
          },
          { id: 'quit', title: 'Quit Visual Studio Code', shortcut: '⌘Q' }
        ]
      },
      {
        id: 'file',
        label: 'File',
        checklist: true,
        menu: [
          { id: 'new-text-file', title: 'New Text File', shortcut: '⌘N' },
          { id: 'new-file', title: 'New File...', shortcut: '⇧⌥⌘N' },
          {
            id: 'new-window',
            title: 'New Window',
            shortcut: '⇧⌘N',
            separator: true
          },
          { id: 'open', title: 'Open...', shortcut: '⌘O' },
          { id: 'open-folder', title: 'Open Folder...' },
          { id: 'open-workspace', title: 'Open Workspace from File...' },
          {
            id: 'open-recent',
            title: 'Open Recent',
            subMenu: [
              {
                id: 'reopen_closed_editor',
                title: 'Reopen Closed Editor',
                shortcut: '⌥T',
                disabled: true,
                separator: true
              },
              {
                id: 'recent_1',
                title: '~/Documents/Github/MartinServera/leveransappen-fe'
              },
              {
                id: 'recent_2',
                title: '~/Documents/Github/RAG-EXPERIMENT'
              },
              {
                id: 'recent_3',
                title: '~/Documents/Github/pdf-llm-chat'
              },
              {
                id: 'recent_4',
                title: '~/Documents/Github/notion-clone'
              },
              {
                id: 'recent_5',
                title: '~/Documents/Github/mail-client'
              },
              {
                id: 'recent_6',
                title: '~/Documents/Github/ollama-webui'
              },
              {
                id: 'recent_7',
                title: '~/Documents/Github/MacOS'
              },
              {
                id: 'recent_8',
                title: '~/Documents/Github/MailClient'
              },
              {
                id: 'recent_9',
                title: '~/Documents/mail-client'
              },
              {
                id: 'recent_10',
                title: '~/Documents/rag-experiment',
                separator: true
              },
              {
                id: 'file_1',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/navigation.tsx'
              },
              {
                id: 'file_2',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/components/Organisms/ArticleForm.tsx'
              },
              {
                id: 'file_3',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/components/Molecules/DescriptionField.tsx'
              },
              {
                id: 'file_4',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/routes/screens/inventory/warehouses.tsx'
              },
              {
                id: 'file_5',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/routes/screens/inventory/summary.tsx'
              },
              {
                id: 'file_6',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/routes/screens/inventory/search-article.tsx'
              },
              {
                id: 'file_7',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/routes/screens/inventory/article-list.tsx'
              },
              {
                id: 'file_8',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/routes/screens/inventory/add-article.tsx'
              },
              {
                id: 'file_9',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/routes/screens/inventory/inventory.tsx'
              },
              {
                id: 'file_10',
                title:
                  '~/Documents/Github/MartinServera/leveransappen-fe/src/navigation.types.ts',
                separator: true
              },
              {
                id: 'more',
                title: 'More...',
                separator: true
              },
              {
                id: 'clear_recently_opened',
                title: 'Clear Recently Opened...'
              }
            ],
            separator: true
          },
          { id: 'add-folder', title: 'Add Folder to Workspace...' },
          { id: 'save-workspace', title: 'Save Workspace As...' },
          { id: 'dublicate', title: 'Duplicate Workspace', separator: true },
          { id: 'save', title: 'Save', shortcut: '⌘S' },
          { id: 'save-as', title: 'Save As...', shortcut: '⌥⌘S' },
          {
            id: 'save-all',
            title: 'Save All',
            shortcut: '⌥⌘S',
            separator: true
          },
          {
            id: 'share',
            title: 'Share',
            subMenu: [
              {
                id: 'export_profile',
                title: 'Export Profile (Default)...'
              },
              {
                id: 'import_profile',
                title: 'Import Profile...'
              }
            ],
            separator: true
          },
          {
            id: 'auto-save',
            title: 'Auto Save',
            shortcut: '⌘S',
            checked: true,
            separator: true
          },
          { id: 'revert-file', title: 'Revert File' },
          { id: 'close-editor', title: 'Close Editor', shortcut: '⌘W' },
          { id: 'close-folder', title: 'Close Folder[⌘R F]' },
          { id: 'close-window', title: 'Close Window', shortcut: '⌥⌘W' }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          { id: 'undo', title: 'Undo', shortcut: '⌘Z' },
          { id: 'redo', title: 'Redo', shortcut: '⇧⌘Z', separator: true },
          { id: 'cut', title: 'Cut', shortcut: '⌘X' },
          { id: 'copy', title: 'Copy', shortcut: '⌘C' },
          { id: 'paste', title: 'Paste', shortcut: '⌘V', separator: true },
          { id: 'find', title: 'Find', shortcut: '⌘F' },
          { id: 'replace', title: 'Replace', shortcut: '⇧⌘F', separator: true },
          { id: 'find-in-files', title: 'Find in Files', shortcut: '⇧⌘F' },
          {
            id: 'replace-in-files',
            title: 'Replace in Files',
            shortcut: '⌥⇧⌘H',
            separator: true
          },
          {
            id: 'toggle-line-comment',
            title: 'Toggle Line Comment',
            shortcut: '⌘/'
          },
          {
            id: 'toggle-block-comment',
            title: 'Toggle Block Comment',
            shortcut: '⇧⌘A'
          },
          {
            id: 'emmet-expand-abbreviation',
            title: 'Emmet: Expand Abbreviation',
            separator: true
          },
          {
            id: 'autofill',
            title: 'AutoFill',
            subMenu: [
              {
                id: 'contact',
                title: 'Contact...'
              },
              {
                id: 'passwords',
                title: 'Passwords...'
              }
            ]
          },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'selection',
        label: 'Selection',
        menu: [
          { id: 'select-all', title: 'Select All', shortcut: '⌘A' },
          {
            id: 'expand-selection',
            title: 'Expand Selection',
            shortcut: '⇧⌘→'
          },
          {
            id: 'shrink-selection',
            title: 'Shrink Selection',
            shortcut: '⇧⌘←',
            separator: true
          },
          { id: 'copy-line-up', title: 'Copy Line Up', shortcut: '⇧⌥↑' },
          { id: 'copy-line-down', title: 'Copy Line Down', shortcut: '⇧⌥↓' },
          { id: 'move-line-up', title: 'Move Line Up', shortcut: '⌥↑' },
          { id: 'move-line-down', title: 'Move Line Down', shortcut: '⌥↓' },
          {
            id: 'duplicate-selection',
            title: 'Duplicate Selection',
            separator: true
          },
          {
            id: 'add-cursor-above',
            title: 'Add Cursor Above',
            shortcut: '⌥⌘↑'
          },
          {
            id: 'add-cursor-below',
            title: 'Add Cursor Below',
            shortcut: '⌥⌘↓'
          },
          {
            id: 'add-cursors-to-line-ends',
            title: 'Add Cursors to Line Ends',
            shortcut: '⇧⌘I'
          },
          {
            id: 'add-next-occurrence',
            title: 'Add Next Occurrence',
            shortcut: '⌘D'
          },
          {
            id: 'add-previous-occurrence',
            title: 'Add Previous Occurrence',
            shortcut: '⇧⌘D'
          },
          {
            id: 'select-all-occurrences',
            title: 'Select All Occurrences',
            shortcut: '⌘L',
            separator: true
          },
          {
            id: 'cmd-click-multi-cursor',
            title: 'Switch to Cmd+Click for Multi-Cursor'
          },
          { id: 'column-selection-mode', title: 'Column Selection Mode' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        menu: [
          {
            id: 'command-palette',
            title: 'Command Palette...',
            shortcut: '⇧⌘P'
          },
          {
            id: 'open-view',
            title: 'Open View...',
            separator: true
          },
          {
            id: 'appearance',
            title: 'Appearance',
            subMenu: [
              {
                id: 'fullScreen',
                title: 'Full Screen',
                shortcut: '⌃⌘F'
              },
              {
                id: 'zenMode',
                title: 'Zen Mode [⌘K Z]'
              },
              {
                id: 'centeredLayout',
                title: 'Centered Layout',
                separator: true
              },
              {
                id: 'primarySideBar',
                title: 'Primary Side Bar',
                shortcut: '⌘B'
              },
              {
                id: 'secondarySideBar',
                title: 'Secondary Side Bar',
                shortcut: '⌃⌘B'
              },
              {
                id: 'statusBar',
                title: 'Status Bar',
                checked: true
              },
              {
                id: 'panel',
                title: 'Panel',
                shortcut: '⇧⌘J',
                checked: true,
                separator: true
              },
              {
                id: 'movePrimarySideBarRight',
                title: 'Move Primary Side Bar Right'
              },
              {
                id: 'activityBarPosition',
                title: 'Activity Bar Position',
                subMenu: [
                  {
                    id: 'default',
                    title: 'Default',
                    checked: true
                  },
                  {
                    id: 'top',
                    title: 'Top'
                  },
                  {
                    id: 'bottom',
                    title: 'Bottom'
                  },
                  {
                    id: 'hidden',
                    title: 'Hidden'
                  }
                ]
              },
              {
                id: 'panelPosition',
                title: 'Panel Position',
                subMenu: [
                  {
                    id: 'bottom',
                    title: 'Bottom',
                    checked: true
                  },
                  {
                    id: 'right',
                    title: 'Right'
                  },
                  {
                    id: 'left',
                    title: 'Left'
                  }
                ]
              },
              {
                id: 'alignPanel',
                title: 'Align Panel',
                subMenu: [
                  {
                    id: 'center',
                    title: 'Center',
                    checked: true
                  },
                  {
                    id: 'justify',
                    title: 'Justify'
                  },
                  {
                    id: 'left',
                    title: 'Left'
                  },
                  {
                    id: 'right',
                    title: 'Right'
                  }
                ]
              },
              {
                id: 'tabBar',
                title: 'Tab Bar',
                subMenu: [
                  {
                    id: 'multipleTabs',
                    title: 'Multiple Tabs',
                    checked: true
                  },
                  {
                    id: 'singleTab',
                    title: 'Single Tab'
                  },
                  {
                    id: 'hidden',
                    title: 'Hidden'
                  }
                ]
              },
              {
                id: 'editorActionsPosition',
                title: 'Editor Actions Position',
                subMenu: [
                  {
                    id: 'tabBar',
                    title: 'Tab Bar',
                    checked: true
                  },
                  {
                    id: 'titleBar',
                    title: 'Title Bar'
                  },
                  {
                    id: 'hidden',
                    title: 'Hidden'
                  }
                ],
                separator: true
              },
              {
                id: 'minimap',
                title: 'Minimap',
                checked: true
              },
              {
                id: 'toggleBreadcrumbs',
                title: 'Toggle Breadcrumbs',
                checked: true
              },
              {
                id: 'stickyScroll',
                title: 'Sticky Scroll',
                checked: true
              },
              {
                id: 'renderWhitespace',
                title: 'Render Whitespace',
                checked: true
              },
              {
                id: 'renderControlCharacters',
                title: 'Render Control Characters',
                checked: true,
                separator: true
              },
              {
                id: 'zoomIn',
                title: 'Zoom In',
                shortcut: '⇧⌘O'
              },
              {
                id: 'zoomOut',
                title: 'Zoom Out',
                shortcut: '⌘-'
              },
              {
                id: 'resetZoom',
                title: 'Reset Zoom [⌘NumPad0]'
              }
            ]
          },
          {
            id: 'editor-layout',
            title: 'Editor Layout',
            subMenu: [
              {
                id: 'splitUp',
                title: 'Split Up [⌘K ^⌥⌘7]'
              },
              {
                id: 'splitDown',
                title: 'Split Down'
              },
              {
                id: 'splitLeft',
                title: 'Split Left'
              },
              {
                id: 'splitRight',
                title: 'Split Right',
                separator: true
              },
              {
                id: 'splitInGroup',
                title: 'Split in Group [⌘K ^⌥⌘7]',
                separator: true
              },
              {
                id: 'moveEditorIntoNewWindow',
                title: 'Move Editor into New Window'
              },
              {
                id: 'copyEditorIntoNewWindow',
                title: 'Copy Editor into New Window [⌘K O]',
                separator: true
              },
              {
                id: 'single',
                title: 'Single'
              },
              {
                id: 'twoColumns',
                title: 'Two Columns'
              },
              {
                id: 'threeColumns',
                title: 'Three Columns'
              },
              {
                id: 'twoRows',
                title: 'Two Rows'
              },
              {
                id: 'threeRows',
                title: 'Three Rows'
              },
              {
                id: 'grid2x2',
                title: 'Grid (2x2)'
              },
              {
                id: 'twoRowsRight',
                title: 'Two Rows Right'
              },
              {
                id: 'twoColumnsBottom',
                title: 'Two Columns Bottom',
                separator: true
              },
              {
                id: 'flipLayout',
                title: 'Flip Layout',
                shortcut: '⌥⇧0'
              }
            ],
            separator: true
          },
          { id: 'explorer', title: 'Explorer', shortcut: '⇧⌘E' },
          { id: 'search', title: 'Search', shortcut: '⇧⌘F' },
          { id: 'source-control', title: 'Source Control', shortcut: '⌃⇧G' },
          { id: 'run', title: 'Run', shortcut: '⌘D' },
          { id: 'extensions', title: 'Extensions', shortcut: '⇧⌘X' },
          { id: 'testing', title: 'Testing', separator: true },
          { id: 'problems', title: 'Problems', shortcut: '⇧⌘M' },
          { id: 'output', title: 'Output', shortcut: '⌃⇧U' },
          { id: 'debug-console', title: 'Debug Console', shortcut: '⌃⇧Y' },
          { id: 'terminal', title: 'Terminal [⌃⇧´]', separator: true },
          { id: 'word-wrap', title: 'Word Wrap', shortcut: '⌥Z' }
        ]
      },
      {
        id: 'go',
        label: 'Go',
        menu: [
          { id: 'back', title: 'Back', shortcut: '⌃-' },
          { id: 'forward', title: 'Forward', shortcut: '⌃+', disabled: true },
          {
            id: 'last-edit-location',
            title: 'Last Edit Location',
            shortcut: '⌃K ⌃Q',
            separator: true
          },
          { id: 'switch-editor', title: 'Switch Editor', subMenu: [] },
          {
            id: 'switch-group',
            title: 'Switch Group',
            subMenu: [
              {
                id: 'nextEditor',
                title: 'Next Editor',
                shortcut: '⌥⌘→'
              },
              {
                id: 'previousEditor',
                title: 'Previous Editor',
                shortcut: '⌥⌘←',
                separator: true
              },
              {
                id: 'nextUsedEditor',
                title: 'Next Used Editor'
              },
              {
                id: 'previousUsedEditor',
                title: 'Previous Used Editor',
                separator: true
              },
              {
                id: 'nextEditorInGroup',
                title: 'Next Editor in Group [⌘K ⌥→]'
              },
              {
                id: 'previousEditorInGroup',
                title: 'Previous Editor in Group [⌘K ⌥←]',
                separator: true
              },
              {
                id: 'nextUsedEditorInGroup',
                title: 'Next Used Editor in Group'
              },
              {
                id: 'previousUsedEditorInGroup',
                title: 'Previous Used Editor in Group'
              }
            ],
            separator: true
          },
          { id: 'go-to-file', title: 'Go to File...', shortcut: '⌘P' },
          {
            id: 'go-to-symbol-in-workspace',
            title: 'Go to Symbol in Workspace...',
            shortcut: '⌘T',
            separator: true
          },
          {
            id: 'go-to-symbol-in-editor',
            title: 'Go to Symbol in Editor...',
            shortcut: '⌥⌘O'
          },
          {
            id: 'go-to-definition',
            title: 'Go to Definition',
            shortcut: 'F12'
          },
          { id: 'go-to-declaration', title: 'Go to Declaration' },
          { id: 'go-to-type-definition', title: 'Go to Type Definition' },
          {
            id: 'go-to-implementations',
            title: 'Go to Implementations',
            shortcut: '⌘F12'
          },
          {
            id: 'go-to-references',
            title: 'Go to References',
            shortcut: '⇧⌘F12',
            separator: true
          },
          { id: 'go-to-line', title: 'Go to Line/Column...', shortcut: '⌃G' },
          {
            id: 'go-to-bracket',
            title: 'Go to Bracket',
            shortcut: '⌘]',
            separator: true
          },
          { id: 'next-problem', title: 'Next Problem', shortcut: 'F8' },
          {
            id: 'previous-problem',
            title: 'Previous Problem',
            shortcut: '⇧F8',
            separator: true
          },
          { id: 'next-change', title: 'Next Change', shortcut: '⌃F3' },
          { id: 'previous-change', title: 'Previous Change', shortcut: '⇧⌃F3' }
        ]
      },
      {
        id: 'run',
        label: 'Run',
        menu: [
          { id: 'start-debugging', title: 'Start Debugging', shortcut: 'F5' },
          {
            id: 'run-without-debugging',
            title: 'Run Without Debugging',
            shortcut: '⇧F5'
          },
          { id: 'stop-debugging', title: 'Stop Debugging', shortcut: '⇧⌘F5' },
          {
            id: 'restart-debugging',
            title: 'Restart Debugging',
            shortcut: '⇧⌘F5',
            disabled: true,
            separator: true
          },
          {
            id: 'open-configurations',
            title: 'Open Configurations',
            disabled: true
          },
          {
            id: 'add-configuration',
            title: 'Add Configuration...',
            separator: true
          },
          {
            id: 'step-over',
            title: 'Step Over',
            shortcut: 'F10',
            disabled: true
          },
          {
            id: 'step-into',
            title: 'Step Into',
            shortcut: 'F11',
            disabled: true
          },
          {
            id: 'step-out',
            title: 'Step Out',
            shortcut: '⇧F11',
            disabled: true
          },
          {
            id: 'continue',
            title: 'Continue',
            shortcut: 'F5',
            disabled: true,
            separator: true
          },
          {
            id: 'toggle-breakpoint',
            title: 'Toggle Breakpoint',
            shortcut: 'F9'
          },
          {
            id: 'new-breakpoint',
            title: 'New Breakpoint',
            subMenu: [
              {
                id: 'conditionalBreakpoint',
                title: 'Conditional Breakpoint...'
              },
              {
                id: 'editBreakpoint',
                title: 'Edit Breakpoint...'
              },
              {
                id: 'inlineBreakpoint',
                title: 'Inline Breakpoint',
                shortcut: '⇧F9'
              },
              {
                id: 'functionBreakpoint',
                title: 'Function Breakpoint...'
              },
              {
                id: 'logpoint',
                title: 'Logpoint...'
              },
              {
                id: 'triggeredBreakpoint',
                title: 'Triggered Breakpoint...'
              }
            ],
            separator: true
          },
          { id: 'enable-all-breakpoints', title: 'Enable All Breakpoints' },
          { id: 'disable-all-breakpoints', title: 'Disable All Breakpoints' },
          {
            id: 'remove-all-breakpoints',
            title: 'Remove All Breakpoints',
            separator: true
          },
          { id: 'install-debuggers', title: 'Install Additional Debuggers...' }
        ]
      },
      {
        id: 'terminal',
        label: 'Terminal',
        menu: [
          { id: 'new-terminal', title: 'New Terminal', shortcut: '⌃`' },
          {
            id: 'split-terminal',
            title: 'Split Terminal',
            shortcut: '⌥⌘',
            separator: true
          },
          { id: 'run-task', title: 'Run Task...' },
          { id: 'run-build-task', title: 'Run Build Task...', shortcut: '⌘B' },
          { id: 'run-active-file', title: 'Run Active File' },
          {
            id: 'run-selected-text',
            title: 'Run Selected Text',
            separator: true
          },
          {
            id: 'show-running-tasks',
            title: 'Show Running Tasks...',
            disabled: true
          },
          {
            id: 'restart-running-task',
            title: 'Restart Running Task...',
            disabled: true
          },
          {
            id: 'terminate-task',
            title: 'Terminate Task...',
            disabled: true,
            separator: true
          },
          { id: 'configure-tasks', title: 'Configure Tasks...' },
          {
            id: 'configure-default-build-task',
            title: 'Configure Default Build Task...'
          }
        ]
      },
      {
        id: 'window',
        label: 'Window',
        checklist: true,
        menu: [
          { id: 'minimize', title: 'Minimize', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom' },
          { id: 'tile-window-left', title: 'Tile Window to Left of Screen' },
          { id: 'tile-window-right', title: 'Tile Window to Right of Screen' },
          {
            id: 'replace-tiled-window',
            title: 'Replace Tiled Window',
            disabled: true,
            separator: true
          },
          {
            id: 'remove-window-from-set',
            title: 'Remove Window from Set',
            disabled: true,
            separator: true
          },
          { id: 'move-to-ipad', title: 'Move to iPad', separator: true },
          { id: 'switch-window', title: 'Switch Window...', separator: true },
          {
            id: 'bring-all-to-front',
            title: 'Bring All to Front',
            separator: true
          },
          { id: 'navigation-tsx', title: 'navigation.tsx', checked: true }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search', input: true },
          { id: 'welcome', title: 'Welcome' },
          {
            id: 'show-all-commands',
            title: 'Show All Commands',
            shortcut: '⇧⌘P'
          },
          { id: 'documentation', title: 'Documentation' },
          { id: 'editor-playground', title: 'Editor Playground' },
          {
            id: 'show-release-notes',
            title: 'Show Release Notes',
            separator: true
          },
          {
            id: 'keyboard-shortcuts',
            title: 'Keyboard Shortcuts Reference [⌘K ⌘R]'
          },
          { id: 'video-tutorials', title: 'Video Tutorials' },
          { id: 'tips-and-tricks', title: 'Tips and Tricks', separator: true },
          { id: 'join-us-on-youtube', title: 'Join Us on YouTube' },
          { id: 'search-feature-requests', title: 'Search Feature Requests' },
          { id: 'report-issue', title: 'Report Issue', separator: true },
          { id: 'view-license', title: 'View License' },
          {
            id: 'privacy-statement',
            title: 'Privacy Statement',
            separator: true
          },
          { id: 'toggle-developer-tools', title: 'Toggle Developer Tools' },
          { id: 'open-process-explorer', title: 'Open Process Explorer' }
        ]
      }
    ]
  },
  {
    id: 'github',
    title: 'Github',
    isOpen: false,
    isMinimized: false,
    img: Github,
    url: 'https://github.com/elmersson',
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: []
  },
  {
    id: 'notes',
    title: 'Notes',
    isOpen: false,
    isMinimized: false,
    img: Notes,
    miniImg: MiniNotes,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'notes',
        label: 'Notes',
        menu: [
          { id: 'about-notes', title: 'About Notes', separator: true },
          { id: 'settings', title: 'Settings...', shortcut: '⌘,' },
          { id: 'accounts', title: 'Accounts...', separator: true },
          {
            id: 'close-all-locked-notes',
            title: 'Close All Locked Notes',
            disabled: true,
            separator: true
          },
          {
            id: 'services',
            title: 'Services',
            subMenu: [
              {
                id: 'activityMonitor',
                title: 'Activity Monitor'
              },
              {
                id: 'allocationsLeaks',
                title: 'Allocations & Leaks'
              },
              {
                id: 'fileActivity',
                title: 'File Activity'
              },
              {
                id: 'systemTrace',
                title: 'System Trace'
              },
              {
                id: 'timeProfileActiveApp',
                title: 'Time Profile Active Application'
              },
              {
                id: 'timeProfileAppUnderMouse',
                title: 'Time Profile App Under Mouse'
              },
              {
                id: 'timeProfileEntireSystem',
                title: 'Time Profile Entire System'
              },
              {
                id: 'toggleInstrumentsRecording',
                title: 'Toggle Instruments Recording',
                separator: true
              },
              {
                id: 'servicesSettings',
                title: 'Services Settings...'
              }
            ],
            separator: true
          },
          { id: 'hide-notes', title: 'Hide Notes', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          {
            id: 'show-all',
            title: 'Show All',
            disabled: true,
            separator: true
          },
          { id: 'quit-notes', title: 'Quit Notes', shortcut: '⌘Q' }
        ]
      },
      {
        id: 'file',
        label: 'File',
        menu: [
          { id: 'new-note', title: 'New Note', shortcut: '⌘N' },
          { id: 'new-folder', title: 'New Folder', shortcut: '⇧⌘N' },
          {
            id: 'new-smart-folder',
            title: 'New Smart Folder',
            separator: true
          },
          {
            id: 'share',
            title: 'Share',
            subMenu: [
              {
                id: 'noteUX',
                title: 'Note "UX"'
              }
            ],
            separator: true
          },
          {
            id: 'new-smart-folder-with-tag-selection',
            title: 'New Smart Folder with Tag Selection',
            disabled: true,
            separator: true
          },
          { id: 'close', title: 'Close', shortcut: '⌘W', separator: true },
          {
            id: 'import-from-iphone',
            title: 'Import from iPhone',
            subMenu: [
              { id: 'rasmus-iphone', title: 'Rasmus - iPhone', disabled: true },
              { id: 'takePhotoIphone', title: 'Take Photo' },
              { id: 'scanDocumentsIphone', title: 'Scan Documents' },
              { id: 'addSketchIphone', title: 'Add Sketch', separator: true },
              { id: 'ipad', title: 'iPad', disabled: true },

              { id: 'takePhotoIpad', title: 'Take Photo' },
              { id: 'scanDocumentsIpad', title: 'Scan Documents' },
              { id: 'addSketchIpad', title: 'Add Sketch' }
            ]
          },
          {
            id: 'import-to-notes',
            title: 'Import to Notes...',
            separator: true
          },
          { id: 'export-as-pdf', title: 'Export as PDF...' },
          { id: 'open-in-pages', title: 'Open in Pages', separator: true },
          { id: 'pin-note', title: 'Pin Note' },
          { id: 'lock-note', title: 'Lock Note' },
          {
            id: 'duplicate-note',
            title: 'Duplicate Note',
            shortcut: '⌘D',
            separator: true
          },
          { id: 'print', title: 'Print...', shortcut: '⌘P' }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          { id: 'undo', title: 'Undo', shortcut: '⌘Z', disabled: true },
          {
            id: 'redo',
            title: 'Redo',
            shortcut: '⇧⌘Z',
            disabled: true,
            separator: true
          },
          { id: 'cut', title: 'Cut', shortcut: '⌘X', disabled: true },
          { id: 'copy', title: 'Copy', shortcut: '⌘C', disabled: true },
          { id: 'paste', title: 'Paste', shortcut: '⌘V', disabled: true },
          {
            id: 'paste-match-style',
            title: 'Paste and Match Style',
            shortcut: '⌥⇧⌘V',
            disabled: true
          },
          {
            id: 'paste-retain-style',
            title: 'Paste and Retain Style',
            disabled: true
          },
          {
            id: 'select-all',
            title: 'Select All',
            shortcut: '⌘A',
            disabled: true,
            separator: true
          },
          {
            id: 'attach-file',
            title: 'Attach File...',
            shortcut: '⇧⌘A',
            disabled: true
          },
          {
            id: 'add-link',
            title: 'Add Link...',
            shortcut: '⌘K',
            disabled: true
          },
          {
            id: 'rename-attachment',
            title: 'Rename Attachment...',
            disabled: true,
            separator: true
          },
          {
            id: 'find',
            title: 'Find',
            subMenu: [
              {
                id: 'noteListSearch',
                title: 'Note List Search...',
                shortcut: '⌥⌘F',
                separator: true
              },
              { id: 'find', title: 'Find...', shortcut: '⌘F' },
              {
                id: 'findAndReplace',
                title: 'Find and Replace...',
                shortcut: '⇧⌘F'
              },
              { id: 'findNext', title: 'Find Next', shortcut: '⌘G' },
              {
                id: 'findPrevious',
                title: 'Find Previous',
                shortcut: '⇧⌘G',
                separator: true
              },
              {
                id: 'useSelectionForFind',
                title: 'Use Selection for Find',
                shortcut: '⌥⌘E',
                disabled: true
              },
              {
                id: 'jumpToSelection',
                title: 'Jump to Selection',
                shortcut: '⌘J'
              }
            ]
          },
          {
            id: 'spelling-grammar',
            title: 'Spelling and Grammar',
            subMenu: [
              {
                id: 'spellingAndGrammar',
                title: 'Show Spelling and Grammar',
                shortcut: '⇧⌘Å'
              },
              {
                id: 'checkDocumentNow',
                title: 'Check Document Now',
                shortcut: '⌘Å',
                separator: true
              },

              {
                id: 'checkSpellingWhileTyping',
                title: 'Check Spelling While Typing',
                checked: true
              },
              {
                id: 'checkGrammarWithSpelling',
                title: 'Check Grammar With Spelling',
                checked: true
              },
              {
                id: 'correctSpellingAutomatically',
                title: 'Correct Spelling Automatically',
                checked: true
              }
            ]
          },
          {
            id: 'substitutions',
            title: 'Substitutions',
            subMenu: [
              {
                id: 'show-substitutions',
                title: 'Show Substitutions',
                separator: true
              },

              {
                id: 'smartCopyPaste',
                title: 'Smart Copy/Paste',
                checked: true
              },
              { id: 'smartQuotes', title: 'Smart Quotes', checked: true },
              { id: 'smartLists', title: 'Smart Lists', checked: true },
              { id: 'smartDashes', title: 'Smart Dashes', checked: true },
              { id: 'smartLinks', title: 'Smart Links', checked: true },
              { id: 'smartTags', title: 'Smart Tags', checked: true },
              {
                id: 'textReplacement',
                title: 'Text Replacement',
                checked: true
              }
            ]
          },
          {
            id: 'transformations',
            title: 'Transformations',
            subMenu: [
              { id: 'makeUppercase', title: 'Make Uppercase' },
              { id: 'makeLowercase', title: 'Make Lowercase' },
              { id: 'capitalise', title: 'Capitalise' }
            ]
          },
          {
            id: 'speech',
            title: 'Speech',
            subMenu: [
              { id: 'startSpeaking', title: 'Start Speaking' },

              { id: 'stopSpeaking', title: 'Stop Speaking', disabled: true }
            ],
            separator: true
          },
          {
            id: 'autofill',
            title: 'AutoFill',
            subMenu: [
              { id: 'contact', title: 'Contact...' },
              { id: 'passwords', title: 'Passwords...' }
            ]
          },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'format',
        label: 'Format',
        menu: [
          { id: 'title', title: 'Title', shortcut: '⇧⌘T', disabled: true },
          { id: 'heading', title: 'Heading', shortcut: '⇧⌘H', disabled: true },
          {
            id: 'subheading',
            title: 'Subheading',
            shortcut: '⇧⌘J',
            disabled: true
          },
          { id: 'body', title: 'Body', shortcut: '⇧⌘B', disabled: true },
          {
            id: 'monostyled',
            title: 'Monostyled',
            shortcut: '⌃⌘M',
            disabled: true
          },
          {
            id: 'bulleted-list',
            title: 'Bulleted List',
            shortcut: '⇧⌘7',
            disabled: true
          },
          {
            id: 'dashed-list',
            title: 'Dashed List',
            shortcut: '⇧⌘8',
            disabled: true
          },
          {
            id: 'numbered-list',
            title: 'Numbered List',
            shortcut: '⇧⌘9',
            disabled: true
          },
          {
            id: 'block-quote',
            title: 'Block Quote',
            shortcut: '⌘’',
            disabled: true,
            separator: true
          },
          { id: 'checklist', title: 'Checklist', shortcut: '⇧⌘L' },
          {
            id: 'mark-as-ticked',
            title: 'Mark as Ticked',
            shortcut: '⌃⌘U',
            disabled: true
          },
          {
            id: 'more',
            title: 'More',
            subMenu: [
              { id: 'tickAll', title: 'Tick All', disabled: true },
              { id: 'untickAll', title: 'Untick All', disabled: true },
              {
                id: 'moveTickedToBottom',
                title: 'Move Ticked to Bottom',
                disabled: true
              },
              { id: 'deleteTicked', title: 'Delete Ticked', disabled: true }
            ],
            separator: true
          },
          {
            id: 'move-list-item',
            title: 'Move List Item',
            subMenu: [
              { id: 'up', title: 'Up', shortcut: '⌥⌘▲', disabled: true },
              { id: 'down', title: 'Down', shortcut: '⌥⌘▼', disabled: true }
            ],
            separator: true
          },
          { id: 'table', title: 'Table', shortcut: '⌃⌘T', disabled: true },
          {
            id: 'convert-to-text',
            title: 'Convert to Text',
            disabled: true,
            separator: true
          },
          {
            id: 'show-note-light-background',
            title: 'Show Note with Light Background',
            separator: true
          },
          {
            id: 'font',
            title: 'Font',
            subMenu: [
              { id: 'show-fonts', title: 'Show Fonts', shortcut: '⌘T' },
              { id: 'bold', title: 'Bold', shortcut: '⌘B' },
              { id: 'italic', title: 'Italic', shortcut: '⌘I' },
              { id: 'underline', title: 'Underline', shortcut: '⌘U' },
              { id: 'strikethrough', title: 'Strikethrough', separator: true },
              { id: 'bigger', title: 'Bigger', shortcut: '⌘+' },
              {
                id: 'smaller',
                title: 'Smaller',
                shortcut: '⌘-',
                separator: true
              },
              {
                id: 'baseline',
                title: 'Baseline',
                subMenu: [
                  { id: 'use-default', title: 'Use Default' },
                  { id: 'superscript', title: 'Superscript' },
                  { id: 'subscript', title: 'Subscript' }
                ],
                separator: true
              },
              {
                id: 'show-colours',
                title: 'Show Colours',
                shortcut: '⇧⌘C',
                separator: true
              },
              { id: 'copy-style', title: 'Copy Style', shortcut: '⌥⌘C' },
              { id: 'paste-style', title: 'Paste Style', shortcut: '⌥⌘V' },
              { id: 'remove-style', title: 'Remove Style', disabled: true }
            ]
          },
          {
            id: 'text',
            title: 'Text',
            subMenu: [
              {
                id: 'align-left',
                title: 'Align Left',
                shortcut: '⌥⌘Ö',
                checked: true
              },
              {
                id: 'centre',
                title: 'Centre',
                shortcut: '⌘*'
              },
              {
                id: 'justify',
                title: 'Justify'
              },
              {
                id: 'align-right',
                title: 'Align Right',
                shortcut: '⌥⌘Ä',
                separator: true
              },
              {
                id: 'writing-direction',
                title: 'Writing Direction',
                subMenu: [
                  { id: 'default', title: 'Default' },
                  {
                    id: 'left-to-right',
                    title: 'Left to Right',
                    checked: true
                  },
                  {
                    id: 'right-to-left',
                    title: 'Right to Left',
                    separator: true
                  },
                  { id: 'default', title: 'Default', checked: true },
                  { id: 'left-to-right', title: 'Left to Right' },
                  { id: 'right-to-left', title: 'Right to Left' }
                ]
              }
            ]
          },
          {
            id: 'indentation',
            title: 'Indentation',
            subMenu: [
              {
                id: 'increase',
                title: 'Increase',
                shortcut: '⌘Ä'
              },
              {
                id: 'decrease',
                title: 'Decrease',
                shortcut: '⌘Ö',
                disabled: true
              }
            ]
          }
        ]
      },
      {
        id: 'view',
        label: 'View',
        checklist: true,
        menu: [
          { id: 'as-list', title: 'as List', shortcut: '⌘1', checked: true },
          {
            id: 'as-gallery',
            title: 'as Gallery',
            shortcut: '⌘2',
            separator: true
          },
          {
            id: 'sort-by',
            title: 'Sort By',
            subMenu: [
              {
                id: 'defaultDateEdited',
                title: 'Default (Date Edited)',
                checked: true
              },
              {
                id: 'dateEdited',
                title: 'Date Edited'
              },
              {
                id: 'dateCreated',
                title: 'Date Created'
              },
              {
                id: 'title',
                title: 'Title',
                separator: true
              },
              {
                id: 'newestFirst',
                title: 'Newest First',
                checked: true
              },
              {
                id: 'oldestFirst',
                title: 'Oldest First'
              }
            ]
          },
          {
            id: 'group-by-date',
            title: 'Group By Date',
            subMenu: [
              {
                id: 'defaultOn',
                title: 'Default (On)',
                checked: true
              },
              {
                id: 'on',
                title: 'On'
              },
              {
                id: 'off',
                title: 'Off'
              }
            ],
            separator: true
          },
          { id: 'hide-folders', title: 'Hide Folders', shortcut: '⌥⌘S' },
          { id: 'hide-note-count', title: 'Hide Note Count', separator: true },
          {
            id: 'attachment-view',
            title: 'Attachment View',
            subMenu: [
              {
                id: 'setAllToSmall',
                title: 'Set All to Small'
              },
              {
                id: 'setAllToLarge',
                title: 'Set All to Large'
              }
            ],
            separator: true
          },
          {
            id: 'show-attachments-browser',
            title: 'Show Attachments Browser',
            shortcut: '⌘3'
          },
          {
            id: 'show-in-note',
            title: 'Show in Note',
            disabled: true,
            separator: true
          },
          {
            id: 'show-highlights',
            title: 'Show Highlights',
            shortcut: '⌃⌘I',
            disabled: true
          },
          {
            id: 'show-note-activity',
            title: 'Show Note Activity',
            shortcut: '⌃⌘K',
            disabled: true
          },
          {
            id: 'show-folder-activity',
            title: 'Show Folder Activity',
            disabled: true,
            separator: true
          },
          { id: 'zoom-in', title: 'Zoom In', shortcut: '⌃⌘.' },
          { id: 'zoom-out', title: 'Zoom Out', shortcut: '⌃⌘,' },
          {
            id: 'actual-size',
            title: 'Actual Size',
            shortcut: '⌃⌘0',
            separator: true
          },
          { id: 'previous-note', title: 'Previous Note', shortcut: '⌥⌘Ö' },
          {
            id: 'next-note',
            title: 'Next Note',
            shortcut: '⌥⌘Ä',
            disabled: true,
            separator: true
          },
          { id: 'hide-toolbar', title: 'Hide Toolbar' },
          { id: 'customize-toolbar', title: 'Customize Toolbar...' },
          {
            id: 'enter-full-screen',
            title: 'Enter Full Screen',
            shortcut: '⌃⌘F'
          }
        ]
      },
      {
        id: 'window',
        label: 'Window',
        menu: [
          { id: 'minimise', title: 'Minimise', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom', shortcut: '⌥⌘Z' },
          { id: 'tile-window-left', title: 'Tile Window to Left of Screen' },
          { id: 'tile-window-right', title: 'Tile Window to Right of Screen' },
          {
            id: 'replace-tiled-window',
            title: 'Replace Tiled Window',
            disabled: true,
            separator: true
          },
          {
            id: 'remove-window-from-set',
            title: 'Remove Window from Set',
            disabled: true,
            separator: true
          },
          {
            id: 'open-note-in-new-window',
            title: 'Open Note in New Window',
            separator: true
          },
          { id: 'notes', title: 'Notes', shortcut: '⌘0' },
          { id: 'photo-browser', title: 'Photo Browser', separator: true },
          { id: 'bring-all-to-front', title: 'Bring All to Front' }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search', input: true },
          { id: 'notes-help', title: 'Notes Help', separator: true },
          { id: 'using-tags', title: 'Using Tags' },
          { id: 'using-smart-folders', title: 'Using Smart Folders' }
        ]
      }
    ]
  },
  {
    id: 'lotion',
    title: 'Lotion',
    isOpen: false,
    isMinimized: false,
    img: Lotion,
    url: 'https://lotion.rasmuselmersson.se/',
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: []
  },
  {
    id: 'liro',
    title: 'Liro',
    isOpen: false,
    isMinimized: false,
    img: Liro,
    url: 'https://liro.rasmuselmersson.se/',
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: []
  },
  {
    id: 'system',
    title: 'System Settings',
    isOpen: false,
    isMinimized: false,
    img: System,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'system',
        label: 'System Settings',
        menu: [
          { id: 'about-system-settings', title: 'About System Settings' },
          {
            id: 'services',
            title: 'Services',
            subMenu: [
              {
                id: 'activityMonitor',
                title: 'Activity Monitor'
              },
              {
                id: 'allocationsLeaks',
                title: 'Allocations & Leaks'
              },
              {
                id: 'fileActivity',
                title: 'File Activity'
              },
              {
                id: 'systemTrace',
                title: 'System Trace'
              },
              {
                id: 'timeProfileActiveApplication',
                title: 'Time Profile Active Application'
              },
              {
                id: 'timeProfileAppUnderMouse',
                title: 'Time Profile App Under Mouse'
              },
              {
                id: 'timeProfileEntireSystem',
                title: 'Time Profile Entire System'
              },
              {
                id: 'toggleInstrumentsRecording',
                title: 'Toggle Instruments Recording',
                separator: true
              },
              {
                id: 'servicesSettings',
                title: 'Services Settings...'
              }
            ],
            separator: true
          },
          {
            id: 'hide-system-settings',
            title: 'Hide System Settings',
            shortcut: '⌘H'
          },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          {
            id: 'show-all',
            title: 'Show All',
            disabled: true,
            separator: true
          },
          {
            id: 'quit-system-settings',
            title: 'Quit System Settings',
            shortcut: '⌘Q'
          }
        ]
      },
      {
        id: 'file',
        label: 'File',
        menu: [{ id: 'close', title: 'Close', shortcut: '⌘W' }]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          { id: 'undo', title: 'Undo', shortcut: '⌘Z' },
          { id: 'redo', title: 'Redo', shortcut: '⇧⌘Z', separator: true },
          { id: 'cut', title: 'Cut', shortcut: '⌘X' },
          { id: 'copy', title: 'Copy', shortcut: '⌘C' },
          { id: 'paste', title: 'Paste', shortcut: '⌘V' },
          { id: 'delete', title: 'Delete' },
          {
            id: 'select-all',
            title: 'Select All',
            shortcut: '⌘A',
            separator: true
          },
          {
            id: 'autofill',
            title: 'AutoFill',
            subMenu: [
              {
                id: 'contact',
                title: 'Contact...',
                disabled: true
              },
              {
                id: 'passwords',
                title: 'Passwords...',
                disabled: true
              }
            ]
          },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        checklist: true,
        menu: [
          { id: 'back', title: 'Back', shortcut: '⌘Ö', disabled: true },
          { id: 'forward', title: 'Forward', shortcut: '⌘Ä', disabled: true },
          { id: 'search', title: 'Search', shortcut: '⌘F', separator: true },

          { id: 'about', title: 'About' },
          { id: 'accessibility', title: 'Accessibility' },
          { id: 'airdrop-handoff', title: 'AirDrop & Handoff' },
          { id: 'appearance', title: 'Appearance', checked: true },
          { id: 'apple-id', title: 'Apple ID' },
          { id: 'applecare-warranty', title: 'AppleCare & Warranty' },
          { id: 'battery', title: 'Battery' },
          { id: 'bluetooth', title: 'Bluetooth' },
          { id: 'control-centre', title: 'Control Centre' },
          { id: 'date-time', title: 'Date & Time' },
          { id: 'desktop-dock', title: 'Desktop & Dock' },
          { id: 'displays', title: 'Displays' },
          { id: 'extensions', title: 'Extensions' },
          { id: 'focus', title: 'Focus' },
          { id: 'game-center', title: 'Game Center' },
          { id: 'internet-accounts', title: 'Internet Accounts' },
          { id: 'keyboard', title: 'Keyboard' },
          { id: 'language-region', title: 'Language & Region' },
          { id: 'lock-screen', title: 'Lock Screen' },
          { id: 'login-items', title: 'Login Items' },
          { id: 'mouse', title: 'Mouse' },
          { id: 'network', title: 'Network' },
          { id: 'notifications', title: 'Notifications' },
          { id: 'passwords', title: 'Passwords' },
          { id: 'printers-scanners', title: 'Printers & Scanners' },
          { id: 'privacy-security', title: 'Privacy & Security' },
          { id: 'profiles', title: 'Profiles' },
          { id: 'screen-saver', title: 'Screen Saver' },
          { id: 'screen-time', title: 'Screen Time' },
          { id: 'sharing', title: 'Sharing' },
          { id: 'siri-spotlight', title: 'Siri & Spotlight' },
          { id: 'software-update', title: 'Software Update' },
          { id: 'sound', title: 'Sound' },
          { id: 'startup-disk', title: 'Startup Disk' },
          { id: 'storage', title: 'Storage' },
          { id: 'time-machine', title: 'Time Machine' },
          { id: 'touch-id-password', title: 'Touch ID & Password' },
          { id: 'trackpad', title: 'Trackpad' },
          { id: 'transfer-reset', title: 'Transfer or Reset' },
          { id: 'users-groups', title: 'Users & Groups' },
          { id: 'wallet-apple-pay', title: 'Wallet & Apple Pay' },
          { id: 'wallpaper', title: 'Wallpaper' },
          { id: 'wi-fi', title: 'Wi-Fi' }
        ]
      },
      {
        id: 'window',
        label: 'Window',
        menu: [
          { id: 'minimise', title: 'Minimise', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom' },
          {
            id: 'move-window-to-left',
            title: 'Move Window to Left Side of Screen'
          },
          {
            id: 'move-window-to-right',
            title: 'Move Window to Right Side of Screen',
            separator: true
          },
          {
            id: 'replace-tiled-window',
            title: 'Replace Tiled Window',
            disabled: true
          },
          { id: 'remove-window-from-set', title: 'Remove Window from Set' },
          {
            id: 'move-to-built-in-retina-display',
            title: 'Move to Built-in Retina Display'
          },
          { id: 'move-to-ipad', title: 'Move to iPad', separator: true },
          { id: 'bring-all-to-front', title: 'Bring All to Front' }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search' },
          { id: 'system-settings-help', title: 'System Settings Help' },
          { id: 'macos-help', title: 'macOS Help' },
          { id: 'user-manual', title: 'User Manual' },
          { id: 'macos-support', title: 'macOS Support', separator: true },
          {
            id: 'macbook-pro-specifications',
            title: 'MacBook Pro Specifications'
          },
          { id: 'hardware-support', title: 'Hardware Support' }
        ]
      }
    ]
  }
] as const;

export interface iTerm2Data {
  id: string;
  title: string;
  type: string;
  content?: React.ReactNode | string;
  children?: iTerm2Data[];
}
