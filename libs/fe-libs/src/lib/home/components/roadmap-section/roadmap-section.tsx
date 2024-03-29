import styles from './roadmap-section.module.scss';
import cn from 'classnames';
import { CSSProperties, useState } from 'react';
import classNames from 'classnames';
import { ROADMAP_SECTION_COLOR_MAPPER } from '../../helpers/roadmap-section-color-mapper';
import { useDeviceType } from '../../../shared/hooks/use-device-type';

export interface RoadmapSectionProps {
  number: number;
  title: string;
  description: string;
  contentPosition: 'right' | 'left';
  image: string;
  className?: string;
}

export function RoadmapSection(props: RoadmapSectionProps) {
  const { number, description, title, contentPosition, image, className } =
    props;
  const [isOpen, setIsOpen] = useState(number <= 4);
  const [isRead, setIsRead] = useState(number <= 4);
  const { isMinDesktopSmall } = useDeviceType();
  function getContentPosition(): CSSProperties {
    if (isMinDesktopSmall) {
      return contentPosition === 'left'
        ? {
            right: 'calc(100% + 20px)',
          }
        : { left: 'calc(100% + 20px)' };
    }

    return {
      right: contentPosition === 'right' ? '-60%' : undefined,
      left: contentPosition === 'left' ? '-60%' : undefined,
      top: '-70%',
    };
  }

  return (
    <div className={cn(styles['container'], className)}>
      <div
        className={cn(styles['number'], {
          [styles['rotated']]: number === 1,
          [styles['open']]: !isMinDesktopSmall && isOpen,
        })}
        onMouseEnter={() => {
          setIsOpen(true);
          setIsRead(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        onClick={(ev) => {
          if (isMinDesktopSmall) {
            return;
          }
          ev.stopPropagation();
          setIsRead(true);
          setIsOpen(!isOpen);
        }}
        style={
          isRead
            ? {
                backgroundColor: ROADMAP_SECTION_COLOR_MAPPER[number],
                color: '#FFF',
              }
            : undefined
        }
      >
        {number}
      </div>
      <div
        className={classNames(styles['content-container'], {
          [styles['open']]: isOpen,
        })}
        style={getContentPosition()}
      >
        <div className={styles['img-container']}>
          <img src={image} alt={`section-${number}`} />
        </div>
        <div className={styles['information']}>
          <div className={styles['phase']}>Phase {number}</div>
          <div className={styles['title']}>{title}</div>
          <div className={styles['description']}>{description}</div>
        </div>
      </div>
    </div>
  );
}
