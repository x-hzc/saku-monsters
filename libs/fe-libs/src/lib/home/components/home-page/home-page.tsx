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
import cn from 'classnames';

export function HomePage() {
  const { isPlaying } = useHeroVideo();
  const { isMaxTablet, isMinDesktopSmall, isMinDesktopLarge } = useDeviceType();

  return (
    <div className={styles['container']}>
      <div className={styles['app-linear-bg']} />
      <ParallaxProvider>
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[1]}
          topPercentage={isMaxTablet ? 7 : isMinDesktopSmall ? 8 : 10}
          leftPercentage={isMaxTablet ? 75 : isMinDesktopLarge ? 90 : 75}
          heightPercentage={3.5}
          widthPercentage={27.5}
          traslateX={true}
          parallaxSpeed={0.05}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[2]}
          topPercentage={isMaxTablet ? 7 : isMinDesktopSmall ? 9 : 10}
          leftPercentage={isMaxTablet ? 80 : isMinDesktopLarge ? 95 : 80}
          heightPercentage={3.5}
          widthPercentage={27.5}
          traslateX={true}
          parallaxSpeed={0.02}
          className={styles['opacity']}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[3]}
          topPercentage={isMaxTablet ? 8 : isMinDesktopSmall ? 13 : 12}
          leftPercentage={isMaxTablet ? 18 : isMinDesktopLarge ? 32 : 18}
          heightPercentage={4.3}
          widthPercentage={29.5}
          traslateX={true}
          parallaxSpeed={0.02}
          zIndex={9}
          className={styles['opacity']}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[4]}
          topPercentage={isMaxTablet ? 7.7 : isMinDesktopSmall ? 12.7 : 11}
          leftPercentage={isMaxTablet ? 3 : isMinDesktopLarge ? 25 : 20}
          heightPercentage={4.3}
          widthPercentage={29.5}
          traslateX={true}
          parallaxSpeed={0.04}
          zIndex={isMaxTablet ? 3 : 10}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[5]}
          topPercentage={isMaxTablet ? 8 : isMinDesktopLarge ? 18 : 20}
          leftPercentage={isMaxTablet ? 25 : isMinDesktopLarge ? 105 : 40}
          heightPercentage={4.3}
          widthPercentage={29.5}
          traslateX={true}
          parallaxSpeed={isMaxTablet ? 0.04 : isMinDesktopLarge ? 0.03 : 0.05}
          zIndex={3}
          className={styles['opacity']}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[6]}
          topPercentage={isMaxTablet ? 9 : isMinDesktopLarge ? 18 : 20}
          leftPercentage={isMaxTablet ? 35 : isMinDesktopLarge ? 120 : 0}
          heightPercentage={4.3}
          widthPercentage={29.5}
          traslateX={true}
          parallaxSpeed={isMinDesktopLarge ? 0.05 : 0.08}
          zIndex={3}
          className={styles['opacity']}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[7]}
          topPercentage={isMaxTablet ? 10 : isMinDesktopSmall ? 18 : 19}
          leftPercentage={0}
          heightPercentage={4.3}
          widthPercentage={100}
          zIndex={2}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[8]}
          topPercentage={isMaxTablet ? 26 : isMinDesktopSmall ? 25 : 29}
          leftPercentage={0}
          heightPercentage={4.3}
          widthPercentage={100}
          zIndex={2}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[9]}
          topPercentage={isMaxTablet ? 28 : 23}
          leftPercentage={isMaxTablet ? 95 : 100}
          heightPercentage={3.1}
          widthPercentage={isMaxTablet ? 25 : 22}
          traslateX={true}
          parallaxSpeed={isMaxTablet ? 0.02 : 0.04}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[10]}
          topPercentage={isMaxTablet ? 17 : 23}
          leftPercentage={isMaxTablet ? 80 : 81}
          heightPercentage={3.1}
          widthPercentage={isMaxTablet ? 25 : 22}
          traslateX={true}
          parallaxSpeed={0.06}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[11]}
          topPercentage={isMaxTablet ? 25.5 : isMinDesktopLarge ? 30.5 : 28.8}
          leftPercentage={isMaxTablet ? 95 : isMinDesktopLarge ? 125 : 95}
          heightPercentage={1.3}
          widthPercentage={isMaxTablet ? 25 : 19}
          traslateX={true}
          parallaxSpeed={0.02}
          zIndex={isMaxTablet ? 3 : 4}
          className={styles['opacity']}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[12]}
          topPercentage={isMaxTablet ? 31 : isMinDesktopLarge ? 27 : 31}
          leftPercentage={isMaxTablet ? 30 : isMinDesktopLarge ? 22 : 24}
          heightPercentage={3.9}
          widthPercentage={22.2}
          traslateX={true}
          parallaxSpeed={0.01}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[13]}
          topPercentage={isMaxTablet ? 34 : isMinDesktopSmall ? 26 : 33}
          leftPercentage={isMaxTablet ? 34 : isMinDesktopSmall ? 20 : 20}
          heightPercentage={5.1}
          widthPercentage={35.3}
          traslateX={true}
          parallaxSpeed={0.07}
          zIndex={3}
        />
        <Cloud
          imgSrc={CLOUD_IMAGE_MAPPER[14]}
          topPercentage={isMaxTablet ? 36.5 : isMinDesktopSmall ? 31 : 35}
          leftPercentage={-5}
          heightPercentage={4.23}
          widthPercentage={34.4}
          traslateX={true}
          parallaxSpeed={isMaxTablet ? 0.02 : isMinDesktopLarge ? 0.04 : 0.03}
          zIndex={3}
        />
        <div
          className={cn(styles['landing'], {
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
        <div className={styles['footer']}>
          <Footer />
        </div>
      </ParallaxProvider>
    </div>
  );
}
