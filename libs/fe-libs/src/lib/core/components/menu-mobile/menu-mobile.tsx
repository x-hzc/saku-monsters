import styles from './menu-mobile.module.scss';
import MenuIcon from '../../../../../assets/icons/menu.svg';
import CloseIcon from '../../../../../assets/icons/close.svg';
import classNames from 'classnames';
import { useMenuMobile } from '../../hooks/use-menu-mobile';
import { Logo } from '../logo/logo';
import { Button } from '../../../ui/components/button/button';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../language-selector/language-selector';
import { useRouter } from '../../../routing/hooks/use-router';
import { useMobileSearch } from '../../../ui/hooks/use-mobile-search';

export interface MenuMobileProps {
  className?: string;
}
export function MenuMobile({ className }: MenuMobileProps) {
  const { toggleMenu, isOpen } = useMenuMobile();
  const { isOpen: isSearchOpen } = useMobileSearch();
  const { t } = useTranslation();
  const { goToAppleSakuMonsters, goToInventory, goToTwitter } = useRouter();
  return (
    <div
      className={classNames(styles['container'], {
        [styles['search-open']]: isSearchOpen,
      })}
    >
      <div
        className={styles['icon-container']}
        onClick={(ev) => {
          ev.stopPropagation();
          toggleMenu();
        }}
      >
        <MenuIcon />
      </div>
      <div
        className={classNames(styles['content'], className, {
          [styles['open']]: isOpen,
        })}
      >
        <div className={styles['top-content']}>
          <Logo />
          <Button
            onClick={toggleMenu}
            className={styles['close-btn']}
            type={'round'}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className={styles['links']}>
          <div
            className={styles['link']}
            onClick={(ev) => {
              ev.stopPropagation();
              toggleMenu();
              goToAppleSakuMonsters();
            }}
          >
            <div className={styles['title']}>{t('navigation.menu')}</div>
            {t('navigation.marketplace')}
          </div>
          <div
            className={styles['link']}
            onClick={(ev) => {
              ev.stopPropagation();
              toggleMenu();
              goToInventory();
            }}
          >
            {t('navigation.log')}
          </div>
          <div
            className={classNames(styles['link'], styles['download'])}
            onClick={(ev) => {
              ev.stopPropagation();
              toggleMenu();
              goToAppleSakuMonsters();
            }}
          >
            {t('navigation.download')}
          </div>
          <div
            className={styles['link']}
            onClick={(ev) => {
              ev.stopPropagation();
              toggleMenu();
              goToTwitter();
            }}
          >
            {t('navigation.twitter')}
          </div>
          <div className={styles['language']}>
            <div className={styles['text']}>{t('navigation.language')}</div>
            <LanguageSelector contrasted />
          </div>
        </div>

        <div className={styles['footer']}>
          <div>{t('footer.privacy')}</div>
          <div>{t('footer.terms')}</div>
        </div>
      </div>
    </div>
  );
}
