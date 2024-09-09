'use client';
import { useEffect, useRef, useState } from 'react';
import { useSystemStore } from './providers/store-provider';
import Image from 'next/image';
import BG from '@/assets/images/bg.jpg';

export default function Wallpaper() {
  const { logedIn } = useSystemStore((state) => state);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoCanPlay, setVideoCanPlay] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoCanPlay = () => {
      setVideoCanPlay(true);
    };

    const handleVideoError = () => {
      setVideoCanPlay(false);
    };

    if (video) {
      video.oncanplay = handleVideoCanPlay;
      video.onerror = handleVideoError;

      if (!logedIn) {
        video.play();
      } else {
        video.playbackRate = 0.5;

        setTimeout(() => {
          video.pause();
          video.playbackRate = 1;
        }, 2000);
      }
    }

    return () => {
      if (video) {
        video.oncanplay = null;
        video.onerror = null;
      }
    };
  }, [logedIn]);

  return (
    <div className="absolute inset-0 -z-50 bg-black">
      {videoCanPlay ? (
        <video
          ref={videoRef}
          src="https://sylvan.apple.com/Videos/P001_C005_UHD_SDR_2K_AVC.mov"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          autoPlay
          loop
          playsInline
          muted
        />
      ) : (
        <Image
          src={BG}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  );
}
