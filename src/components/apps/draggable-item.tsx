import React, { ReactNode, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import ActionButtons from './action-buttons';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface DraggableItemProps {
  children: ReactNode;
  onclose(): void;
}

const NAVBAR_HEIGTH = 40;

export function DraggableItem({ children, onclose }: DraggableItemProps) {
  const [size, setSize] = useState({ width: 640, height: 400 });
  const [position, setPosition] = useState({ x: 0, y: NAVBAR_HEIGTH });
  const [lastState, setLastState] = useState({
    size: { width: 640, height: 400 },
    position: {
      x: 0,
      y: NAVBAR_HEIGTH
    }
  });

  useEffect(() => {
    const centerX = (window.innerWidth - size.width) / 2;
    const centerY = (window.innerHeight - size.height - NAVBAR_HEIGTH) / 2;
    setPosition({ x: centerX, y: centerY });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResize = (
    _event: React.SyntheticEvent,
    data: ResizeCallbackData
  ) => {
    const { size: newSize, handle } = data;

    const deltaX = handle.includes('w') ? size.width - newSize.width : 0;
    const deltaY = handle.includes('n') ? size.height - newSize.height : 0;

    setSize({ width: newSize.width, height: newSize.height });

    setPosition((prev) => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));

    setLastState({ size, position });
  };

  const handleFullscreen = () => {
    if (
      size.height !== window.innerHeight - NAVBAR_HEIGTH &&
      size.width !== window.innerWidth
    ) {
      setLastState({ size, position });

      setSize({
        width: window.innerWidth,
        height: window.innerHeight - NAVBAR_HEIGTH
      });
      setPosition({ x: 0, y: NAVBAR_HEIGTH });
    } else {
      setSize(lastState.size);
      setPosition(lastState.position);
    }
  };

  return (
    <Draggable
      handle=".handle"
      bounds={{
        left: 0,
        top: NAVBAR_HEIGTH,
        right: window.innerWidth - size.width,
        bottom: window.innerHeight - size.height
      }}
      position={position}
      onStop={(e, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
    >
      <div>
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
        >
          <div className="flex flex-col w-full h-full shadow-lg">
            <div
              className="handle flex items-center justify-between bg-[#3c3c3c] rounded-t-md py-2 px-4"
              onDoubleClick={handleFullscreen}
            >
              <ActionButtons exit={onclose} fullSize={handleFullscreen} />
            </div>
            <div className="w-full flex-1">{children}</div>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
}
