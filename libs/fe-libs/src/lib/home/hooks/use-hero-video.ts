import { atom, useAtom } from 'jotai';
import { RefObject } from 'react';
import { useDeviceType } from '../../shared/hooks/use-device-type';
const isPlayingAtom = atom(false);
export function useHeroVideo(videoRef?: RefObject<HTMLVideoElement> | null) {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const { isMinLargeTablet } = useDeviceType();
  async function playVideo() {
    if (!videoRef || !videoRef.current) {
      return;
    }
    await videoRef.current.play();
    setIsPlaying(true);
    if (!isMinLargeTablet) {
      await videoRef.current.requestFullscreen();
    }
  }

  async function endVideo() {
    if (!videoRef || !videoRef.current) {
      return;
    }
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    try {
      await document.exitFullscreen();
    } catch {
      setIsPlaying(false);
    } finally {
      setIsPlaying(false);
    }
  }
  return {
    isPlaying,
    setIsPlaying,
    playVideo,
    endVideo,
  };
}
