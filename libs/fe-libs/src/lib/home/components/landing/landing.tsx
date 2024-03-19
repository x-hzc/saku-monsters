import styles from './landing.module.scss';
import LogoKanjiIcon from '../../../../../assets/icons/logo_kanji.svg';
import PlayIcon from '../../../../../assets/icons/play.svg';
import HomeIcon from '../../../../../assets/icons/home.svg';
import MonstersIcon from '../../../../../assets/icons/monsters.svg';
import StoreIcon from '../../../../../assets/icons/store.svg';
import AppleIcon from '../../../../../assets/icons/apple.svg';
import { Logo } from '../../../core/components/logo/logo';
import { LanguageSelector } from '../../../core/components/language-selector/language-selector';
import { Button } from '../../../ui/components/button/button';
import { useRouter } from '../../../routing/hooks/use-router';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export function Landing() {
  const { goToInventory, goToHome } = useRouter();
  const { t } = useTranslation();
  return (
    <div className={styles['container']}>
      <div className={styles['video-container']} />
      <div className={styles['content-container']}>
        <div className={styles['nav-menu']}>
          <Logo />
          <div className={styles['link']} onClick={goToHome}>
            <HomeIcon />
            <div className={styles['text']}>{t('navigation.home')}</div>
          </div>
          <div className={styles['link']} onClick={goToInventory}>
            <MonstersIcon />
            <div className={styles['text']}>{t('navigation.monsters')}</div>
          </div>
          <div className={styles['link']}>
            <StoreIcon />
            <div className={styles['text']}>{t('navigation.store')}</div>
          </div>
        </div>

        <div className={styles['language-selector']}>
          <LanguageSelector />
        </div>
        <div className={styles['title-container']}>
          <div className={classNames(styles['top-title'], styles['title'])}>
            <div>{t('landing.saku')}</div>
            <LogoKanjiIcon />
          </div>
          <div className={classNames(styles['bottom-title'], styles['title'])}>
            <div className={styles['play-container']}>
              <PlayIcon />
            </div>
            <div>{t('landing.monsters')}</div>
          </div>
        </div>

        <div className={styles['bottom-content']}>
          <div
            className={styles['saku-card']}
            onClick={() => console.log('Redirect to ios store')}
          />
          <div className={styles['content']}>
            <div className={styles['title']}>{t('landing.collect')}</div>
            <div>{t('landing.download')}</div>
            <Button
              onClick={() => console.log('Redirect to ios store')}
              type={'contained'}
              className={styles['btn']}
            >
              <AppleIcon />
              {t('landing.apple')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
