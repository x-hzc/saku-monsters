import styles from './intro-card.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { Button } from '../../../ui/components/button/button';
import IntroKanjis from '../../../../../assets/svgs/intro_kanjis.svg';
import IntroSakuMonster from '../../../../../assets/pngs/intro_saku_monster.png';
import IntroBirdmonster from '../../../../../assets/pngs/intro_birdmonster.png';

export function IntroCard() {
  const { t } = useTranslation();
  const { goToAppleSakuMonsters } = useRouter();

  return (
    <div className={styles['container']}>
      <div className={styles['card-container']}>
        <div className={styles['bg']} />
        <div className={styles['content']}>
          <div className={styles['left']}>
            <div className={styles['t-container']}>
              <h4 className={styles['title']}>{t('intro-card.title')}</h4>
              <div className={styles['ik-container']}>
                <IntroKanjis />
              </div>
            </div>
            <p className={styles['paragraph']}>{t('intro-card.paragraph')}</p>
            <Button
              className={styles['btn']}
              onClick={goToAppleSakuMonsters}
            >
              {t('intro-card.button')}
            </Button>
          </div>
          <div className={styles['right']}>
            <div className={styles['bg-egg']} />
            <div className={styles['bttm']}>
              <div className={styles['ism-container']}>
                <img src={IntroSakuMonster} alt="intro-saku-monster" />
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
