import styles from './app.module.scss';
import { Outlet } from 'react-router-dom';
import { useRouter } from '../../../routing/hooks/use-router';
import classNames from 'classnames';
import { Sticker } from '../../../stickers/components/sticker/sticker';
import { useEffect } from 'react';
import { useStickers } from '../../../stickers/hooks/use-stickers';
import { useClickCursor } from '../../../ui/hooks/use-click-cursor';

export function App() {
  const { currentPath } = useRouter();
  const { handleClick } = useStickers();
  const { clicked } = useClickCursor();
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
        [styles['clicked']]: clicked,
      })}
    >
      <div className={styles['content']}>
        <Outlet />
        <Sticker />
      </div>
    </div>
  );
}
