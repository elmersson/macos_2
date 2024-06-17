import { cn } from '@/lib/utils';
import { Roboto_Mono } from 'next/font/google';
import { DraggableItem } from './draggable-item';
import { AppProps } from '@/data/Apps';
import { FormEvent, useState, KeyboardEvent, useRef, ReactNode } from 'react';
import { useFinderStore, useItermStore } from '../providers/store-provider';
import { FinderData } from '@/data/finderData';

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '700']
});
export function Iterm2({ appData }: AppProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { finderDataSet, removeById } = useFinderStore((state) => state);

  const [historyIndex, setHistoryIndex] = useState(-1);
  const { addHistory, setCurDir, setVisibleHistory, iterm2 } = useItermStore(
    (state) => state
  );

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
      case 'rm':
        removeByTitleInCurrentDir(argument);
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
    const currentDir = iterm2.curDir ?? 'macintosh-hd';

    if (!dir || dir === '~') {
      setCurDir('macintosh-hd');
      return;
    }

    if (dir === '..') {
      const currentDirectory = findDirectoryById(currentDir, finderDataSet);
      const parentDirectory = currentDirectory
        ? findParentDirectory(currentDirectory.id, finderDataSet)
        : null;

      if (parentDirectory) {
        setCurDir(parentDirectory.id);
      } else {
        console.log('No parent directory found');
      }
    } else {
      const currentDirectory = findDirectoryById(currentDir, finderDataSet);
      const newDir =
        currentDirectory && currentDirectory.children
          ? findDirectoryByTitle(dir, currentDirectory.children)
          : findDirectoryByTitle(dir, finderDataSet);

      if (newDir) {
        setCurDir(newDir.id);
      } else {
        console.log('Directory not found');
      }
    }
  };

  const findDirectoryById = (
    id: string,
    nodes: FinderData[]
  ): FinderData | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findDirectoryById(id, node.children);
        if (found) return found;
      }
    }
    return null;
  };

  const findDirectoryByTitle = (
    title: string,
    nodes: FinderData[]
  ): FinderData | null => {
    for (const node of nodes) {
      if (node.title.toLowerCase() === title.toLowerCase()) return node;
      if (node.children) {
        const found = findDirectoryByTitle(title, node.children);
        if (found) return found;
      }
    }
    return null;
  };

  const findParentDirectory = (
    currentDirId: string,
    nodes: FinderData[]
  ): FinderData | null => {
    for (const node of nodes) {
      if (node.children) {
        for (const child of node.children) {
          if (child.id === currentDirId) {
            return node;
          }
        }
        const foundInChildren = findParentDirectory(
          currentDirId,
          node.children
        );
        if (foundInChildren) return foundInChildren;
      }
    }
    return null;
  };

  const removeByTitleInCurrentDir = (title: string) => {
    const currentDir = iterm2.curDir ?? 'macintosh-hd';
    const currentDirectory = findDirectoryById(currentDir, finderDataSet);
    if (!currentDirectory) {
      console.log('Current directory not found');
      return;
    }

    const fileToRemove = currentDirectory.children?.find(
      (child) => child.title.toLowerCase() === title.toLowerCase()
    );

    if (fileToRemove) {
      removeById(fileToRemove.id);
    } else {
      console.log('File not found in the current directory');
    }
  };

  const renderContent = (fileTitle: string): ReactNode => {
    const findFileByTitle = (
      title: string,
      nodes: FinderData[]
    ): FinderData | null => {
      for (const node of nodes) {
        if (
          node.title.toLowerCase() === title.toLowerCase() &&
          node.type === 'file'
        )
          return node;
        if (node.children) {
          const found = findFileByTitle(title, node.children);
          if (found) return found;
        }
      }
      return null;
    };

    const file = findFileByTitle(fileTitle, finderDataSet);
    return file && file.content ? file.content : 'File not found.';
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
                {entry.command === 'ls' && (
                  <ListFiles dir={entry.dir} data={finderDataSet} />
                )}
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
        <span>rm {'<file>'}</span> - Remove the specified file
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
  data: FinderData[];
}

function ListFiles({ dir, data }: ListFilesProps) {
  const findDirectoryById = (
    id: string,
    nodes: FinderData[]
  ): FinderData | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findDirectoryById(id, node.children);
        if (found) return found;
      }
    }
    return null;
  };

  const directory = dir ? findDirectoryById(dir, data) : { children: data };

  if (directory && directory.children) {
    return (
      <div className="w-full flex flex-row space-x-2">
        {directory.children.map((child) => (
          <div
            key={child.id}
            className={cn(
              'text-sm',
              child.type !== 'file' && 'font-bold text-teal-300'
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
