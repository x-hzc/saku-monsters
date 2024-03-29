import { atom, useAtom } from 'jotai';

const isPlayingAtom = atom(false);
export function useHeroVideo() {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  return {
    isPlaying,
    setIsPlaying,
  };
}
