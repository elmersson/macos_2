import { useState } from 'react';
import { PiMinusBold } from 'react-icons/pi';
import { RiExpandLeftRightFill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

interface ActionButtonsProps {
  exit: () => void;
  fullSize: () => void;
  className?: React.ComponentProps<'div'>['className'];
}

export default function ActionButtons({
  exit,
  fullSize,
  className
}: ActionButtonsProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-center px-3 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="rounded-full h-3 w-3 p-2 bg-[#FF6157] border-[#E24640] flex justify-center items-center"
        onClick={exit}
      >
        {hovered && (
          <RxCross2
            className="text-slate-900"
            style={{ fontSize: '0.55rem' }}
          />
        )}
      </div>
      <div className="rounded-full h-3 w-3 p-2 bg-[#FFC12F] border-[#DFA023] flex justify-center items-center">
        {hovered && (
          <PiMinusBold
            className="text-slate-900"
            style={{ fontSize: '0.55rem' }}
          />
        )}
      </div>
      <div
        className="rounded-full h-3 w-3 p-2 bg-[#2ACB42] border-[#1BAC2C] flex justify-center items-center"
        onClick={fullSize}
      >
        {hovered && (
          <RiExpandLeftRightFill
            className="text-slate-900"
            style={{
              fontSize: '0.55rem',
              transform: 'rotate(45deg)'
            }}
          />
        )}
      </div>
    </div>
  );
}
