import styles from './home-page.module.scss';
import { Landing } from '../landing/landing';
import { IntroCard } from '../../../cards/components/intro-card/intro-card';
import { PhaseOne } from '../../../cards/components/phase-one/phase-one';
import { GrowCard } from '../../../cards/components/grow-card/grow-card';
import { PhaseTwo } from '../../../cards/components/phase-two/phase-two';
import { PhaseThree } from '../../../cards/components/phase-three/phase-three';
import { Roadmap } from '../roadmap/roadmap';
import { Footer } from '../footer/footer';
import SakuLogo from '../../../../../assets/pngs/footer_saku_logo.png';

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
      <div className={styles['footer-saku-logo-container']}>
        <img src={SakuLogo} alt="footer-saku-logo" />
      </div>
      <Footer />
    </div>
  );
}
