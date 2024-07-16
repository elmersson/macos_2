import { FcGlobe } from 'react-icons/fc';
import { ContentBox } from '../apps/system';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Checkbox } from '../ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';

interface CheckboxItemProps {
  id: string;
  label: string;
  checked?: boolean;
}

const checkboxItems: CheckboxItemProps[] = [
  { id: '1', label: 'Applications', checked: true },
  { id: '2', label: 'Calculator' },
  { id: '3', label: 'Contacts' },
  { id: '4', label: 'Conversion' },
  { id: '5', label: 'Definition' },
  { id: '6', label: 'Developer', checked: true },
  { id: '7', label: 'Documents' },
  { id: '8', label: 'Events & Reminders' },
  { id: '9', label: 'Folders' },
  { id: '10', label: 'Fonts' },
  { id: '11', label: 'Images' },
  { id: '12', label: 'Mail & Messages' },
  { id: '13', label: 'Movies' },
  { id: '14', label: 'Music' },
  { id: '15', label: 'Other' },
  { id: '16', label: 'PDF Documents' },
  { id: '17', label: 'Presentations' },
  { id: '18', label: 'Siri Suggestions' },
  { id: '19', label: 'Spreadsheets' },
  { id: '20', label: 'System Settings', checked: true },
  { id: '21', label: 'Websites' }
];

export function Siri() {
  return (
    <div className="space-y-2">
      <ContentBox className="flex flex-row justify-between space-x-1">
        <div className="flex flex-row space-x-2">
          <span className="bg-black text-white w-10 h-9 text-2xl flex items-center justify-center rounded">
            <FcGlobe />
          </span>
          <div className="flex flex-col">
            <span>Ask Siri</span>
            <span className="text-sm text-neutral-400">
              Siri helps you get things done, just by asking. Dictate a note,
              check the weather and more.
            </span>
          </div>
        </div>
        <Switch />
      </ContentBox>

      <ContentBox className="space-y-2">
        <div className="flex flex-row justify-between">
          <span>Listen for &quot;Hej Siri&quot;</span>
          <Switch disabled />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Keyboard shortcut</span>
          <Select disabled>
            <SelectTrigger className="w-[220px] bg-transparent border-none">
              <SelectValue defaultValue="hold" placeholder="Hold" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="hold">Hold</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Language</span>
          <Select disabled>
            <SelectTrigger className="w-[220px] bg-transparent border-none">
              <SelectValue defaultValue="swedish" placeholder="Swedish" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="swedish">Swedish</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Siri voice</span>
          <div className="space-x-2">
            <span className="text-neutral-400">Swedish (Voice 2)</span>
            <Button
              className="bg-neutral-500 text-white p-2 h-6 text-sm"
              disabled
            >
              Select...
            </Button>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Siri history</span>
          <Button
            className="bg-neutral-500 text-white p-2 h-6 text-sm"
            disabled
          >
            Delete Siri & Dictation History...
          </Button>
        </div>
        <Separator className="bg-white/10" />
      </ContentBox>

      <div className="flex flex-row items-center justify-end space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Siri Suggestions & Privacy...
        </Button>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm" disabled>
          Siri Responses...
        </Button>
      </div>

      <ContentBox
        title="Spotlight"
        subTitle="Spotlight helps you quickly find things on your computer and shows suggestions from the internet, Music, App Store, film showtimes, locations nearby and more."
        className="space-y-2"
      >
        <div className="flex flex-col">
          <span>Search results</span>
          <span className="text-sm text-neutral-400">
            Only selected categories will appear in Spotlight search results.
          </span>
        </div>
        <Separator className="bg-white/10" />
        {checkboxItems.map((item) => (
          <>
            <CheckboxItem
              key={item.id}
              id={item.id}
              label={item.label}
              checked={item.checked}
            />
            <Separator className="bg-white/10" />
          </>
        ))}
      </ContentBox>

      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Spotlight Privacy...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}

function CheckboxItem({ id, label, checked }: CheckboxItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        className="bg-white/20 data-[state=checked]:bg-white/20 data-[state=checked]:text-white font-bold border-white/20"
      />
      <label
        htmlFor="terms"
        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
