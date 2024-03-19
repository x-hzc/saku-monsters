import { useRouter } from '../../../routing/hooks/use-router';
import styles from './home-page.module.scss';

export function HomePage() {
  const { goToInventory } = useRouter();

  return (
    <div className={styles['container']}>
      <div>Welcome to Saku Monsters - Home</div>
      <div onClick={goToInventory} style={{ cursor: 'pointer' }}>
        Go to inventory
      </div>
    </div>
  );
}
