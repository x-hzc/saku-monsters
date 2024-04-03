import styles from './landing.module.scss';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { useHeroVideo } from '../../hooks/use-hero-video';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { Logo } from '../../../core/components/logo/logo';
import { LanguageSelector } from '../../../core/components/language-selector/language-selector';
import { Button } from '../../../ui/components/button/button';
import { MenuMobile } from '../../../core/components/menu-mobile/menu-mobile';
import LogoKanjiIcon from '../../../../../assets/icons/logo_kanji.svg';
import PlayIcon from '../../../../../assets/icons/play.svg';
import CloseIcon from '../../../../../assets/icons/close.svg';
import HomeIcon from '../../../../../assets/icons/home.svg';
import MonstersIcon from '../../../../../assets/icons/monsters.svg';
import StoreIcon from '../../../../../assets/icons/store.svg';
import AppleIcon from '../../../../../assets/icons/apple.svg';
import cn from 'classnames';

export function Landing() {
  const { t } = useTranslation();
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const {
    goToInventory,
    goToHome,
    goToAppleSakuMonsters,
    goToMarketplace
  } = useRouter();
  const {
    setIsPlaying,
    isPlaying,
    playVideo,
    endVideo
  } = useHeroVideo(videoRef);
  const { isMinLargeTablet } = useDeviceType();

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
        className={cn(styles['video-container'], {
          [styles['playing']]: isPlaying,
        })}
      >
        <div
          className={cn(styles['play-container'], styles['close'])}
          onClick={(ev) => {
            ev.stopPropagation();
            return endVideo();
          }}
        >
          <CloseIcon />
        </div>
        <video
          className={cn(styles['video'], {
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
                goToMarketplace();
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
            <div className={cn(styles['top-title'], styles['title'])}>
              <div>{t('landing.saku')}</div>
              <LogoKanjiIcon />
            </div>
            <div className={cn(styles['bottom-title'], styles['title'])}>
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
