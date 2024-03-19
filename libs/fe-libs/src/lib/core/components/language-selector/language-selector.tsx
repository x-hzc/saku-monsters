import styles from './language-selector.module.scss';

/* eslint-disable-next-line */
export interface LanguageSelectorProps {}

export function LanguageSelector(props: LanguageSelectorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LanguageSelector!</h1>
    </div>
  );
}
