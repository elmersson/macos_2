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

export function SearchCommand() {
  const [isMounted, setIsMounted] = useState(false);
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

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder="Search for apps" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Welcome to Raycast">
          {apps.map((app) => (
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
      </CommandList>
    </CommandDialog>
  );
}
