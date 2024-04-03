import styles from './sticker.module.scss';
import { useStickers } from '../../hooks/use-stickers';
import { CSSProperties } from 'react';
export function Sticker() {
  const { activeStickers, setActiveSticker } = useStickers();
  return (
    activeStickers.length > 0 &&
    activeStickers.map((activeSticker) => (
      <div
        className={styles['container']}
        key={`${activeSticker.src}-${activeSticker.rotation}`}
        style={{
          left: `${activeSticker.xPos}px`,
          top: `${activeSticker.yPos}px`,
        }}
      >
        <img
          className={styles['img']}
          src={activeSticker.src}
          alt={'Sticker'}
          style={
            {
              '--rotation': `${activeSticker.rotation}deg`,
            } as CSSProperties
          }
          onAnimationEnd={() =>
            setActiveSticker((stickers) =>
              stickers.filter(
                (sticker) =>
                  sticker.rotation !== activeSticker.rotation &&
                  sticker.xPos !== activeSticker.xPos &&
                  sticker.yPos !== activeSticker.yPos
              )
            )
          }
        />
      </div>
    ))
  );
}
