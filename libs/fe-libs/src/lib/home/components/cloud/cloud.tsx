import styles from './cloud.module.scss';
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

export interface CloudProps {
  imgSrc: string;
  widthPercentage: number;
  heightPercentage: number;
  topPercentage: number;
  leftPercentage: number;
  traslateX?: boolean;
  zIndex?: number;
}

export function Cloud(props: CloudProps) {
  const {
    imgSrc,
    topPercentage,
    leftPercentage,
    widthPercentage,
    heightPercentage,
    traslateX = false,
    zIndex = 20,
  } = props;

  const [leftPosition, setLeftPosition] = useState(leftPercentage);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxSpeed = 0.05;
      const newLeftPosition = leftPercentage - scrollPosition * parallaxSpeed;

      if (newLeftPosition >= 0) {
        setLeftPosition(newLeftPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [leftPercentage]);

  return (
    <Parallax
      speed={-10}
      className={styles['parallax']}
      style={{
        top: `${topPercentage}%`,
        left: traslateX ? `${leftPosition}%` : `${leftPercentage}%`,
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
