import styles from './phase-one.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Phone from '../../../../../assets/pngs/phase_one_phone.png';
import Drop from '../../../../../assets/pngs/phase_one_drop.png';
import Egg from '../../../../../assets/pngs/egg.png';
import Coin from '../../../../../assets/pngs/phase_one_coin.png';
import Phantom from '../../../../../assets/svgs/phase_one_phantom_robot.svg';
import AdultNessi from '../../../../../assets/adult_marina.gif';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { Button } from '../../../ui/components/button/button';

export function PhaseOne() {
  const { t } = useTranslation();
  const { goToAppleSakuMonsters } = useRouter();

  return (
    <div className={styles['container']}>
      <div className={styles['up']}>
        <div className={styles['comp']}>Compete against others</div>
        <div className={styles['p-container']}>
          <div className={styles['phs']}>PHASE 1</div>
          <p className={styles['p']}>
            During Phase 1 of the Saku Monsters experience, over 70,000 users
            competed against each other to take care of a Saku Monster egg and
            earn Saku coins.
          </p>
        </div>
      </div>
      <div className={styles['cards-container']}>
        <div className={styles['bg-blue-c']}>
          <div className={styles['r-container']}>
            <div className={styles['rating']}>4.7</div>
            <div className={styles['ar']}>App Rating</div>
          </div>
          <div className={styles['mid-section']}>
            <div className={styles['blue-title']}>
              <div>DOWNLOAD THE APP</div>
              <div className={styles['drop-container']}>
                <img src={Drop} alt="drop" />
              </div>
            </div>
            <p className={styles['p-blue']}>
              Download Now, Hatch Eggs, Earn Rewards Today!
            </p>
          </div>
          <div>
            <div className={styles['u-container']}>
              <div className={styles['uk']}>70K+</div>
              <div className={styles['users']}>Users</div>
            </div>
          </div>
          <div className={styles['btns-container']}>
            <Button className={styles['btn']} onClick={goToAppleSakuMonsters}>
              <div>
                <span>Apple Store</span>
              </div>
            </Button>
            <Button className={styles['btn']} onClick={goToAppleSakuMonsters}>
              <div>
                <span>Google Play</span>
              </div>
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
            <p className={styles['p-green']}>
              Your egg needs love and attention on a daily basis, so make sure
              you take good care of it.
            </p>
            <div className={styles['orange-title']}>
              <div>LOVE</div>
              <div className={styles['egg-container']}>
                <img src={Egg} alt="egg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['bg-orange-c']}>
          <div className={styles['mid-section']}>
            <div className={styles['orange-title']}>
              <div>HATCH AND EARN</div>
              <div className={styles['coin-container']}>
                <img src={Coin} alt="coin" />
              </div>
            </div>
            <p className={styles['p-orange']}>
              Each Saku Monster has its own unique traits, abilities, and
              personality.
            </p>
          </div>
          <div className={styles['bg-sub']}>
            <div className={styles['g-container']}>
              <div className={styles['q']}>150</div>
              <div className={styles['gen']}>Gen 1 Monsters</div>
            </div>
            <div className={styles['phantom-container']}>
              <Phantom />
            </div>
            <div className={styles['nessi-container']}>
              <img src={AdultNessi} alt="adult-chu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
