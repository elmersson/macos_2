import { AppData } from "@/data/Apps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { useSystem } from "@/hooks/useSystem";

export function DockItem({ title, img, id }: AppData) {
  const { setLaunchPad } = useSystem();

  const handleClick = () => {
    if (title === "Launchpad") {
      setLaunchPad(true);
    }
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <li
            className="flex justify-center relative group overflow-hidden no-scrollbar"
            id={id}
            onClick={handleClick}
          >
            <Image src={img} alt={title} className="w-14" />
          </li>
        </TooltipTrigger>
        <TooltipContent className="mb-2">
          {title}
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
