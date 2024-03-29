import styles from './intro-card.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { Button } from '../../../ui/components/button/button';
import Kanjis from '../../../../../assets/svgs/kanjis.svg';
import IntroEgg from '../../../../../assets/pngs/bg_intro_egg.png';
import IntroSakuMonsters from '../../../../../assets/pngs/intro_saku_monster.png';
import IntroBirdmonster from '../../../../../assets/pngs/intro_birdmonster.png';

export function IntroCard() {
  const { t } = useTranslation();
  const { goToInventory } = useRouter();

  return (
    <div className={styles['container']}>
      <div className={styles['intro-card-container']}>
        <div className={styles['bg']} />
        <div className={styles['content']}>
          <div className={styles['left']}>
            <div className={styles['up']}>
              <div className={styles['t-container']}>
                <h4 className={styles['title']}>{t('intro-card.title')}</h4>
                <div className={styles['k-container']}>
                  <Kanjis />
                </div>
              </div>
              <div className={styles['isml-container']}>
                <img src={IntroSakuMonsters} alt="intro-saku-monsters-left" />
              </div>
            </div>
            <p className={styles['paragraph']}>{t('intro-card.paragraph')}</p>
            <Button
              className={styles['btn']}
              onClick={goToInventory}
              type={'discover'}
            >
              {t('intro-card.button')}
            </Button>
          </div>
          <div className={styles['right']}>
            <div className={styles['bg-intro-egg-container']}>
              <img src={IntroEgg} alt="bg-intro-egg" />
            </div>
            <div className={styles['bttm']}>
              <div className={styles['ismr-container']}>
                <img src={IntroSakuMonsters} alt="intro-saku-monsters-right" />
              </div>
            </div>
            <div className={styles['ib-container']}>
              <img src={IntroBirdmonster} alt="intro-birdmonster" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
