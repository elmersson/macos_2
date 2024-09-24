'use client';

import { useEffect, useState } from 'react';
import { useAppStore, useSystemStore } from './providers/store-provider';
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty
} from './ui/command';
import Image from 'next/image';
import { SiRaycast } from 'react-icons/si';
import { cn } from '@/lib/utils';
import { AiOutlineEnter } from 'react-icons/ai';
import { evaluate } from 'mathjs';
import { debounce } from '@/lib/debounce';
import { toWords } from 'number-to-words';

const getOperationText = (input: string) => {
  const operations = ['+', '-', '*', '/', '^'];
  const foundOperations = operations.filter((op) => input.includes(op));

  if (foundOperations.length > 1) return 'Expression';

  if (input.includes('+')) return 'Sum';
  if (input.includes('-')) return 'Difference';
  if (input.includes('*')) return 'Product';
  if (input.includes('/')) return 'Divide';

  return 'Calculation';
};

export function SearchCommand() {
  const [isMounted, setIsMounted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [mathResult, setMathResult] = useState<string | null>(null);

  const { openApp, bringToFront, apps } = useAppStore((state) => state);
  const { isOpen, toggle, onClose } = useSystemStore((state) => state);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }

      if (e.key === 'Enter' && mathResult) {
        navigator.clipboard.writeText(mathResult);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [toggle, mathResult]);

  const onSelect = (id: string) => {
    openApp(id);
    bringToFront(id);
    onClose();
  };

  useEffect(() => {
    const evaluateMath = debounce((input: string) => {
      const mathRegex = /^[0-9+\-*/().\s]+$/;

      if (mathRegex.test(input)) {
        try {
          const result = evaluate(input);

          console.log(result);

          setMathResult(result.toString());
        } catch {
          setMathResult('Error');
        }
      } else {
        setMathResult(null);
      }
    }, 300);

    evaluateMath(inputValue);
  }, [inputValue]);

  if (!isMounted) {
    return null;
  }

  const appList = Array.isArray(apps) && apps.length > 0 ? apps : [];

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput
        placeholder="Search for apps"
        value={inputValue}
        onValueChange={setInputValue}
      />

      {inputValue.length > 0 && (
        <CommandList className="scrollbar-hide">
          {!mathResult && (
            <CommandEmpty className="p-2">No results found.</CommandEmpty>
          )}
          {appList && appList.length > 0 && (
            <CommandGroup heading="Welcome to Raycast">
              {appList.map(
                (app) =>
                  app?.id && (
                    <CommandItem
                      key={app.id}
                      title={app.title}
                      value={`${app.id}-${app.title}`}
                      onSelect={() => onSelect(app.id)}
                    >
                      <Image src={app.img} alt={app.title} className="w-6" />
                      <span className="ml-4">{app.title}</span>
                    </CommandItem>
                  )
              )}
            </CommandGroup>
          )}
        </CommandList>
      )}
      {mathResult && (
        <>
          <div className="w-full h-0.5 bg-neutral-400/10 mb-2" />
          <div className="flex flex-col items-center bg-dark-gray px-4 rounded-lg">
            <span className="text-sm mb-2 px-2 self-start text-neutral-400">
              Calculator
            </span>

            <div className="flex justify-between items-center bg-gray-500/20 p-4 rounded-md w-full">
              <div className="flex flex-col items-center p-4 w-1/2 text-center rounded-l-md">
                <span className="text-2xl font-semibold text-white line-clamp-1">
                  {inputValue}
                </span>
                <span className="text-sm mt-4 text-white line-clamp-1 bg-neutral-400/20 p-2 rounded-lg">
                  {getOperationText(inputValue)}
                </span>
              </div>

              <div className="w-0.5 h-full bg-neutral-400/20 mx-2" />

              <div className="flex flex-col items-center p-4 w-1/2 text-center rounded-r-md">
                <span className="text-2xl font-semibold text-white line-clamp-1">
                  {mathResult}
                </span>
                <span className="text-sm mt-4 text-white line-clamp-1 bg-neutral-400/20 p-2 rounded-lg">
                  {mathResult !== 'Error'
                    ? toWords(mathResult).charAt(0).toUpperCase() +
                      toWords(mathResult).slice(1)
                    : 'Error'}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex items-center justify-between border-t border-gray-700 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <SiRaycast
            size={20}
            className={cn(
              'text-orange-600 ml-4 mr-2',
              inputValue.length > 0 && 'text-neutral-500'
            )}
          />
          {inputValue === '' && <span>See what&apos;s new? v1.83.0</span>}
        </div>

        <kbd className="flex items-center space-x-4 mr-4">
          <span className="text-sm font-bold">
            {mathResult ? 'Copy answer' : 'Open App'}
          </span>
          <span className="bg-neutral-400/20 rounded-sm p-1">
            <AiOutlineEnter />
          </span>
        </kbd>
      </div>
    </CommandDialog>
  );
}
