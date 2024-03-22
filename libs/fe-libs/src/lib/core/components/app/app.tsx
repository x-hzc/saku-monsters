import styles from './app.module.scss';
import { Outlet } from 'react-router-dom';
import { useRouter } from '../../../routing/hooks/use-router';
import classNames from 'classnames';
import { Sticker } from '../../../stickers/components/sticker/sticker';
import { useEffect } from 'react';
import { useStickers } from '../../../stickers/hooks/use-stickers';

export function App() {
  const { currentPath } = useRouter();
  const { handleClick } = useStickers();

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <div
      className={classNames(styles['app-container'], {
        [styles['inventory']]: currentPath === '/inventory',
      })}
    >
      <div className={styles['content']}>
        <Outlet />
        <Sticker />
      </div>
    </div>
  );
}
