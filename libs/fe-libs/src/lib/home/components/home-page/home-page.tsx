import styles from './home-page.module.scss';
import { Landing } from '../landing/landing';
import { IntroCard } from '../../../cards/components/intro-card/intro-card';

export function HomePage() {
  return (
    <div className={styles['container']}>
      <Landing />
      <IntroCard />
    </div>
  );
}
