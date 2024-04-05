import styles from './roadmap-section.module.scss';
import { CSSProperties, useState } from 'react';
import { ROADMAP_SECTION_COLOR_MAPPER } from '../../helpers/roadmap-section-color-mapper';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import cn from 'classnames';

export interface RoadmapSectionProps {
  number: number;
  title: string;
  description: string;
  contentPosition: 'right' | 'left';
  image?: string;
  className?: string;
}

export function RoadmapSection(props: RoadmapSectionProps) {
  const {
    number,
    description,
    title,
    contentPosition,
    image = '',
    className = '',
  } = props;
  const { isMobile, isMinDesktopSmall } = useDeviceType();
  const [isOpen, setIsOpen] = useState(number <= 4 && !isMobile);
  const [isRead, setIsRead] = useState(number <= 4 && !isMobile);

  function getContentPosition(): CSSProperties {
    if (isMinDesktopSmall) {
      return contentPosition === 'left'
        ? {
            right: 'calc(100% + 20px)',
          }
        : { left: 'calc(100% + 20px)' };
    }

    return {
      right: contentPosition === 'right' ? '-140%' : undefined,
      left: contentPosition === 'left' ? '-90%' : undefined,
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
        className={cn(styles['content-container'], {
          [styles['open']]: isOpen,
        })}
        style={getContentPosition()}
      >
        {image && image !== '' && (
          <div className={styles['img-container']}>
            <img src={image} alt={`section-${number}`} />
          </div>
        )}
        <div className={styles['information']}>
          <div className={styles['phase']}>Phase {number}</div>
          <div className={styles['title']}>{title}</div>
          <div className={styles['description']}>{description}</div>
        </div>
      </div>
    </div>
  );
}
