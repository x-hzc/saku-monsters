import styles from './language-selector.module.scss';
import LanguageIcon from '../../../../../assets/icons/language.svg';
import { Button } from '../../../ui/components/button/button';
import { useTranslation } from 'react-i18next';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import cn from 'classnames';

export interface LanguageSelectorProps {
  contrasted?: boolean;
}
export function LanguageSelector({ contrasted }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const { isMinDesktopSmall } = useDeviceType();
  const languages = ['en-US', 'fr-FR'];

  return (
    <div
      className={cn(styles['container'], {
        [styles['contrasted']]: contrasted,
      })}
    >
      {isMinDesktopSmall && <LanguageIcon />}
      {languages.map((language, index) => (
        <Button
          key={index}
          onClick={() => i18n.changeLanguage(language)}
          type={'round'}
          className={cn(styles['button'], {
            [styles['selected']]: i18n.resolvedLanguage === language,
          })}
        >
          {language.split('-')[0].toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
