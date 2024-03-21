import styles from './home-page.module.scss';
import { Landing } from '../landing/landing';
import { IntroCard } from '../../../cards/components/intro-card/intro-card';
import { PhaseOne } from '../../../cards/components/phase-one/phase-one';
import { GrowCard } from '../../../cards/components/grow-card/grow-card';

export function HomePage() {
  return (
    <div className={styles['container']}>
      <Landing />
      <IntroCard />
      <PhaseOne />
      <GrowCard />
    </div>
  );
}
