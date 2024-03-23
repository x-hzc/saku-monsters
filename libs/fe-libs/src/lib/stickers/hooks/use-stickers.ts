import { atom, useAtom } from 'jotai';
import { getAllStickers } from '../constants/sticker-images';
import { ActiveSticker } from '../types/active-sticker';
import { useDeviceType } from '../../ui/hooks/use-device-type';

const STICKERS = getAllStickers();
const activeStickersAtom = atom<ActiveSticker[]>([]);
export function useStickers() {
  const [activeStickers, setActiveSticker] = useAtom(activeStickersAtom);
  const { isMinDesktopLarge, isMinDesktopSmall } = useDeviceType();
  let imgSize = 75;
  if (isMinDesktopSmall) {
    imgSize = 125;
  }
  if (isMinDesktopSmall) {
    imgSize = 200;
  }
  function handleClick(ev: MouseEvent) {
    const stickerIndex = Math.floor(Math.random() * STICKERS.length);
    const rotation = Math.floor(Math.random() * 360) + 180;
    const xPos = ev.pageX - imgSize / 2;
    const yPos = ev.pageY - imgSize / 2;
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