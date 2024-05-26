import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { DockItem } from './dock-item';
import { Trashcan } from './trashcan';
import { Separator } from './ui/separator';
import { useAppStore } from './providers/store-provider';

export default function Dock() {
  const { apps } = useAppStore((state) => state);
  const [isDockFocused, setIsDockFocused] = useState(false);
  const controls = useAnimation();

  const initialY = '120%';
  const animateY = isDockFocused ? '0%' : '120%';

  const handleMouseEnter = () => {
    controls.start({ y: '0%' });
    setIsDockFocused(true);
  };

  const handleMouseLeave = () => {
    controls.start({ y: initialY });
    setIsDockFocused(false);
  };

  const initialApps = apps.slice(0, 8);

  const openApps = apps.filter(
    (app) => app.isOpen && !initialApps.includes(app)
  );

  const dockApps = [...initialApps, ...openApps];

  const minimizedApps = apps.filter((app) => app.isMinimized);

  return (
    <motion.div
      className="fixed bottom-2 left-0 w-full flex justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.ul
        className="bg-clip-padding backdrop-filter backdrop-blur-md bg-neutral-300/20 border border-neutral-100/20 dark:bg-neutral-500/10 dark:border-neutral-300/20 flex rounded-3xl p-1 space-x-2 items-center"
        initial={{ y: initialY }}
        animate={{ y: animateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {dockApps.map((app) => (
          <DockItem
            key={app.id}
            title={app.title}
            img={app.img}
            id={app.id}
            isOpen={app.isOpen}
          />
        ))}
        <Separator
          orientation="vertical"
          className="h-[80%] bg-neutral-400/40"
        />
        {minimizedApps.map((app) => {
          if (app.miniImg) {
            return (
              <DockItem
                key={app.id}
                title={app.title}
                img={app.miniImg}
                id={app.id}
                isOpen={false}
              />
            );
          }
        })}
        <Trashcan />
      </motion.ul>
    </motion.div>
  );
}
