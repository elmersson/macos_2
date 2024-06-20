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

export interface MenuItem {
  id: string;
  title: string;
  shortcut?: string;
  action?: () => void;
  subMenu?: MenuItem[];
  separator?: boolean;
}

export interface Trigger {
  id: string;
  label: string;
  menu: MenuItem[];
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
          { id: 'about-finder', title: 'About Finder' },
          { id: 'settings', title: 'Settings...', shortcut: '⌘,' },
          { id: 'empty-bin', title: 'Empty Bin...', shortcut: '⇧⌘⌫' },
          { id: 'services', title: 'Services', subMenu: [] },
          { id: 'hide-finder', title: 'Hide Finder', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          { id: 'show-all', title: 'Show All' }
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
          { id: 'new-folder', title: 'New Folder', shortcut: '⇧⌘N' },
          {
            id: 'new-folder-with-selection',
            title: 'New Folder with Selection',
            shortcut: '⌃⌘N'
          },
          { id: 'new-smart-folder', title: 'New Smart Folder' },
          { id: 'new-tab', title: 'New Tab', shortcut: '⌘T' },
          { id: 'open', title: 'Open', shortcut: '⌘O' },
          { id: 'close-window', title: 'Close Window', shortcut: '⌘W' },
          { id: 'get-info', title: 'Get Info', shortcut: '⌘I' },
          { id: 'rename', title: 'Rename' },
          { id: 'compress', title: 'Compress' },
          { id: 'duplicate', title: 'Duplicate', shortcut: '⌘D' },
          { id: 'make-alias', title: 'Make Alias', shortcut: '⌃⌘A' },
          { id: 'quick-look', title: 'Quick Look', shortcut: '⌘Y' },
          { id: 'print', title: 'Print', shortcut: '⌘P' },
          { id: 'share', title: 'Share...' },
          {
            id: 'show-enclosing-folder',
            title: 'Show in Enclosing Folder',
            shortcut: '⌘R'
          },
          { id: 'add-to-dock', title: 'Add to Dock', shortcut: '⌃⇧⌘T' },
          { id: 'move-to-bin', title: 'Move to Bin', shortcut: '⌘⌫' },
          { id: 'eject', title: 'Eject', shortcut: '⌘E' },
          { id: 'tags', title: 'Tags...' },
          { id: 'find', title: 'Find', shortcut: '⌘F' }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          { id: 'undo', title: 'Undo', shortcut: '⌘Z' },
          { id: 'redo', title: 'Redo', shortcut: '⇧⌘Z' },
          { id: 'cut', title: 'Cut', shortcut: '⌘X' },
          { id: 'copy', title: 'Copy', shortcut: '⌘C' },
          { id: 'paste', title: 'Paste', shortcut: '⌘V' },
          { id: 'select-all', title: 'Select All', shortcut: '⌘A' },
          { id: 'show-clipboard', title: 'Show Clipboard' },
          { id: 'autofill', title: 'AutoFill', subMenu: [] },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        menu: [
          { id: 'as-icons', title: 'as Icons', shortcut: '⌘1' },
          { id: 'as-list', title: 'as List', shortcut: '⌘2' },
          { id: 'as-columns', title: 'as Columns', shortcut: '⌘3' },
          { id: 'as-gallery', title: 'as Gallery', shortcut: '⌘4' },
          { id: 'use-groups', title: 'Use Groups', shortcut: '⌃⌘0' },
          { id: 'sort-by', title: 'Sort By', subMenu: [] },
          { id: 'show-tab-bar', title: 'Show Tab Bar', shortcut: '⇧⌘T' },
          { id: 'show-all-tabs', title: 'Show All Tabs', shortcut: "⇧⌘'" },
          { id: 'hide-sidebar', title: 'Hide Sidebar', shortcut: '⌥⌘S' },
          { id: 'show-preview', title: 'Show Preview', shortcut: '⇧⌘P' },
          { id: 'hide-toolbar', title: 'Hide Toolbar', shortcut: '⌥⌘T' },
          { id: 'hide-path-bar', title: 'Hide Path Bar', shortcut: '⌥⌘P' },
          { id: 'hide-status-bar', title: 'Hide Status Bar', shortcut: '⌘/' },
          { id: 'customise-toolbar', title: 'Customise Toolbar...' },
          {
            id: 'show-view-options',
            title: 'Show View Options',
            shortcut: '⌘J'
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
          { id: 'back', title: 'Back', shortcut: '⌃Ö' },
          { id: 'forward', title: 'Forward', shortcut: '⌃Ä' },
          {
            id: 'select-startup-disk',
            title: 'Select Startup Disk',
            shortcut: '⇧⌃⌘A'
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
          { id: 'utilities', title: 'Utilities', shortcut: '⇧⌘U' },
          { id: 'recent-folders', title: 'Recent Folders', subMenu: [] },
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
            id: 'cycle-through-windows',
            title: 'Cycle Through Windows',
            shortcut: '⌘<'
          },
          {
            id: 'show-previous-tab',
            title: 'Show Previous Tab',
            shortcut: '⇧⌃⇥'
          },
          { id: 'show-next-tab', title: 'Show Next Tab', shortcut: '⇧⌃⇧⇥' },
          { id: 'move-tab-to-new-window', title: 'Move Tab to New Window' },
          { id: 'merge-all-windows', title: 'Merge All Windows' },
          { id: 'bring-all-to-front', title: 'Bring All to Front' },
          { id: 'recents', title: 'Recents' }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search' },
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
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
          }
        ]
      }
    ]
  },
  {
    id: 'mail',
    title: 'Mail',
    isOpen: false,
    isMinimized: false,
    img: Mail,
    miniImg: MiniMail,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 },
    triggers: [
      {
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
          }
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
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
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
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
          }
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
    triggers: [
      {
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
          }
        ]
      }
    ]
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
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
          }
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
    triggers: [
      {
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
          }
        ]
      }
    ]
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
    triggers: [
      {
        id: 'title',
        label: 'Finder',
        menu: [
          {
            id: 'about',
            title: 'About Finder',
            action: () => console.log('About Finder')
          },
          {
            id: 'settings',
            title: 'Settings...',
            action: () => console.log('Open Settings')
          },
          {
            id: 'quit',
            title: 'Quit Finder',
            shortcut: '⌘Q',
            action: () => console.log('Quit Finder')
          }
        ]
      },
      {
        id: 'preferences',
        label: 'Preferences',
        menu: [
          {
            id: 'general',
            title: 'General',
            action: () => console.log('General Preferences')
          },
          {
            id: 'appearance',
            title: 'Appearance',
            action: () => console.log('Appearance Preferences')
          }
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
