import styles from './home-page.module.scss';
import { Landing } from '../landing/landing';
import { IntroCard } from '../../../cards/components/intro-card/intro-card';
import { PhaseOne } from '../../../cards/components/phase-one/phase-one';
import { GrowCard } from '../../../cards/components/grow-card/grow-card';
import { PhaseTwo } from '../../../cards/components/phase-two/phase-two';
import { PhaseThree } from '../../../cards/components/phase-three/phase-three';
import { Roadmap } from '../roadmap/roadmap';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { Footer } from '../../../core/components/footer/footer';

export function HomePage() {
  const { isMaxTablet } = useDeviceType();
  return (
    <div className={styles['container']}>
      <div className={styles['landing']}>
        <Landing />
      </div>
      <IntroCard />
      <div className={styles['phase-one']}>
        <PhaseOne />
      </div>
      <div className={styles['wrapper']}>
        <div className={styles['bg-container']} />
        {isMaxTablet && <div className={styles['roadmap-bg']} />}
        <div className={styles['grow-card']}>
          <GrowCard />
        </div>
        <div className={styles['phase-two']}>
          <PhaseTwo />
        </div>
        <div className={styles['phase-three']}>
          <PhaseThree />
        </div>
        <div className={styles['roadmap']}>
          <Roadmap />
        </div>
      </div>
      <Footer />
    </div>
  );
}
