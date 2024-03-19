import styles from './header.module.scss';
import { LanguageSelector } from '../language-selector/language-selector';
import { Logo } from '../logo/logo';

export function Header() {
  return (
    <div className={styles['container']}>
      <Logo />
      <LanguageSelector />
    </div>
  );
}
