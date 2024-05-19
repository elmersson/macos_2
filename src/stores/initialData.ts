import weatherJson from '../data/Weather.json';
import { apps } from '@/data/Apps';
import { starterNotes } from '@/data/notes';

export const initialSystemData = {
  bootProgress: 0,
  booted: false,
  logedIn: false,
  wifi: true,
  bluetooth: true,
  airdrop: true,
  volume: 50,
  display: 100,
  launchPad: false
};

export const initialWeatherData = weatherJson;

export const initialNameOfTheDay = ['Rasmus', 'Amanda'];

export const initialAppData = apps;

export const initialIterm2Data = {
  history: [],
  curDir: undefined,
  curCommand: undefined,
  visibleHistory: 0
};

export const initialSelectedNotes = [
  'work-meeting-notes',
  'work-project-ideas',
  'work-cv',
  'work-personal-letter'
];

export const initialSelectedNote = 'work-meeting-notes';

export const initialNotesData = [{ dir: 'ICloud', folders: starterNotes }];
