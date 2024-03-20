import styles from './app.module.scss';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <div className={styles['app-container']}>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
