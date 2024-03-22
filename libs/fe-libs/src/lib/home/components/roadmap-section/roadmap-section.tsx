import styles from './roadmap-section.module.scss';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { useOutsideAlerter } from '../../../ui/hooks/use-outside-alerter';

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
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(sectionRef, () => setIsOpen(false));
  return (
    <div
      className={classNames(styles['container'], className)}
      ref={sectionRef}
    >
      <div
        className={styles['number']}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen((prevState) => !prevState);
        }}
      >
        {number}
      </div>
      <div
        className={classNames(styles['content-container'], {
          [styles['active']]: isOpen,
        })}
        style={
          contentPosition === 'left'
            ? {
                right: 'calc(100% + 30px)',
              }
            : { left: 'calc(100% + 30px)' }
        }
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
