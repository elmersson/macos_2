import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ContentBoxSelectItem } from './Control-Centre';

export function Printers() {
  return (
    <div className="space-y-6">
      <ContentBox className="space-y-2">
        <ContentBoxSelectItem
          title="Default printer"
          values={[{ title: 'Last Printer Used', value: 'last-printer' }]}
          defaultValue={0}
        />

        <Separator className="bg-white/10" />

        <ContentBoxSelectItem
          title="Default paper size"
          values={[{ title: 'A4', value: 'a4' }]}
          defaultValue={0}
        />
      </ContentBox>

      <ContentBox className="flex justify-center items-center">
        <span className="text-sm text-neutral-400">No Printers</span>
      </ContentBox>

      <div className="flex flex-row items-center justify-end space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Add Printer, Scanner or Fax...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
