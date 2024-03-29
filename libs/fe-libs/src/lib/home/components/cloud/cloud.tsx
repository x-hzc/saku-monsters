import styles from './cloud.module.scss';
import { Parallax } from 'react-scroll-parallax';

export interface CloudProps {
  imgSrc: string;
  widthPercentage: number;
  heightPercentage: number;
  topPercentage: number;
  leftPercentage: number;
  zIndex?: number;
}

export function Cloud(props: CloudProps) {
  const {
    imgSrc,
    topPercentage,
    leftPercentage,
    widthPercentage,
    heightPercentage,
    zIndex = 20,
  } = props;
  return (
    <Parallax
      speed={-10}
      className={styles['parallax']}
      style={{
        top: `${topPercentage}%`,
        left: `${leftPercentage}%`,
        width: `${widthPercentage}%`,
        height: `${heightPercentage}%`,
        zIndex,
      }}
    >
      <div
        className={styles['container']}
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      />
    </Parallax>
  );
}
