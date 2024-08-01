import { ChevronRight } from 'lucide-react';
import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { IoIosCloud } from 'react-icons/io';

export function InternetAccount() {
  return (
    <div>
      <ContentBox className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-2">
          <div className="mt-1">
            <span className="bg-white text-blue-500 w-6 h-6 flex items-center justify-center rounded">
              <IoIosCloud />
            </span>
          </div>
          <div className="flex flex-col">
            <span>iCloud</span>
            <span className="text-sm text-neutral-400">
              iCloud Drive, Contacts, Calendars, Safari, Reminders, Notes,
              Wallet, Find My Mac, Stocks, Freeform, iCloud Photos, Home,
              Keychain, and Siri
            </span>
          </div>
        </div>
        <div>
          <ChevronRight size={16} className="text-neutral-400" />
        </div>
      </ContentBox>
      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Add Account...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
