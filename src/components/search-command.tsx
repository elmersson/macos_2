'use client';

import { useEffect, useState } from 'react';
import { useAppStore, useSystemStore } from './providers/store-provider';
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from './ui/command';
import { CommandEmpty } from 'cmdk';
import Image from 'next/image';
import { SiRaycast } from 'react-icons/si';
import { cn } from '@/lib/utils';
import { AiOutlineEnter } from 'react-icons/ai';
import { evaluate } from 'mathjs';

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
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [toggle]);

  const onSelect = (id: string) => {
    openApp(id);
    bringToFront(id);
    onClose();
  };

  useEffect(() => {
    const evaluateMath = (input: string) => {
      const mathRegex = /^[0-9+\-*/().\s]+$/;

      console.log(mathRegex.test(input));
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
    };

    evaluateMath(inputValue);
  }, [inputValue]);

  if (!isMounted) {
    return null;
  }

  const appList = Array.isArray(apps) ? apps : [];

  console.log(appList);

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput
        placeholder="Search for apps"
        value={inputValue}
        onValueChange={setInputValue}
      />
      {inputValue.length > 0 && mathResult !== null ? (
        <CommandList className="scrollbar-hide">
          <CommandItem>
            <span className="ml-4">Result: {mathResult}</span>
          </CommandItem>
        </CommandList>
      ) : (
        inputValue.length > 0 && (
          <CommandList className="scrollbar-hide">
            <CommandEmpty>No results found.</CommandEmpty>
            {appList && appList.length > 0 && (
              <CommandGroup heading="Welcome to Raycast">
                {appList.map((app) => (
                  <CommandItem
                    key={app.id}
                    title={app.title}
                    value={`${app.id}-${app.title}`}
                    onSelect={() => onSelect(app.id)}
                  >
                    <Image src={app.img} alt={app.title} className="w-6" />
                    <span className="ml-4">{app.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        )
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
          <span className="text-sm font-bold">Open App</span>
          <span className="bg-neutral-400/20 rounded-sm p-1">
            <AiOutlineEnter />
          </span>
        </kbd>
      </div>
    </CommandDialog>
  );
}
