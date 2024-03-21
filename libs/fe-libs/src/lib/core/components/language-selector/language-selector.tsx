import styles from './language-selector.module.scss';
import LanguageIcon from '../../../../../assets/icons/language.svg';
import { Button } from '../../../ui/components/button/button';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

export interface LanguageSelectorProps {
  contrasted?: boolean;
}
export function LanguageSelector({ contrasted }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const languages = ['en-US', 'fr-FR'];

  return (
    <div
      className={classNames(styles['container'], {
        [styles['contrasted']]: contrasted,
      })}
    >
      <LanguageIcon />
      {languages.map((language, index) => (
        <Button
          key={index}
          onClick={() => i18n.changeLanguage(language)}
          type={'round'}
          className={classNames(styles['button'], {
            [styles['selected']]: i18n.language === language,
          })}
        >
          {language.split('-')[0].toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
