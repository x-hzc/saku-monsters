import styles from './language-selector.module.scss';
import LanguageIcon from '../../../../../assets/icons/language.svg';
import { Button } from '../../../ui/components/button/button';
import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const languages = ['en', 'fr'];

  return (
    <div className={styles['container']}>
      <LanguageIcon />
      {languages.map((language, index) => (
        <Button
          key={index}
          onClick={() => i18n.changeLanguage(language)}
          type={'round'}
        >
          {language.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
