import { IoIosFingerPrint } from 'react-icons/io';
import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { IoWatch } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';

export function TouchId() {
  return (
    <div className="space-y-4">
      <ContentBox className="flex flex-row justify-between">
        <span>A login password has been set for this user.</span>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Change...
        </Button>
      </ContentBox>

      <div className="flex flex-col pt-4">
        <span>Touch ID</span>
        <span className="text-sm text-neutral-400">
          Touch ID lets you use your fingerprint to unlock your Mac and make
          purchases with Apple Pay, iTunes Store, App Store and Apple Books.
        </span>
        <div className="flex flex-row justify-center mt-4 space-x-24">
          <div className="flex flex-col items-center space-y-1">
            <IoIosFingerPrint className="size-12 text-neutral-400" />
            <span className="text-sm">Finger 1</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex w-12 h-12 rounded-full bg-neutral-400/20 items-center justify-center text-xl text-neutral-400">
              <FaPlus />
            </div>
            <span className="text-sm">Add Fingerprint</span>
          </div>
        </div>
      </div>

      <ContentBox className="space-y-1">
        <div className="flex flex-row justify-between items-center">
          <span>Use Touch ID to unlock your Mac</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Use Touch ID for Apple Pay</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>
            Use Touch ID for purchases in iTunes Store, App Store and Apple
            Books
          </span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Use Touch ID for autofilling passwords</span>
          <Switch checked />
        </div>
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between items-center">
          <span>Use Touch ID for fast user switching</span>
          <Switch checked />
        </div>
      </ContentBox>

      <ContentBox
        title="Apple Watch"
        subTitle="Use Apple Watch to unlock your applications and your Mac."
        className="flex flex-row justify-between items-center"
      >
        <div className="flex flex-row items-center space-x-2">
          <IoWatch /> <span>Rasmus`s Apple Watch</span>
        </div>
        <Switch />
      </ContentBox>

      <div className="flex justify-end pt-6">
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
