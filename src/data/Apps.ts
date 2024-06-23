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
          { id: 'about-outlook', title: 'About Outlook' },
          { id: 'legacy-outlook', title: 'Legacy Outlook' },
          { id: 'settings', title: 'Settings...', shortcut: '⌘,' },
          { id: 'work-offline', title: 'Work Offline' },
          { id: 'turn-off-reminders', title: 'Turn Off Reminders' },
          { id: 'services', title: 'Services', subMenu: [] },
          { id: 'hide-outlook', title: 'Hide Outlook', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          { id: 'show-all', title: 'Show All' },
          { id: 'quit-outlook', title: 'Quit Outlook', shortcut: '⌘Q' }
        ]
      },
      {
        id: 'file',
        label: 'File',
        menu: [
          { id: 'new', title: 'New', subMenu: [] },
          { id: 'open', title: 'Open', subMenu: [] },
          { id: 'close', title: 'Close', shortcut: '⌘W' },
          { id: 'save', title: 'Save', shortcut: '⌘S' },
          { id: 'save-as', title: 'Save As...', shortcut: '⇧⌘S' },
          { id: 'save-as-template', title: 'Save As Template...' },
          { id: 'folder', title: 'Folder', subMenu: [] },
          { id: 'import', title: 'Import...' },
          { id: 'export', title: 'Export...' },
          { id: 'page-setup', title: 'Page Setup...' },
          { id: 'print', title: 'Print...', shortcut: '⌘P' }
        ]
      },
      {
        id: 'edit',
        label: 'Edit',
        menu: [
          { id: 'undo-send', title: 'Undo Send', shortcut: '⌥⌘⏎' },
          { id: 'undo', title: 'Undo', shortcut: '⌘Z' },
          { id: 'redo', title: 'Redo', shortcut: '⇧⌘Z' },
          { id: 'cut', title: 'Cut', shortcut: '⌘X' },
          { id: 'copy', title: 'Copy', shortcut: '⌘C' },
          { id: 'copy-formatting', title: 'Copy Formatting' },
          { id: 'paste', title: 'Paste', shortcut: '⌘V' },
          {
            id: 'paste-match-style',
            title: 'Paste and Match Style',
            shortcut: '⌥⇧⌘V'
          },
          { id: 'paste-formatting', title: 'Paste Formatting' },
          { id: 'clear-formatting', title: 'Clear Formatting' },
          { id: 'select-all', title: 'Select All', shortcut: '⌘A' },
          { id: 'duplicate', title: 'Duplicate' },
          { id: 'delete', title: 'Delete', shortcut: '⌘⌫' },
          {
            id: 'permanently-delete',
            title: 'Permanently Delete',
            shortcut: '⇧⌘⌫'
          },
          { id: 'delete-all', title: 'Delete All' },
          { id: 'find', title: 'Find', subMenu: [] },
          {
            id: 'spelling-grammar',
            title: 'Spelling and Grammar',
            subMenu: []
          },
          { id: 'check-accessibility', title: 'Check Accessibility...' },
          { id: 'change-case', title: 'Change Case', shortcut: '⌥⇧⌘C' },
          { id: 'speech', title: 'Speech', subMenu: [] },
          { id: 'autofill', title: 'AutoFill', subMenu: [] },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'view',
        label: 'View',
        menu: [
          { id: 'previous', title: 'Previous', shortcut: '⌃⌥Ö' },
          { id: 'next', title: 'Next', shortcut: '⌃⌥Ä' },
          { id: 'previous-pane', title: 'Previous Pane', shortcut: '⌃⇧Ö' },
          { id: 'next-pane', title: 'Next Pane', shortcut: '⌃⇧Ä' },
          { id: 'go-to', title: 'Go To', subMenu: [] },
          { id: 'today', title: 'Today', shortcut: '⌘T' },
          { id: 'next-week', title: 'Next Week', shortcut: '⌥⌘▶' },
          { id: 'previous-week', title: 'Previous Week', shortcut: '⌥⌘◀' },
          { id: 'day', title: 'Day', shortcut: '⌃⌘1' },
          { id: 'work-week', title: 'Work Week', shortcut: '⌃⌘2' },
          { id: 'week', title: 'Week', shortcut: '⌃⌘3' },
          { id: 'month', title: 'Month', shortcut: '⌃⌘4' },
          { id: 'three-day', title: 'Three Day', shortcut: '⌃⌘5' },
          { id: 'time-scale', title: 'Time Scale', subMenu: [] },
          { id: 'filter', title: 'Filter', subMenu: [] },
          { id: 'colour', title: 'Colour', subMenu: [] },
          { id: 'overlay', title: 'Overlay', shortcut: '⌘0' },
          { id: 'list', title: 'List', shortcut: '⌃⌘0' },
          {
            id: 'manage-additional-time-zones',
            title: 'Manage Additional Time Zones'
          },
          { id: 'customize-toolbar', title: 'Customize Toolbar...' },
          { id: 'sidebar', title: 'Sidebar', shortcut: '⌃⌘S' },
          { id: 'task-pane', title: 'Task Pane' },
          {
            id: 'enter-full-screen',
            title: 'Enter Full Screen',
            shortcut: '⌃⌘F'
          }
        ]
      },
      {
        id: 'event',
        label: 'Event',
        menu: [
          {
            id: 'invite-attendees',
            title: 'Invite Attendees',
            shortcut: '⇧⌘I'
          },
          { id: 'time-zones', title: 'Time Zones' },
          { id: 'signatures', title: 'Signatures', subMenu: [] },
          { id: 'show-as', title: 'Show As', subMenu: [] },
          { id: 'private', title: 'Private' },
          { id: 'categorize', title: 'Categorize', subMenu: [] },
          { id: 'join-online-meeting', title: 'Join Online Meeting' },
          { id: 'move', title: 'Move', subMenu: [] }
        ]
      },
      {
        id: 'format',
        label: 'Format',
        menu: [
          { id: 'font', title: 'Font...', shortcut: '⌘D' },
          {
            id: 'increase-font-size',
            title: 'Increase Font Size',
            shortcut: '⌘+'
          },
          {
            id: 'decrease-font-size',
            title: 'Decrease Font Size',
            shortcut: '⌘-'
          },
          { id: 'alignment', title: 'Alignment', subMenu: [] },
          { id: 'numbered-list', title: 'Numbered List' },
          { id: 'bulleted-list', title: 'Bulleted List' },
          { id: 'increase-indent', title: 'Increase Indent', shortcut: '⌘Ä' },
          { id: 'decrease-indent', title: 'Decrease Indent', shortcut: '⌘Ö' },
          { id: 'insert-table', title: 'Insert Table...' },
          { id: 'link', title: 'Link...', shortcut: '⌘K' },
          { id: 'edit-alt-text', title: 'Edit Alt Text...', shortcut: '⇧⌘2' },
          { id: 'insert-picture', title: 'Insert Picture...', shortcut: '⇧⌘1' },
          { id: 'format-picture', title: 'Format Picture...' },
          { id: 'zoom', title: 'Zoom', shortcut: '⌥⌘Z' }
        ]
      },
      {
        id: 'profiles',
        label: 'Profiles',
        menu: [
          { id: 'all-accounts', title: 'All Accounts' },
          { id: 'create-profile', title: 'Create Profile' },
          { id: 'manage-profiles', title: 'Manage Profiles' }
        ]
      },
      {
        id: 'tools',
        label: 'Tools',
        menu: [
          { id: 'sync', title: 'Sync', shortcut: '⌥⌘K' },
          { id: 'automatic-replies', title: 'Automatic Replies...' },
          { id: 'rules', title: 'Rules...' },
          { id: 'junk-email-preferences', title: 'Junk Email Preferences' },
          { id: 'accounts', title: 'Accounts...' },
          { id: 'get-add-ins', title: 'Get Add-ins' },
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
        menu: [
          { id: 'minimise', title: 'Minimise', shortcut: '⌘M' },
          { id: 'zoom', title: 'Zoom' },
          { id: 'tile-window-left', title: 'Tile Window to Left of Screen' },
          { id: 'tile-window-right', title: 'Tile Window to Right of Screen' },
          { id: 'replace-tiled-window', title: 'Replace Tiled Window' },
          {
            id: 'enter-full-screen',
            title: 'Enter Full Screen',
            shortcut: '⌃⌘F'
          },
          { id: 'remove-window-from-set', title: 'Remove Window from Set' },
          { id: 'reminders', title: 'Reminders', shortcut: '⌘9' },
          { id: 'media-browser', title: 'Media Browser', subMenu: [] },
          { id: 'calendar', title: 'Calendar' }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search' },
          { id: 'outlook-help', title: 'Outlook Help' },
          { id: 'contact-support', title: 'Contact Support' },
          { id: 'feedback', title: 'Feedback', subMenu: [] },
          { id: 'collect-diagnostics', title: 'Collect Diagnostics' },
          { id: 'whats-new', title: "What's New" },
          { id: 'revert-to-legacy-outlook', title: 'Revert to Legacy Outlook' },
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
        id: 'notes',
        label: 'Notes',
        menu: [
          { id: 'about-notes', title: 'About Notes' },
          { id: 'settings', title: 'Settings...', shortcut: '⌘,' },
          { id: 'accounts', title: 'Accounts...' },
          { id: 'close-all-locked-notes', title: 'Close All Locked Notes' },
          { id: 'services', title: 'Services', subMenu: [] },
          { id: 'hide-notes', title: 'Hide Notes', shortcut: '⌘H' },
          { id: 'hide-others', title: 'Hide Others', shortcut: '⌥⌘H' },
          { id: 'show-all', title: 'Show All' },
          { id: 'quit-notes', title: 'Quit Notes', shortcut: '⌘Q' }
        ]
      },
      {
        id: 'file',
        label: 'File',
        menu: [
          { id: 'new-note', title: 'New Note', shortcut: '⌘N' },
          { id: 'new-folder', title: 'New Folder', shortcut: '⇧⌘N' },
          { id: 'new-smart-folder', title: 'New Smart Folder' },
          { id: 'share', title: 'Share', subMenu: [] },
          {
            id: 'new-smart-folder-with-tag-selection',
            title: 'New Smart Folder with Tag Selection'
          },
          { id: 'close', title: 'Close', shortcut: '⌘W' },
          {
            id: 'import-from-iphone',
            title: 'Import from iPhone',
            subMenu: []
          },
          { id: 'import-to-notes', title: 'Import to Notes...' },
          { id: 'export-as-pdf', title: 'Export as PDF...' },
          { id: 'open-in-pages', title: 'Open in Pages' },
          { id: 'pin-note', title: 'Pin Note' },
          { id: 'lock-note', title: 'Lock Note' },
          { id: 'duplicate-note', title: 'Duplicate Note', shortcut: '⌘D' },
          { id: 'print', title: 'Print...', shortcut: '⌘P' }
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
          {
            id: 'paste-match-style',
            title: 'Paste and Match Style',
            shortcut: '⌥⇧⌘V'
          },
          { id: 'paste-retain-style', title: 'Paste and Retain Style' },
          { id: 'select-all', title: 'Select All', shortcut: '⌘A' },
          { id: 'attach-file', title: 'Attach File...', shortcut: '⇧⌘A' },
          { id: 'add-link', title: 'Add Link...', shortcut: '⌘K' },
          { id: 'rename-attachment', title: 'Rename Attachment...' },
          { id: 'find', title: 'Find', subMenu: [] },
          {
            id: 'spelling-grammar',
            title: 'Spelling and Grammar',
            subMenu: []
          },
          { id: 'substitutions', title: 'Substitutions', subMenu: [] },
          { id: 'transformations', title: 'Transformations', subMenu: [] },
          { id: 'speech', title: 'Speech', subMenu: [] },
          { id: 'autofill', title: 'AutoFill', subMenu: [] },
          { id: 'start-dictation', title: 'Start Dictation...' },
          { id: 'emoji-symbols', title: 'Emoji & Symbols' }
        ]
      },
      {
        id: 'format',
        label: 'Format',
        menu: [
          { id: 'title', title: 'Title', shortcut: '⇧⌘T' },
          { id: 'heading', title: 'Heading', shortcut: '⇧⌘H' },
          { id: 'subheading', title: 'Subheading', shortcut: '⇧⌘J' },
          { id: 'body', title: 'Body', shortcut: '⇧⌘B' },
          { id: 'monostyled', title: 'Monostyled', shortcut: '⌃⌘M' },
          { id: 'bulleted-list', title: 'Bulleted List', shortcut: '⇧⌘7' },
          { id: 'dashed-list', title: 'Dashed List', shortcut: '⇧⌘8' },
          { id: 'numbered-list', title: 'Numbered List', shortcut: '⇧⌘9' },
          { id: 'block-quote', title: 'Block Quote', shortcut: '⌘’' },
          { id: 'checklist', title: 'Checklist', shortcut: '⇧⌘L' },
          { id: 'mark-as-ticked', title: 'Mark as Ticked', shortcut: '⌃⌘U' },
          { id: 'more', title: 'More', subMenu: [] },
          { id: 'move-list-item', title: 'Move List Item', subMenu: [] },
          { id: 'table', title: 'Table', shortcut: '⌃⌘T' },
          { id: 'convert-to-text', title: 'Convert to Text' },
          {
            id: 'show-note-light-background',
            title: 'Show Note with Light Background'
          },
          { id: 'font', title: 'Font', subMenu: [] },
          { id: 'text', title: 'Text', subMenu: [] },
          { id: 'indentation', title: 'Indentation', subMenu: [] }
        ]
      },
      {
        id: 'view',
        label: 'View',
        menu: [
          { id: 'as-list', title: 'as List', shortcut: '⌘1' },
          { id: 'as-gallery', title: 'as Gallery', shortcut: '⌘2' },
          { id: 'sort-by', title: 'Sort By', subMenu: [] },
          { id: 'group-by-date', title: 'Group By Date' },
          { id: 'hide-folders', title: 'Hide Folders', shortcut: '⌥⌘S' },
          { id: 'hide-note-count', title: 'Hide Note Count' },
          { id: 'attachment-view', title: 'Attachment View', subMenu: [] },
          {
            id: 'show-attachments-browser',
            title: 'Show Attachments Browser',
            shortcut: '⌘3'
          },
          { id: 'show-in-note', title: 'Show in Note' },
          { id: 'show-highlights', title: 'Show Highlights', shortcut: '⌃⌘I' },
          {
            id: 'show-note-activity',
            title: 'Show Note Activity',
            shortcut: '⌃⌘K'
          },
          { id: 'show-folder-activity', title: 'Show Folder Activity' },
          { id: 'zoom-in', title: 'Zoom In', shortcut: '⌃⌘.' },
          { id: 'zoom-out', title: 'Zoom Out', shortcut: '⌃⌘,' },
          { id: 'actual-size', title: 'Actual Size', shortcut: '⌃⌘0' },
          { id: 'previous-note', title: 'Previous Note', shortcut: '⌥⌘Ö' },
          { id: 'next-note', title: 'Next Note', shortcut: '⌥⌘Ä' },
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
          { id: 'replace-tiled-window', title: 'Replace Tiled Window' },
          { id: 'remove-window-from-set', title: 'Remove Window from Set' },
          { id: 'open-note-in-new-window', title: 'Open Note in New Window' },
          { id: 'notes', title: 'Notes', shortcut: '⌘0' },
          { id: 'photo-browser', title: 'Photo Browser' },
          { id: 'bring-all-to-front', title: 'Bring All to Front' }
        ]
      },
      {
        id: 'help',
        label: 'Help',
        menu: [
          { id: 'search', title: 'Search' },
          { id: 'notes-help', title: 'Notes Help' },
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
