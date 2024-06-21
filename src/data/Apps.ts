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
        id: 'arc',
        label: 'Arc',
        menu: [
          { id: 'about-arc', title: 'About Arc' },
          { id: 'settings', title: 'Settings...', shortcut: '⌘,' },
          { id: 'share-arc', title: 'Share Arc' },
          {
            id: 'set-as-default-browser',
            title: 'Set as Default Browser',
            shortcut: '⌘♥'
          },
          {
            id: 'import-from-another-browser',
            title: 'Import from Another Browser...'
          },
          {
            id: 'update-available',
            title: 'Update Available...',
            subMenu: [{ id: 'update', title: '1 update' }]
          },
          { id: 'services', title: 'Services', subMenu: [] },
          { id: 'privacy-policy', title: 'Privacy Policy' },
          { id: 'hide-arc', title: 'Hide Arc', shortcut: '⌘H' },
          {
            id: 'hide-other-windows',
            title: 'Hide Other Windows',
            shortcut: '⌥⌘H'
          },
          { id: 'show-all', title: 'Show All' },
          { id: 'sign-out', title: 'Sign Out' },
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
            shortcut: '⇧⌘T'
          },
          { id: 'open-command-bar', title: 'Open Command Bar', shortcut: '⌘L' },
          { id: 'new-easel', title: 'New Easel', shortcut: '⌃⌘E' },
          { id: 'close-window', title: 'Close Window', shortcut: '⇧⌘W' },
          { id: 'archive-tab', title: 'Archive Tab', shortcut: '⌘W' },
          { id: 'share', title: 'Share...', subMenu: [] },
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
          { id: 'redo', title: 'Redo', shortcut: '⇧⌘Z' },
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
            shortcut: '⌃⌘C'
          },
          { id: 'paste', title: 'Paste', shortcut: '⌘V' },
          {
            id: 'paste-and-match-style',
            title: 'Paste and Match Style',
            shortcut: '⌥⇧⌘V'
          },
          { id: 'delete', title: 'Delete' },
          { id: 'select-all', title: 'Select All', shortcut: '⌘A' },
          { id: 'find', title: 'Find', subMenu: [] },
          {
            id: 'spelling-and-grammar',
            title: 'Spelling and Grammar',
            subMenu: []
          },
          { id: 'substitutions', title: 'Substitutions', subMenu: [] },
          { id: 'transformations', title: 'Transformations', subMenu: [] },
          { id: 'speech', title: 'Speech', subMenu: [] },
          { id: 'format', title: 'Format', subMenu: [] },
          { id: 'autofill', title: 'AutoFill', subMenu: [] },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        menu: [
          { id: 'appearance', title: 'Appearance', subMenu: [] },
          { id: 'hide-sidebar', title: 'Hide Sidebar', shortcut: '⌘S' },
          { id: 'show-toolbar', title: 'Show Toolbar', shortcut: '⇧⌘D' },
          { id: 'collapse-pinned-tabs', title: 'Collapse Pinned Tabs' },
          { id: 'stop-loading', title: 'Stop Loading', shortcut: '⌘.' },
          {
            id: 'force-refresh',
            title: 'Force Refresh the Page',
            shortcut: '⌘⇧R'
          },
          { id: 'clear-cookies-refresh', title: 'Clear Cookies and Refresh' },
          { id: 'clear-cache-refresh', title: 'Clear Cache and Refresh' },
          { id: 'add-split-view', title: 'Add Split View', shortcut: '⌃⌘+' },
          {
            id: 'close-split-pane',
            title: 'Close this Split Pane',
            shortcut: '⌃⌘-'
          },
          {
            id: 'separate-page-split-view',
            title: 'Separate Page from Split View'
          },
          { id: 'expand-current-split', title: 'Expand Current Split' },
          {
            id: 'zoom-actual-size',
            title: 'Zoom to Actual Size',
            shortcut: '⌘0'
          },
          { id: 'zoom-in', title: 'Zoom In', shortcut: '⌘+' },
          { id: 'zoom-out', title: 'Zoom Out', shortcut: '⌘-' },
          { id: 'cast', title: 'Cast' },
          { id: 'developer', title: 'Developer', subMenu: [] },
          {
            id: 'enter-exit-reader-mode',
            title: 'Enter/Exit Reader Mode (beta)',
            shortcut: '⌥⌘R'
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
        menu: [
          { id: 'new-space', title: 'New Space...' },
          { id: 'edit-theme', title: 'Edit Theme...' },
          { id: 'rename-space', title: 'Rename Space' },
          { id: 'next-space', title: 'Next Space', shortcut: '⌃⌘→' },
          { id: 'previous-space', title: 'Previous Space', shortcut: '⌃⌘←' },
          { id: '🤓 private-space', title: 'Privat', shortcut: '⌃1' },
          { id: '👨‍💻 work-space', title: 'Work', shortcut: '⌃2' },
          { id: 'manage-spaces', title: 'Manage Spaces...' }
        ]
      },
      {
        id: 'tabs',
        label: 'Tabs',
        menu: [
          { id: 'new-tab', title: 'New Tab...', shortcut: '⌘T' },
          { id: 'pin-tab', title: 'Pin Tab', shortcut: '⌘D' },
          { id: 'new-folder', title: 'New Folder...' },
          { id: 'next-tab', title: 'Next Tab', shortcut: '⌃⇧⌘▼' },
          { id: 'previous-tab', title: 'Previous Tab', shortcut: '⌃⇧⌘▲' },
          { id: 'reveal-tab', title: 'Reveal Tab in Sidebar' },
          { id: 'clear-today', title: 'Clear Today', shortcut: '⌃⇧⌘K' },
          { id: 'reset-tabs', title: 'Reset all tabs in this Space' }
        ]
      },
      {
        id: 'archive',
        label: 'Archive',
        menu: [
          { id: 'go-back', title: 'Go Back', shortcut: '⌘Ö' },
          { id: 'go-forward', title: 'Go Forward', shortcut: '⌘Ä' },
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
          { id: 'ublock-origin', title: 'uBlock Origin' },
          { id: 'add-extension', title: 'Add Extension...' },
          { id: 'manage-extensions', title: 'Manage Extensions...' }
        ]
      },

      {
        id: 'window',
        label: 'Window',
        menu: [
          { id: 'stay-on-top', title: 'Stay On Top' },
          { id: 'minimize-window', title: 'Minimize Window', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom' },
          { id: 'tile-window-left', title: 'Tile Window to Left of Screen' },
          { id: 'tile-window-right', title: 'Tile Window to Right of Screen' },
          { id: 'replace-tiled-window', title: 'Replace Tiled Window' },
          { id: 'remove-window-from-set', title: 'Remove Window from Set' },
          { id: 'open-library', title: 'Open Library...', shortcut: '⌃⌘L' },
          { id: 'view-downloads', title: 'View Downloads...', shortcut: '⌃⌘J' },
          { id: 'view-easels', title: 'View Easels...' },
          { id: 'view-media', title: 'View Media...' },
          { id: 'view-boosts', title: 'View Boosts...' },
          { id: 'bring-all-to-front', title: 'Bring All to Front' },
          { id: 'localhost-3000', title: 'localhost:3000' },
          { id: 'rasmus-elmersson', title: 'Rasmus Elmersson', shortcut: '✓' }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search' },
          { id: 'getting-started', title: 'Getting Started' },
          {
            id: 'essential-keyboard-shortcuts',
            title: 'Essential Keyboard Shortcuts'
          },
          { id: 'contact-the-team', title: 'Contact the Team' },
          { id: 'visit-help-center', title: 'Visit Help Center' },
          { id: 'restore-data', title: 'Restore Data' },
          { id: 'export-arc-notes', title: 'Export Arc Notes' },
          { id: 'troubleshooting', title: 'Troubleshooting', subMenu: [] }
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
