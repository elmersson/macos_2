import { FaGlobe } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { BsArchive, BsCalendar3, BsFlag } from 'react-icons/bs';
import { RiFolderSharedLine } from 'react-icons/ri';
import { HiOutlineUsers } from 'react-icons/hi2';
import { TiStarOutline } from 'react-icons/ti';
import { PiCheckFatLight } from 'react-icons/pi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import { LuPanelRightClose } from 'react-icons/lu';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/outlook_accordion';
import { DraggableItem } from './draggable-item';
import { AppProps } from '@/data/Apps';
import { useState } from 'react';
import { useOutlookStore } from '../providers/store-provider';
import { EmailProps } from '@/data/emails';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { getColorClassFromString } from '@/lib/color/color';
import { BiSolidInbox } from 'react-icons/bi';

const SIDE_BAR_WIDTH = 320;

export function Outlook({ appData }: AppProps) {
  return (
    <DraggableItem appData={appData} minHeight={700} minWidth={1200}>
      <div className="w-full h-full bg-slate-800/70 bg-clip-padding backdrop-filter backdrop-blur-xl flex flex-row">
        <AppBar />
        <div className="w-full flex flex-col">
          <TopBar />
          <MainPane />
        </div>
      </div>
    </DraggableItem>
  );
}

function TopBar() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', data);
      } else {
        console.error('Error sending email:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-2 flex flex-row items-center justify-between">
      <div
        className={`flex flex-row items-center w-[${SIDE_BAR_WIDTH}px] space-x-2`}
      >
        <RxHamburgerMenu className="size-[1.35rem]" />
        <button
          className="flex flex-row bg-blue-500 rounded-lg space-x-2 px-3 py-1 items-center"
          onClick={sendEmail}
          disabled={isLoading}
        >
          <FiEdit className="size-[1.35rem]" />
          <span className="">{isLoading ? 'Sending...' : 'New Email'}</span>
        </button>
      </div>
      <div className="flex flex-row items-center space-x-7">
        <div className="flex flex-row space-x-2">
          <HiOutlineTrash className="size-[1.35rem]" />
          <span>Delete</span>
        </div>
        <div className="flex flex-row space-x-2">
          <BsArchive className="size-[1.35rem]" />
          <span>Archive</span>
        </div>
        <div className="flex flex-row space-x-2">
          <RiFolderSharedLine className="size-[1.35rem]" />
          <span>Move</span>
        </div>
        <div className="flex flex-row space-x-2">
          <BsFlag className="size-[1.35rem]" />
          <span>Flag</span>
        </div>
        <div className="flex flex-row space-x-2">
          <HiOutlineTrash className="size-[1.35rem]" />
          <span>Mark as Unread</span>
        </div>
        <div className="flex flex-row space-x-2">
          <HiOutlineTrash className="size-[1.35rem]" />
          <span>Sync</span>
        </div>
        <div>
          <HiDotsHorizontal className="size-[1.35rem]" />
        </div>
      </div>
      <div className="p-2">
        <LuPanelRightClose className="size-4" />
      </div>
    </div>
  );
}

function AppBar() {
  return (
    <div className="p-2 space-y-4 bg-neutral-700/20">
      <div className="space-y-1 bg-neutral-700 rounded-full p-1 shadow-md">
        <div className="bg-neutral-800 p-2 rounded-full shadow-md">
          <FaGlobe className="size-5 text-blue-500" />
        </div>
        <div className="bg-neutral-700 p-2 rounded-full shadow-md shadow-white/30 border border-white/10">
          <BsPlusLg className="size-5 text-white" />
        </div>
      </div>
      <div className="text-white flex flex-col space-y-1">
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <GrMail className="size-5 m-2 text-blue-500" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <BsCalendar3 className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <HiOutlineUsers className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <TiStarOutline className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <PiCheckFatLight className="size-5 m-2" />
        </div>
        <div className=" hover:bg-neutral-50/30 rounded-full flex justify-center items-center">
          <HiDotsHorizontal className="size-5 m-2" />
        </div>
      </div>
    </div>
  );
}

function MainPane() {
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full px-2 flex-1">
      <MailList />
      <ResizableHandle />
      <Mails />
      <ResizableHandle />
      <MailContent />
      <ResizableHandle />
      <Agenda />
    </ResizablePanelGroup>
  );
}

function MailList() {
  const { setSelectedAccount, selectedAccount } = useOutlookStore(
    (state) => state
  );
  return (
    <ResizablePanel defaultSize={25}>
      <div className="p-2 h-full rounded-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              <span className="line-clamp-1">Favorites</span>
            </AccordionTrigger>
            <AccordionContent>
              <div
                role="button"
                className={cn(
                  'flex flex-row items-center space-x-2 pl-6 rounded-lg',
                  selectedAccount === 'favorites' &&
                    'text-blue-500 bg-neutral-700'
                )}
                onClick={() => setSelectedAccount('favorites')}
              >
                <BiSolidInbox /> <span>Inbox</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              All Accounts
            </AccordionTrigger>
            <AccordionContent>
              <div
                role="button"
                className={cn(
                  'flex flex-row items-center space-x-2 pl-6 rounded-lg',
                  selectedAccount === 'all' && 'text-blue-500 bg-neutral-700'
                )}
                onClick={() => setSelectedAccount('all')}
              >
                <BiSolidInbox /> <span>Inbox</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              rasmus.elmersson@regent.se
            </AccordionTrigger>
            <AccordionContent>
              <div
                role="button"
                className={cn(
                  'flex flex-row items-center space-x-2 pl-6 rounded-lg',
                  selectedAccount === 'rasmus.elmersson@regent.se' &&
                    'text-blue-500 bg-neutral-700'
                )}
                onClick={() => setSelectedAccount('rasmus.elmersson@regent.se')}
              >
                <BiSolidInbox /> <span>Inbox</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              rasmus.elmersson@martinservera.se
            </AccordionTrigger>
            <AccordionContent>
              <div
                role="button"
                className={cn(
                  'flex flex-row items-center space-x-2 pl-6 rounded-lg',
                  selectedAccount === 'rasmus.elmersson@martinservera.se' &&
                    'text-blue-500 bg-neutral-700'
                )}
                onClick={() =>
                  setSelectedAccount('rasmus.elmersson@martinservera.se')
                }
              >
                <BiSolidInbox /> <span>Inbox</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold text-white">
              Saved Searches
            </AccordionTrigger>
            <AccordionContent>
              <div>Content</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ResizablePanel>
  );
}

function Mails() {
  const { getEmailsForSelectedAccount, selectedEmail, setSelectedEmail } =
    useOutlookStore((state) => state);

  const emails = getEmailsForSelectedAccount();
  return (
    <ResizablePanel defaultSize={20}>
      <div className="h-full rounded-md bg-neutral-800 flex flex-col">
        {emails.map((email) => {
          const isSelected = email.id === selectedEmail;
          return (
            <EmailListItem
              key={email.id}
              email={email}
              isSelected={isSelected}
              setSelectedEmail={setSelectedEmail}
            />
          );
        })}
      </div>
    </ResizablePanel>
  );
}

function EmailListItem({
  email,
  isSelected,
  setSelectedEmail
}: {
  email: EmailProps;
  isSelected: boolean;
  // eslint-disable-next-line no-unused-vars
  setSelectedEmail: (id: string) => void;
}) {
  const date = format(email.receivedDate, 'yyyy-mm-dd');
  const randomColorClass = getColorClassFromString(email.from);

  return (
    <div
      className={cn(isSelected && 'bg-white/20 rounded-t-md')}
      onClick={() => setSelectedEmail(email.id)}
    >
      <div className="flex flex-row w-full py-2 px-2">
        <div className="w-[20%]">
          <div className="flex flex-row space-x-2 items-center">
            <div
              className={cn(
                'w-2 h-2 rounded-full',
                !email.read && 'bg-blue-500'
              )}
            />
            <div
              className={`${randomColorClass} w-7 h-7 rounded-full items-center justify-center flex`}
            >
              <span>{email.from.slice(0, 1).toUpperCase()}</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <span
            className={cn('line-clamp-1 text-lg', !email.read && 'font-bold')}
          >
            {email.from}
          </span>
          <div
            className={cn(
              'flex flex-row space-x-1 text-sm',
              !email.read && 'text-blue-500'
            )}
          >
            <span className="line-clamp-1">{email.subject}</span>
            <span>{date}</span>
          </div>
          <span className="line-clamp-1 text-sm">{email.body}</span>
        </div>
      </div>
      <Separator className="bg-neutral-400/20" />
    </div>
  );
}

function MailContent() {
  const { getSelectedEmail } = useOutlookStore((state) => state);

  const email = getSelectedEmail();
  return (
    <ResizablePanel defaultSize={50}>
      <div className="p-6 h-full rounded-md bg-neutral-800">
        {email ? (
          <EmailContent email={email} />
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <span className="text-lg">No Conversation Selected</span>
            <span className="text-sm">Select a conversation to read.</span>
          </div>
        )}
      </div>
    </ResizablePanel>
  );
}

function EmailContent({ email }: { email: EmailProps }) {
  const randomColorClass = getColorClassFromString(email.from);
  return (
    <div className="flex flex-col h-full space-y-4">
      <span className="text-lg">{email.subject}</span>
      <div className="flex flex-row space-x-4">
        <div
          className={`${randomColorClass} w-12 h-12 rounded-full items-center justify-center flex`}
        >
          <span className="text-lg">
            {email.from.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row items-center space-x-2">
            <div className="w-3 h-3 rounded-full border border-white " />
            <span className="text-lg">{email.from}</span>
          </div>
          <div className="space-x-2 text-sm">
            <span className="font-bold">To:</span>
            {email.to.map((email) => (
              <span key={email} className="text-neutral-400">
                {email}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg h-full">
        <span className="text-black">{email.body}</span>
      </div>
    </div>
  );
}

function Agenda() {
  return (
    <ResizablePanel defaultSize={15}>
      <div className="p-2 h-full rounded-md bg-neutral-800">
        <span className="font-semibold">Three</span>
      </div>
    </ResizablePanel>
  );
}
