import styles from './phase-one.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Phone from '../../../../../assets/pngs/phase_one_phone_hq.png';
import Drop from '../../../../../assets/pngs/phase_one_drop.png';
import Egg from '../../../../../assets/gifs/egg.gif';
import Coin from '../../../../../assets/pngs/phase_one_coin.png';
import Phantom from '../../../../../assets/svgs/phase_one_phantom_robot.svg';
import AdultMarina from '../../../../../assets/gifs/phase_one_adult_marina.gif';
import AppleIcon from '../../../../../assets/icons/apple_icon.svg';
import GooglePlayIcon from '../../../../../assets/icons/google_play_icon.svg';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { Button } from '../../../ui/components/button/button';

export function PhaseOne() {
  const { t } = useTranslation();
  const { goToAppleSakuMonsters } = useRouter();

  return (
    <div className={styles['container']}>
      <div className={styles['up']}>
        <div className={styles['phase-mobile']}>{t('phase-one.phase')}</div>
        <div className={styles['comp']}>{t('phase-one.compete')}</div>
        <div className={styles['p-container']}>
          <div className={styles['phase-desktop']}>{t('phase-one.phase')}</div>
          <p className={styles['p']}>{t('phase-one.p-phase')}</p>
        </div>
      </div>
      <div className={styles['po-cards-container']}>
        <div className={styles['bg-blue-c']}>
          <div className={styles['r-container']}>
            <div className={styles['rating']}>4.7</div>
            <div className={styles['ar']}>{t('phase-one.app-rating')}</div>
          </div>
          <div className={styles['mid-section']}>
            <div className={styles['blue-title']}>
              <div>{t('phase-one.blue-title')}</div>
              <div className={styles['drop-container']}>
                <img src={Drop} alt="drop" />
              </div>
            </div>
            <p className={styles['p-blue']}>{t('phase-one.p-blue')}</p>
          </div>
          <div>
            <div className={styles['u-container']}>
              <div className={styles['uk']}>70K+</div>
              <div className={styles['users']}>{t('phase-one.users')}</div>
            </div>
          </div>
          <div className={styles['btns-container']}>
            <Button className={styles['btn']} onClick={goToAppleSakuMonsters}>
              <div className={styles['store-icon-container']}>
                <AppleIcon />
              </div>
              <span>{t('phase-one.apple')}</span>
            </Button>
            <Button
              className={styles['btn']}
              onClick={goToAppleSakuMonsters}
              disabled={true}
            >
              <div className={styles['store-icon-container']}>
                <GooglePlayIcon />
              </div>
              <span>{t('phase-one.google')}</span>
            </Button>
          </div>
        </div>
        <div className={styles['bg-green-c']}>
          <div className={styles['arrow-container']}>
            <ArrowForwardIosIcon />
          </div>
          <div className={styles['phone-container']}>
            <img src={Phone} alt="phone" />
          </div>
          <div className={styles['mid-section']}>
            <p className={styles['p-green']}>{t('phase-one.p-green')}</p>
            <div className={styles['green-orange-title']}>
              <div>{t('phase-one.green-title')}</div>
              <div className={styles['egg-container']}>
                <img src={Egg} alt="egg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['bg-orange-c']}>
          <div className={styles['mid-section']}>
            <div className={styles['green-orange-title']}>
              <div>{t('phase-one.orange-title')}</div>
              <div className={styles['coin-container']}>
                <img src={Coin} alt="coin" />
              </div>
            </div>
            <p className={styles['p-orange']}>{t('phase-one.p-orange')}</p>
          </div>
          <div className={styles['bg-sub']}>
            <div className={styles['g-container']}>
              <div className={styles['q']}>150</div>
              <div className={styles['gen']}>{t('phase-one.gen')}</div>
            </div>
            <div className={styles['phantom-container']}>
              <Phantom />
            </div>
            <div className={styles['nessi-container']}>
              <img src={AdultMarina} alt="adult-chu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
