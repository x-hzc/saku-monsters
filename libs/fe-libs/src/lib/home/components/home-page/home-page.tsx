import styles from './home-page.module.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useHeroVideo } from '../../hooks/use-hero-video';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { Landing } from '../landing/landing';
import { IntroCard } from '../../../cards/components/intro-card/intro-card';
import { PhaseOne } from '../../../cards/components/phase-one/phase-one';
import { GrowCard } from '../../../cards/components/grow-card/grow-card';
import { PhaseTwo } from '../../../cards/components/phase-two/phase-two';
import { PhaseThree } from '../../../cards/components/phase-three/phase-three';
import { Roadmap } from '../roadmap/roadmap';
import { Footer } from '../../../core/components/footer/footer';
import { Cloud } from '../cloud/cloud';
import { CLOUD_IMAGE_MAPPER } from '../../helpers/cloud-image-mapper';
import classNames from 'classnames';

export function HomePage() {
  const { isPlaying } = useHeroVideo();
  const { isMaxTablet, isMinDesktopSmall } = useDeviceType();

  return (
    <div className={styles['container']}>
      <div className={styles['app-linear-bg']} />
      <ParallaxProvider>
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[1]}
          topPercentage={isMaxTablet ? 7 : isMinDesktopSmall ? 12 : 10}
          leftPercentage={75}
          heightPercentage={3.5}
          widthPercentage={27.5}
          traslateX={true}
          parallaxSpeed={0.05}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[2]}
          topPercentage={isMaxTablet ? 7 : isMinDesktopSmall ? 12 : 10}
          leftPercentage={75}
          heightPercentage={3.5}
          widthPercentage={27.5}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[3]}
          topPercentage={isMaxTablet ? 7.7 : isMinDesktopSmall ? 12.7 : 11}
          leftPercentage={18}
          heightPercentage={4.3}
          widthPercentage={29.5}
          traslateX={true}
          parallaxSpeed={0.02}
          zIndex={isMaxTablet ? 2 : isMinDesktopSmall ? 2 : 9}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[4]}
          topPercentage={isMaxTablet ? 7.7 : isMinDesktopSmall ? 12.7 : 11}
          leftPercentage={isMaxTablet ? -5 : -13}
          heightPercentage={4.3}
          widthPercentage={29.5}
          zIndex={isMaxTablet ? 3 : 10}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[5]}
          topPercentage={isMaxTablet ? 10 : isMinDesktopSmall ? 18 : 19}
          leftPercentage={0}
          heightPercentage={4.3}
          widthPercentage={100}
          zIndex={2}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[6]}
          topPercentage={isMaxTablet ? 26 : isMinDesktopSmall ? 25 : 29}
          leftPercentage={0}
          heightPercentage={4.3}
          widthPercentage={100}
          zIndex={2}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[7]}
          topPercentage={isMaxTablet ? 28 : 23}
          leftPercentage={isMaxTablet ? 95 : 100}
          heightPercentage={3.1}
          widthPercentage={isMaxTablet ? 25 : 22}
          traslateX={true}
          parallaxSpeed={isMaxTablet ? 0.02 : 0.04}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[8]}
          topPercentage={isMaxTablet ? 17 : 23}
          leftPercentage={isMaxTablet ? 80 : 81}
          heightPercentage={3.1}
          widthPercentage={isMaxTablet ? 25 : 22}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[9]}
          topPercentage={isMaxTablet ? 25.5 : isMinDesktopSmall ? 31 : 32.5}
          leftPercentage={isMaxTablet ? 95 : 100}
          heightPercentage={1.3}
          widthPercentage={isMaxTablet ? 25 : 19}
          traslateX={true}
          parallaxSpeed={0.02}
          zIndex={isMaxTablet ? 3 : 4}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[10]}
          topPercentage={isMaxTablet ? 31 : isMinDesktopSmall ? 27 : 31}
          leftPercentage={-5}
          heightPercentage={3.9}
          widthPercentage={22.2}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[11]}
          topPercentage={isMaxTablet ? 34 : isMinDesktopSmall ? 31 : 33}
          leftPercentage={77}
          heightPercentage={5.1}
          widthPercentage={35.3}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[12]}
          topPercentage={isMaxTablet ? 36.5 : isMinDesktopSmall ? 31 : 35}
          leftPercentage={-5}
          heightPercentage={4.23}
          widthPercentage={34.4}
          zIndex={3}
        />
        <div
          className={classNames(styles['landing'], {
            [styles['playing']]: isPlaying,
          })}
        >
          <Landing />
        </div>
        <div className={styles['intro']}>
          <IntroCard />
        </div>
        <div className={styles['phase-one']}>
          <PhaseOne />
        </div>
        <div className={styles['wrapper']}>
          <div className={styles['bg-container']} />
          {isMaxTablet && <div className={styles['roadmap-bg']} />}
          <div className={styles['grow-card']}>
            <GrowCard />
          </div>
          <div className={styles['phase-two']}>
            <PhaseTwo />
          </div>
          <div className={styles['phase-three']}>
            <PhaseThree />
          </div>
          <div className={styles['roadmap']}>
            <Roadmap />
          </div>
        </div>
        <Footer />
      </ParallaxProvider>
    </div>
  );
}
