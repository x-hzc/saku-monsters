import { atom, useAtom } from 'jotai';
import { getAllStickers } from '../constants/sticker-images';
import { ActiveSticker } from '../types/active-sticker';

const STICKERS = getAllStickers();
const activeStickersAtom = atom<ActiveSticker[]>([]);
export function useStickers() {
  const [activeStickers, setActiveSticker] = useAtom(activeStickersAtom);

  function handleClick(ev: MouseEvent) {
    const stickerIndex = Math.floor(Math.random() * STICKERS.length);
    const rotation = Math.floor(Math.random() * 360) + 180;
    const xPos = ev.pageX;
    const yPos = ev.pageY;
    const newSticker: ActiveSticker = {
      xPos,
      yPos,
      rotation,
      src: STICKERS[stickerIndex],
    };
    setActiveSticker((stickers) => [...stickers, newSticker]);
  }

  return { activeStickers, handleClick, setActiveSticker };
}
