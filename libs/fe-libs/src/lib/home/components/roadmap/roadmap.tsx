import styles from './roadmap.module.scss';
import { useTranslation } from 'react-i18next';
import { RoadmapSection } from '../roadmap-section/roadmap-section';
import RoadMapImage from '../../../../../assets/pngs/rodmap-image.png';
export function Roadmap() {
  const { t } = useTranslation();
  return (
    <div className={styles['container']}>
      <div className={styles['board']}>
        <div className={styles['text']}>{t('roadmap.stream')}</div>
      </div>
      <div className={styles['road']}>
        <div className={styles['s1']}>
          <RoadmapSection
            number={1}
            title={t('roadmap.1.title')}
            description={t('roadmap.1.description')}
            contentPosition={'left'}
            image={RoadMapImage}
          />
        </div>
        <div className={styles['s2']}>
          <RoadmapSection
            number={2}
            title={t('roadmap.1.title')}
            description={t('roadmap.1.description')}
            contentPosition={'left'}
            image={RoadMapImage}
          />
        </div>
        <div className={styles['s3']}>
          <RoadmapSection
            number={3}
            title={t('roadmap.1.title')}
            description={t('roadmap.1.description')}
            contentPosition={'right'}
            image={RoadMapImage}
          />
        </div>
        <div className={styles['s4']}>
          <RoadmapSection
            number={4}
            title={t('roadmap.1.title')}
            description={t('roadmap.1.description')}
            contentPosition={'right'}
            image={RoadMapImage}
          />
        </div>
        <div className={styles['s5']}>
          <RoadmapSection
            number={5}
            title={t('roadmap.1.title')}
            description={t('roadmap.1.description')}
            contentPosition={'left'}
            image={RoadMapImage}
          />
        </div>
        <div className={styles['s6']}>
          <RoadmapSection
            number={6}
            title={t('roadmap.1.title')}
            description={t('roadmap.1.description')}
            contentPosition={'right'}
            image={RoadMapImage}
          />
        </div>
      </div>
    </div>
  );
}
