import styles from './app.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';

export function App() {
  return (
    <div className={styles['app-container']}>
      <div className={styles['content']}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
