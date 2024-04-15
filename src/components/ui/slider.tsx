'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    icon?: React.ReactElement;
  }
>(({ className, icon, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    {icon && (
      <div className="absolute left-2.5 top-1 z-10 transform -translate-x-1/2 text-slate-500">
        {React.cloneElement(icon, { size: 12 })}
      </div>
    )}
    <SliderPrimitive.Track className="relative h-5 w-full grow overflow-hidden rounded-full bg-slate-400/50">
      <SliderPrimitive.Range className="absolute h-full bg-slate-200" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full bg-white border-none shadow-lg outline-none" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
