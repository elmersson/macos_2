import { cn } from '@/lib/utils';
import { Roboto_Mono } from 'next/font/google';
import { DraggableItem } from './draggable-item';
import { AppProps, iTerm2Data } from '@/data/Apps';
import { FormEvent, useState, KeyboardEvent, useRef, ReactNode } from 'react';
import { useSystem } from '@/hooks/useSystem';

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '700']
});
export function Iterm2({ appData }: AppProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const [historyIndex, setHistoryIndex] = useState(-1);
  const { addHistory, setCurDir, setVisibleHistory, iterm2 } = useSystem();

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = () => {
    const commandParts = input.trim().split(' ');
    const command = commandParts[0];
    const argument = commandParts.slice(1).join(' ');

    addHistory({
      command: input,
      dir: iterm2.curDir,
      index: iterm2.history.length
    });

    switch (command.toLowerCase()) {
      case 'clear':
        setVisibleHistory(iterm2.history.length + 1);
        break;
      case 'cd':
        changeDirectory(argument);
        break;
      case 'cat':
        break;
      case 'help':
        break;

      default:
        console.log(command, argument);
    }
    setInput('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCommand();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      const newIndex = historyIndex + 1;
      if (newIndex < iterm2.history.length - iterm2.visibleHistory) {
        setHistoryIndex(newIndex);
        setInput(iterm2.history[iterm2.history.length - 1 - newIndex].command);
      }
    } else if (e.key === 'ArrowDown') {
      const newIndex = historyIndex - 1;
      if (newIndex >= -1) {
        setHistoryIndex(newIndex);
        setInput(
          newIndex === -1
            ? ''
            : iterm2.history[iterm2.history.length - 1 - newIndex].command
        );
      }
    }
  };

  const changeDirectory = (dir: string) => {
    if (!dir) {
      setCurDir('');
      return;
    }

    if (dir === '..') {
      const currentPath = iterm2.curDir ? iterm2.curDir.split('/') : [];
      if (currentPath.length > 1) {
        currentPath.pop();
        setCurDir(currentPath.join('/'));
      } else {
        setCurDir('');
      }
    } else if (dir === '~') {
      setCurDir('');
    } else {
      const newDir = findDirectory(iterm2.curDir || '', dir);
      if (newDir) {
        setCurDir(newDir.id);
      } else {
        console.log('Directory not found');
      }
    }
  };

  const findDirectory = (currentDir: string, dirId: string) => {
    const directory = iterm2Data.find((item) => item.id === currentDir);
    if (directory && directory.children) {
      return directory.children.find((child) => child.id === dirId);
    } else if (!currentDir) {
      return iterm2Data.find((item) => item.id === dirId);
    }
    return null;
  };

  const findItemByTitle = (
    title: string,
    data: iTerm2Data[] = iterm2Data
  ): iTerm2Data | null => {
    for (let item of data) {
      if (item.title === title) {
        return item;
      }
      if (item.children) {
        const found = findItemByTitle(title, item.children);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  const renderContent = (fileId: string): ReactNode => {
    const item = findItemByTitle(fileId);

    return item && item.type === 'file' ? item.content : 'File not found.';
  };

  return (
    <DraggableItem appData={appData} barItem={barItem()}>
      <div
        className={cn(
          'w-full h-full flex flex-col bg-slate-900/80 bg-clip-padding backdrop-filter backdrop-blur-sm border-l border-r border-b px-1 border-slate-400/60',
          font.className
        )}
        onClick={focusInput}
      >
        <span className="text-sm text-neutral-300 mb-3">
          Last login: Wed Mar 6 06:52:22 on ttys00
        </span>
        <div className="space-y-2">
          <div className="overflow-y-auto text-white space-y-2">
            {iterm2.history.slice(iterm2.visibleHistory).map((entry, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-teal-300 font-bold text-sm">
                  ~{entry.dir && `/${entry.dir}`}
                </span>
                <div className="space-x-2">
                  <span className="text-green-300">&gt;</span>
                  <span className="text-sm">{entry.command}</span>
                </div>
                {entry.command === 'help' && <Help />}
                {entry.command === 'ls' && <ListFiles dir={entry.dir} />}
                {entry.command.startsWith('cat') && (
                  <div className="text-white text-sm mt-2">
                    {renderContent(entry.command.split(' ')[1])}
                  </div>
                )}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <span className="text-teal-300 font-bold text-sm">
              ~{iterm2.curDir && `/${iterm2.curDir}`}
            </span>
            <div className="flex flex-row">
              <span className="text-green-300 mr-2">&gt;</span>
              <input
                type="text"
                ref={inputRef}
                className="w-full bg-transparent text-white outline-none text-sm caret-white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </form>
        </div>
      </div>
    </DraggableItem>
  );
}

function barItem() {
  return (
    <div className="text-sm text-white/40 flex justify-center w-full">
      rasmuselmersson@Rasmus-MacBook-Pro:~
    </div>
  );
}

function Help() {
  return (
    <ul className="list-disc ml-6 pb-1.5 text-sm text-red-400">
      <li>
        <span>cat {'<file>'}</span> - See the content of {'<file>'}
      </li>
      <li>
        <span>cd {'<dir>'}</span> - Move into
        {' <dir>'}, &quot;cd ..&quot; to move to the parent directory,
        &quot;cd&quot; or &quot;cd ~&quot; to return to root
      </li>
      <li>
        <span>ls</span> - See files and directories in the current directory
      </li>
      <li>
        <span>clear</span> - Clear the screen
      </li>
      <li>
        <span>help</span> - Display this help menu
      </li>
      <li>
        press <span>up arrow / down arrow</span> - Select history commands
      </li>
    </ul>
  );
}

interface ListFilesProps {
  dir?: string;
}

function ListFiles({ dir }: ListFilesProps) {
  if (!dir) {
    return (
      <div className="w-full flex flex-row space-x-2">
        {iterm2Data.map((item) => (
          <div
            key={item.id}
            className={cn(
              'text-sm',
              item.type === 'folder' && 'font-bold text-teal-300'
            )}
          >
            {item.title}
          </div>
        ))}
      </div>
    );
  }

  const directory = iterm2Data.find((item) => item.id === dir && item.children);
  if (directory && directory.children) {
    return (
      <div className="w-full flex flex-row space-x-2">
        {directory.children.map((child) => (
          <div
            key={child.id}
            className={cn(
              'text-sm',
              child.type === 'folder' && 'font-bold text-teal-300'
            )}
          >
            {child.title}
          </div>
        ))}
      </div>
    );
  }

  return <div>No files found.</div>;
}

export const iterm2Data: iTerm2Data[] = [
  {
    id: 'about',
    title: 'about',
    type: 'folder',
    children: [
      {
        id: 'about-bio',
        title: 'bio.txt',
        type: 'file',
        content: (
          <div className="py-1">
            <div>
              Hi, im Rasmus Elmersson. A Frontend developer from Stockholm
              currently working on Regent Ab
            </div>
          </div>
        )
      },
      {
        id: 'about-interests',
        title: 'interests.txt',
        type: 'file',
        content: 'Machine Learning / Fotball / Craftmanship'
      },
      {
        id: 'about-contact',
        title: 'contact.txt',
        type: 'file',
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{' '}
              <a
                className="text-blue-300"
                href="mailto:elmerssonrasmus@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                elmerssonrasmus@gmail.com
              </a>
            </li>
            <li>
              Github:{' '}
              <a
                className="text-blue-300"
                href="https://github.com/elmersson"
                target="_blank"
                rel="noreferrer"
              >
                @elmersson
              </a>
            </li>
            <li>
              Linkedin:{' '}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/rasmus-elmersson-79a161174/"
                target="_blank"
                rel="noreferrer"
              >
                rasmus-elmersson
              </a>
            </li>
            <li>
              Personal Website:{' '}
              <a
                className="text-blue-300"
                href="https://rasmuselmersson.se"
                target="_blank"
                rel="noreferrer"
              >
                https://rasmuselmersson.se
              </a>
            </li>
          </ul>
        )
      }
    ]
  }
];
