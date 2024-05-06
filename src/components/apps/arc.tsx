import { FaPlus } from 'react-icons/fa6';
import { FaArchive } from 'react-icons/fa';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '../ui/arc-accordion';
import { BsFillFolderFill } from 'react-icons/bs';
import { DraggableItem } from './draggable-item';
import { AppProps } from '@/data/Apps';
export function Arc({ appData, closeApp, bringToFront }: AppProps) {
  const items = Array.from({ length: 8 }, (_, index) => index);

  return (
    <DraggableItem
      appData={appData}
      onclose={closeApp}
      bringToFront={bringToFront}
    >
      <div className="w-full h-full bg-[#6891ab]/90 bg-clip-padding backdrop-filter backdrop-blur-xl">
        <div className="flex h-full space-x-2 mr-4">
          <div className="my-4 ml-2 flex justify-between flex-col">
            <div className="space-y-2">
              <div className="text-sm p-3 rounded-xl bg-[#63879e] bg-opacity-60 hover:bg-opacity-100 text-slate-800">
                localhost
              </div>
              <div className="grid grid-cols-4 gap-4 mr-2">
                {items.map((item, index) => (
                  <PinnedItem key={index} />
                ))}
              </div>
              <Saved />
              <div className="flex flex-row items-center space-x-3 py-2">
                <FaPlus className="text-[#3f5969]" />
                <span className="text-[#3f5969]/60">New Tab</span>
              </div>
            </div>
            <div className="flex flex-row justify-between px-2 text-lg items-center">
              <FaArchive className="text-[#3f5969]" />
              <div className="flex flex-row space-x-4">
                <span>🥸</span>
                <span className="opacity-50">👨‍💻</span>
              </div>
              <FaPlus className="text-[#3f5969]" />
            </div>
          </div>
          <div className="w-full drop-shadow-lg bg-white m-4 rounded-md">
            <span>Arc</span>
          </div>
        </div>
      </div>
    </DraggableItem>
  );
}

function PinnedItem() {
  return (
    <div className="w-14 h-14 bg-[#63879e] bg-opacity-60 hover:bg-opacity-100 rounded-xl"></div>
  );
}

function Saved() {
  const items = Array.from({ length: 8 }, (_, index) => index);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-slate-800/60">
          Privat
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <Folder key={index} />
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function Folder() {
  return (
    <div className="text-lg flex flex-row space-x-3 items-center">
      <BsFillFolderFill />
      <span className="text-slate-900">Item</span>
    </div>
  );
}
