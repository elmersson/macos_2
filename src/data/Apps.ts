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
  action: () => void;
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
            id: 'separator1',
            title: '',
            action: () => {},
            separator: true
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
        id: 'file',
        label: 'File',
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
      },
      {
        id: 'edit',
        label: 'Edit',
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
      },
      {
        id: 'view',
        label: 'View',
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
      },
      {
        id: 'go',
        label: 'Go',
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
      },
      {
        id: 'window',
        label: 'Window',
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
      },
      {
        id: 'help',
        label: 'Help',
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
    id: 'launchpad',
    title: 'Launchpad',
    isOpen: false,
    isMinimized: false,
    img: LaunchPad,
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
