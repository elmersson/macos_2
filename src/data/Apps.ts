import { StaticImageData } from 'next/image';
import Finder from '@/assets/apps/finder.png';
import LaunchPad from '@/assets/apps/launchpad.png';
import Arc from '@/assets/apps/arc.png';
import Mail from '@/assets/apps/MAIL.png';
import Iterm2 from '@/assets/apps/iterm2.png';
import VsCode from '@/assets/apps/vscode.png';
import Github from '@/assets/apps/github.png';
import Notes from '@/assets/apps/notes.png';
import Lotion from '@/assets/apps/lotion.png';
import Liro from '@/assets/apps/liro.png';

export interface AppData {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  img: StaticImageData;
  url?: string;
  z: number;
  size: { width: number; height: number };
  position: { x: number; y: number };
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
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 }
  },
  {
    id: 'launchpad',
    title: 'Launchpad',
    isOpen: false,
    isMinimized: false,
    img: LaunchPad,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 }
  },
  {
    id: 'arc',
    title: 'Arc',
    isOpen: false,
    isMinimized: false,
    img: Arc,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 }
  },
  {
    id: 'mail',
    title: 'Mail',
    isOpen: false,
    isMinimized: false,
    img: Mail,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 }
  },
  {
    id: 'iterm2',
    title: 'Iterm2',
    isOpen: false,
    isMinimized: false,
    img: Iterm2,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 }
  },
  {
    id: 'visual_studio_code',
    title: 'Visual Studio Code',
    isOpen: false,
    isMinimized: false,
    img: VsCode,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 }
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
    position: { x: 0, y: 0 }
  },
  {
    id: 'notes',
    title: 'Notes',
    isOpen: false,
    isMinimized: false,
    img: Notes,
    z: 0,
    size: { width: 640, height: 400 },
    position: { x: 0, y: 0 }
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
    position: { x: 0, y: 0 }
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
    position: { x: 0, y: 0 }
  }
] as const;

export interface iTerm2Data {
  id: string;
  title: string;
  type: string;
  content?: React.ReactNode | string;
  children?: iTerm2Data[];
}
