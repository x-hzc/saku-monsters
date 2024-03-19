import styles from './home-page.module.scss';
import { Landing } from '../landing/landing';

export function HomePage() {
  return (
    <div className={styles['container']}>
      <Landing />
    </div>
  );
}
