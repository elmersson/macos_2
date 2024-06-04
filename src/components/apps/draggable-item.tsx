import React, { ReactNode, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import ActionButtons from './action-buttons';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { AppData } from '@/data/Apps';
import { useAppStore } from '../providers/store-provider';

interface DraggableItemProps {
  children: ReactNode;
  barItem?: ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  actionButtonStyle?: React.ComponentProps<'div'>['className'];
  appData: AppData;
  minWidth?: number;
  minHeight?: number;
}

export const NAVBAR_HEIGHT = 40;

export function DraggableItem({
  children,
  barItem,
  className,
  actionButtonStyle,
  appData,
  minWidth = 100,
  minHeight = 100
}: DraggableItemProps) {
  const { setSize, setPosition, bringToFront, closeApp, minimizeApp } =
    useAppStore((state) => state);
  const { size, position } = appData;

  const [lastState, setLastState] = useState({
    size: { width: 640, height: 400 },
    position: {
      x: 0,
      y: NAVBAR_HEIGHT
    }
  });

  useEffect(() => {
    if (appData.position.y === 0) {
      const initialSize = {
        width: window.innerWidth / 2,
        height: (window.innerHeight - NAVBAR_HEIGHT) / 2
      };
      const centerX = (window.innerWidth - initialSize.width) / 2;
      const centerY =
        (window.innerHeight - initialSize.height - NAVBAR_HEIGHT) / 2;

      setSize(appData.id, initialSize);
      setPosition(appData.id, { x: centerX, y: centerY });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResize = (
    _event: React.SyntheticEvent,
    data: ResizeCallbackData
  ) => {
    const { size: newSize, handle } = data;

    const deltaX = handle.includes('w') ? size.width - newSize.width : 0;
    const deltaY = handle.includes('n') ? size.height - newSize.height : 0;

    setSize(appData.id, newSize);

    setPosition(appData.id, {
      x: appData.position.x + deltaX,
      y: appData.position.y + deltaY
    });

    setLastState({ size, position });
  };

  const handleFullscreen = () => {
    if (
      size.height !== window.innerHeight - NAVBAR_HEIGHT &&
      size.width !== window.innerWidth
    ) {
      setLastState({ size, position });

      setSize(appData.id, {
        width: window.innerWidth,
        height: window.innerHeight - NAVBAR_HEIGHT
      });
      setPosition(appData.id, { x: 0, y: NAVBAR_HEIGHT });
    } else {
      setSize(appData.id, lastState.size);
      setPosition(appData.id, lastState.position);
    }
  };

  return (
    <div
      style={{
        zIndex: appData.z,
        position: 'absolute'
      }}
      onClick={() => bringToFront(appData.id)}
    >
      <Draggable
        handle=".handle"
        bounds={{
          left: 0,
          top: NAVBAR_HEIGHT,
          right: window.innerWidth - size.width,
          bottom: window.innerHeight - size.height
        }}
        position={position}
        onStop={(e, data) => {
          setPosition(appData.id, { x: data.x, y: data.y });
        }}
      >
        <div onClick={() => bringToFront(appData.id)}>
          <ResizableBox
            width={size.width}
            height={size.height}
            onResize={handleResize}
            handle={(handleAxis, ref) => (
              <span
                className={`react-resizable-handle react-resizable-handle-${handleAxis}`}
                ref={ref}
              />
            )}
            resizeHandles={['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']}
            minConstraints={[minWidth, minHeight]}
          >
            <div className="flex flex-col w-full h-full shadow-lg">
              <div
                className={`handle flex items-center bg-[#3c3c3c] ${className} `}
                onDoubleClick={handleFullscreen}
              >
                <ActionButtons
                  exit={() => closeApp(appData.id)}
                  minimize={() => minimizeApp(appData.id)}
                  fullSize={handleFullscreen}
                  className={actionButtonStyle}
                />
                {barItem}
              </div>
              <div className="w-full flex-1">{children}</div>
            </div>
          </ResizableBox>
        </div>
      </Draggable>
    </div>
  );
}
