'use client';
import { useSystem } from '@/hooks/useSystem';
import { useEffect, useRef, useState } from 'react';

export default function Wallpaper() {
  const { logedIn } = useSystem();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSource, setVideoSource] = useState<string>(
    // 'https://sylvan.apple.com/Videos/P001_C005_UHD_SDR_2K_AVC.mov'
    './videos/bg.mov'
  );

  useEffect(() => {
    const handleVideoError = () => {
      setVideoSource(
        'http://sylvan.apple.com/Videos/P001_C005_UHD_SDR_2K_AVC.mov'
      );
    };

    if (videoRef.current) {
      const video = videoRef.current;

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
  }, [logedIn]);

  return (
    <div className={`absolute inset-0 -z-50 bg-black`}>
      <video
        ref={videoRef}
        src={videoSource}
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
    </div>
  );
}
