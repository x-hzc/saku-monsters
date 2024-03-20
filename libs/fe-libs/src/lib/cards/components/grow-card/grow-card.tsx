import styles from './grow-card.module.scss';
import { useTranslation } from 'react-i18next';
import GrowHappiness from '../../../../../assets/pngs/grow_happiness.png';
import Egg from '../../../../../assets/pngs/egg.png';
import AdultChu from '../../../../../assets/adult_chu.gif';
import BabyChu from '../../../../../assets/baby_chu.gif';

export function GrowCard() {
  const { t } = useTranslation();

  return (
    <div className={styles['container']}>
      <div className={styles['bg']} />
      <div className={styles['content']}>
        <div className={styles['gh-container']}>
          <img src={GrowHappiness} alt="grow-happiness" />
        </div>
        <div className={styles['down']}>
          <div className={styles['opts-container']}>
            <div className={styles['opt']}>
              <span className={styles['disabled-opt']}>
                {t('grow-card.shop')}
              </span>
              <sup className={styles['disabled-sup']}>01</sup>
            </div>
            <div className={styles['opt']}>
              <span className={styles['active-opt']}>
                {t('grow-card.grow')}
              </span>
              <sup className={styles['active-sup']}>02</sup>
            </div>
            <div className={styles['opt']}>
              <span className={styles['disabled-opt']}>
                {t('grow-card.collect')}
              </span>
              <sup className={styles['disabled-sup']}>03</sup>
            </div>
          </div>
          <p className={styles['paragraph']}>{t('grow-card.paragraph')}</p>
          <div className={styles['phases']}>
            <div className={styles['phase']}>
              <div className={styles['egg-container']}>
                <img src={Egg} alt="egg" />
              </div>
              <span className={styles['egg-span']}>{t('grow-card.egg')}</span>
            </div>
            <div className={styles['phase']}>
              <div className={styles['img-container']}>
                <img src={BabyChu} alt="chu" />
              </div>
              <span>{t('grow-card.baby')}</span>
            </div>
            <div className={styles['phase']}>
              <div className={styles['img-container']}>
                <img src={AdultChu} alt="adult-chu" />
              </div>
              <span>{t('grow-card.adult')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
