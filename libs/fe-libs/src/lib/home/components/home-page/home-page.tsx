import styles from './home-page.module.scss';
import { Landing } from '../landing/landing';
import { IntroCard } from '../../../cards/components/intro-card/intro-card';
import { PhaseOne } from '../../../cards/components/phase-one/phase-one';
import { GrowCard } from '../../../cards/components/grow-card/grow-card';
import { PhaseTwo } from '../../../cards/components/phase-two/phase-two';
import { Roadmap } from '../roadmap/roadmap';
import { PhaseThree } from '../../../cards/components/phase-three/phase-three';

export function HomePage() {
  return (
    <div className={styles['container']}>
      <Landing />
      <IntroCard />
      <div className={styles['phase-one']}>
        <PhaseOne />
      </div>
      <div className={styles['grow-card']}>
        <div className={styles['card']}>
          <GrowCard />
        </div>
        <div className={styles['bg-container']} />
      </div>
      <PhaseTwo />
      <PhaseThree />
      <div className={styles['roadmap']}>
        <Roadmap />
      </div>
    </div>
  );
}
