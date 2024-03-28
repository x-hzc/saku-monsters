import styles from './app.module.scss';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useRouter } from '../../../routing/hooks/use-router';
import { useStickers } from '../../../stickers/hooks/use-stickers';
import { useClickCursor } from '../../../ui/hooks/use-click-cursor';
import { Sticker } from '../../../stickers/components/sticker/sticker';
import { Footer } from '../footer/footer';
import cn from 'classnames';

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
      className={cn(styles['app-container'], {
        [styles['inventory']]: currentPath === '/inventory',
        [styles['clicked']]: clicked,
      })}
    >
      <div className={styles['content']}>
        <Outlet />
        <Sticker />
        <Footer
          className={cn({
            [styles['inventory-footer']]: currentPath === '/inventory',
          })}
        />
      </div>
    </div>
  );
}
