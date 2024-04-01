import styles from './landing.module.scss';
import LogoKanjiIcon from '../../../../../assets/icons/logo_kanji.svg';
import PlayIcon from '../../../../../assets/icons/play.svg';
import CloseIcon from '../../../../../assets/icons/close.svg';
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
import { useRef } from 'react';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { MenuMobile } from '../../../core/components/menu-mobile/menu-mobile';
import { useHeroVideo } from '../../hooks/use-hero-video';

export function Landing() {
  const { goToInventory, goToHome, goToAppleSakuMonsters } = useRouter();
  const { t } = useTranslation();
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const { isMinDesktopSmall, isMinLargeTablet } = useDeviceType();
  const { setIsPlaying, isPlaying, playVideo, endVideo } =
    useHeroVideo(videoRef);
  return (
    <div className={styles['container']}>
      {!isMinLargeTablet && (
        <div className={styles['mobile-header']}>
          <Logo />
          <div className={styles['actions']}>
            {!isPlaying && (
              <div
                className={styles['play-container']}
                onClick={(ev) => {
                  ev.stopPropagation();
                  return playVideo();
                }}
              >
                <PlayIcon />
              </div>
            )}
            <MenuMobile />
          </div>
        </div>
      )}
      <div
        className={classNames(styles['video-container'], {
          [styles['playing']]: isPlaying,
        })}
      >
        <div
          className={styles['play-container']}
          onClick={(ev) => {
            ev.stopPropagation();
            return endVideo();
          }}
        >
          <CloseIcon />
        </div>
        <video
          className={classNames(styles['video'], {
            [styles['active']]: isPlaying,
          })}
          ref={videoRef}
          onEnded={endVideo}
          controls
        >
          <source
            src={'../../../../../assets/hero_video.mp4'}
            type={'video/mp4'}
          />
        </video>
        <div className={styles['content-container']}>
          <div className={styles['nav-menu']}>
            <Logo />
            <div
              className={styles['link']}
              onClick={(event) => {
                event.stopPropagation();
                goToHome();
              }}
            >
              <HomeIcon />
              <div className={styles['text']}>{t('navigation.home')}</div>
            </div>
            <div
              className={styles['link']}
              onClick={(event) => {
                event.stopPropagation();
                goToInventory();
              }}
            >
              <MonstersIcon />
              <div className={styles['text']}>{t('navigation.monsters')}</div>
            </div>
            <div
              className={styles['link']}
              onClick={(event) => {
                event.stopPropagation();
                goToAppleSakuMonsters();
              }}
            >
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
            <div
              className={classNames(styles['bottom-title'], styles['title'])}
            >
              <div
                className={styles['play-container']}
                onClick={(event) => {
                  event.stopPropagation();
                  if (videoRef && !!videoRef.current) {
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                }}
              >
                <PlayIcon />
              </div>
              <div>{t('landing.monsters')}</div>
            </div>
          </div>

          <div className={styles['bottom-content']}>
            <div
              className={styles['saku-card']}
              onClick={(event) => {
                event.stopPropagation();
                goToAppleSakuMonsters();
              }}
            />
            <div className={styles['content']}>
              <div className={styles['title']}>{t('landing.collect')}</div>
              <div>{t('landing.download')}</div>
              <Button
                onClick={goToAppleSakuMonsters}
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
    </div>
  );
}
