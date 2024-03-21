import styles from './logo.module.scss';
import { useRouter } from '../../../routing/hooks/use-router';

export function Logo() {
  const { goToHome } = useRouter();
  return (
    <div className={styles['container']} onClick={goToHome}>
      Logo
    </div>
  );
}