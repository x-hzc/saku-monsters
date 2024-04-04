import styles from './cloud.module.scss';
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import cn from 'classnames';

export interface CloudProps {
  imgSrc: string;
  widthPercentage: number;
  heightPercentage: number;
  topPercentage: number;
  leftPercentage: number;
  traslateX?: boolean;
  parallaxSpeed?: number;
  zIndex?: number;
  className?: string;
}

export function Cloud(props: CloudProps) {
  const {
    imgSrc,
    topPercentage,
    leftPercentage,
    widthPercentage,
    heightPercentage,
    traslateX = false,
    parallaxSpeed = 0,
    zIndex = 20,
    className = '',
  } = props;

  const [leftPosition, setLeftPosition] = useState(leftPercentage);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newLeftPosition = leftPercentage - scrollPosition * parallaxSpeed;

      setLeftPosition(newLeftPosition);

      if (newLeftPosition <= -50) {
        setLeftPosition(newLeftPosition + 150);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [leftPercentage, parallaxSpeed]);

  return (
    <Parallax
      speed={-10}
      className={cn(styles['parallax'], className)}
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
