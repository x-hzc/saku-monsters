import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
  ];

  return (
    <div className={styles['container']}>
      {languages.map((language) => (
        <button
          onClick={() => i18n.changeLanguage(language.code)}
          key={language.code}
        >
          {language.name}
        </button>
      ))}
    </div>
  );
}
