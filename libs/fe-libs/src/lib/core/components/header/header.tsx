import styles from './header.module.scss';
import { LanguageSelector } from '../language-selector/language-selector';

export function Header() {
  return (
    <div className={styles['container']}>
      <LanguageSelector />
    </div>
  );
}
