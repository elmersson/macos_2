import { MdContactMail } from 'react-icons/md';
import { ContentBox } from '../apps/system';
import { ChevronRight } from 'lucide-react';
import { Separator } from '../ui/separator';
import { IoCard } from 'react-icons/io5';
import { IoIosCloud, IoIosPeople, IoMdContact } from 'react-icons/io';
import { SiAppstore } from 'react-icons/si';
import { Button } from '../ui/button';
import Image from 'next/image';
import ProfileImage from '@/assets/images/ProfileImage.png';
import { AiFillSecurityScan } from 'react-icons/ai';

export default function Profile() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center space-y-1 py-3">
        <div className="w-28 h-28 bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-full p-2">
          <Image
            src={ProfileImage}
            alt="account image"
            className="rounded-full drop-shadow object-cover object-center"
            fill
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold">Rasmus Elmersson</span>
          <span className="text-lg">elmerssonrasmus@gmail.com</span>
        </div>
      </div>
      <ContentBox className="p-3">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-neutral-500 p-0.5 rounded-sm">
                <MdContactMail />
              </span>
              <span>Personal information</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-neutral-500 p-0.5 rounded-sm">
                <AiFillSecurityScan />
              </span>
              <span>Sign-In & Security</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-neutral-500 p-0.5 rounded-sm">
                <IoCard />
              </span>
              <span>Payment & Shipping</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
        </div>
      </ContentBox>
      <ContentBox className="p-3 mb-8">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-white text-blue-500 p-0.5 rounded-sm">
                <IoIosCloud />
              </span>
              <span>iCloud</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-blue-500 p-0.5 rounded-sm">
                <SiAppstore />
              </span>
              <span>Media & Purchases</span>
            </div>
            <ChevronRight className="text-white/20 size-5" />
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <span className="bg-white text-blue-500 p-0.5 rounded-sm">
                <IoIosPeople />
              </span>
              <span>Family Sharing</span>
            </div>
            <div className="flex flex-row space-x-2">
              <span className="text-sm text-white/60">Set Up</span>
              <ChevronRight className="text-white/20 size-5" />
            </div>
          </div>
        </div>
      </ContentBox>
      <ContentBox className="p-3" title="Devices">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <span>Rasmus´s MacBook Pro</span>
            <span className="text-sm text-white/50">
              This Macbook Pro 16&quot;
            </span>
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-col">
            <span>iPad</span>
            <span className="text-sm text-white/50">iPad</span>
          </div>
          <Separator className="bg-white/10" />
          <div className="flex flex-col">
            <span>Rasmus´s Apple Watch</span>
            <span className="text-sm text-white/50">Apple Watch SE</span>
          </div>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-3">
            <span className="bg-neutral-500 p-0.5 rounded-sm">
              <IoMdContact />
            </span>
            <span>Contact Key Verification</span>
          </div>
          <ChevronRight className="text-white/20 size-5" />
        </div>
      </ContentBox>
      <div className="flex flex-row justify-between pt-3">
        <Button className="bg-neutral-500 text-white p-3 h-3">
          Sign Out...
        </Button>
        <div className="flex flex-row items-center space-x-3">
          <Button className="bg-neutral-500 text-white p-3 h-3">
            About Apple ID & Privacy
          </Button>
          <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
            ?
          </Button>
        </div>
      </div>
    </>
  );
}
