'use client';

import { ReactNode } from 'react';
import { Drawer } from 'vaul';

interface MyDrawerProps {
  trigger: ReactNode;
  content: ReactNode;
}

export function MyDrawer({ trigger, content }: MyDrawerProps) {
  return (
    <Drawer.Root direction="right" shouldScaleBackground={false}>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="bg-none -z-50" />
        <Drawer.Content className="flex flex-col rounded-t-[10px] h-[97%] w-[400px] mt-64 fixed bottom-0 right-0 outline-none pr-3">
          {content}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
