import styles from './roadmap-section.module.scss';
import cn from 'classnames';

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

  return (
    <div
      className={cn(styles['container'], className)}
    >
      <div
        className={styles['number']}
      >
        {number}
      </div>
      <div
        className={styles['content-container']}
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
