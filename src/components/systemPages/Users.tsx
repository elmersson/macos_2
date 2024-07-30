import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ContentBoxSelectItem } from './Control-Centre';
import Image from 'next/image';
import ProfileImage from '@/assets/images/ProfileImage.png';
import { IoInformationCircleOutline } from 'react-icons/io5';

export function Users() {
  return (
    <div>
      <ContentBox className="space-y-2">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-2">
            <Image
              src={ProfileImage}
              alt="Profile image"
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="flex flex-col space-x-1">
              <span>Rasmus Elmersson</span>
              <span className="text-neutral-400 text-sm">Admin</span>
            </div>
          </div>
          <IoInformationCircleOutline className="size-6 text-neutral-400" />
        </div>
        <Separator className="bg-white/10" />

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-2">
            <span className="bg-neutral-600 rounded-full h-10 w-10" />
            <div className="flex flex-col space-x-1">
              <span>Guest User</span>
              <span className="text-neutral-400 text-sm">Off</span>
            </div>
          </div>
          <IoInformationCircleOutline className="size-6 text-neutral-400" />
        </div>
      </ContentBox>
      <div className="flex flex-row justify-end items-center space-x-3 my-3">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Add Group...
        </Button>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Add User...
        </Button>
      </div>
      <ContentBox className="space-y-1">
        <ContentBoxSelectItem
          title="Automatically log in as"
          defaultValue={0}
          values={[
            {
              title: 'Off',
              value: 'off'
            }
          ]}
        />
        <Separator className="bg-white/10" />
        <div className="flex flex-row justify-between">
          <span>Network account server</span>
          <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
            Edit...
          </Button>
        </div>
      </ContentBox>
      <div className="flex justify-end pt-6">
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
