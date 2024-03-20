import styles from './app.module.scss';
import { Outlet } from 'react-router-dom';
import { useRouter } from '../../../routing/hooks/use-router';
import classNames from 'classnames';

export function App() {
  const { currentPath } = useRouter();
  return (
    <div
      className={classNames(styles['app-container'], {
        [styles['inventory']]: currentPath === '/inventory',
      })}
    >
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
