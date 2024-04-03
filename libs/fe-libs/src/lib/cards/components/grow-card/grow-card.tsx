import styles from './grow-card.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo } from 'react';
import { useCardTitleStore } from '../../hooks/use-card-title-store';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { useRouter } from '../../../routing/hooks/use-router';
import { Button } from '../../../ui/components/button/button';
import { CardTitleOption } from '../card-title-option/card-title-option';
import GrowHappinessMobile from '../../../../../assets/pngs/grow_happiness_mobile.png';
import GrowHappinessDesktop from '../../../../../assets/pngs/grow_happiness_desktop_hq.png';
import AdultChu from '../../../../../assets/adult_chu.gif';
import BabyChu from '../../../../../assets/baby_chu.gif';
import Egg from '../../../../../assets/pngs/egg.png';
import AdultShumoku from '../../../../../assets/adult_shumoku.gif';
import AdultHowler from '../../../../../assets/adult_howler.gif';
import AdultDatboi from '../../../../../assets/adult_datboi.gif';

export function GrowCard() {
  const { i18n, t } = useTranslation();
  const { goToMarketplace } = useRouter();
  const growTitleOptions = useMemo(
    () => [
      { title: t('grow-card.shop'), sup: '01' },
      { title: t('grow-card.grow'), sup: '02' },
      { title: t('grow-card.collect'), sup: '03' },
    ],
    [t]
  );
  const paragraphPerTitleOption = {
    [t('grow-card.shop')]: t('grow-card.shop-paragraph'),
    [t('grow-card.grow')]: t('grow-card.grow-paragraph'),
    [t('grow-card.collect')]: t('grow-card.collect-paragraph'),
  };
  const { currentGrowOption, setCurrentGrowOption } = useCardTitleStore();
  const { isMobile } = useDeviceType();

  const handleSelect = (selectedOption: string) => {
    setCurrentGrowOption(selectedOption);
  };

  const paragraph = () => {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {currentGrowOption && (
          <p className={styles['p']}>
            {paragraphPerTitleOption[currentGrowOption]}
          </p>
        )}
      </>
    );
  };

  const shopImages = () => {
    return (
      <Button
        className={styles['btn']}
        onClick={goToMarketplace}
        type={'discover'}
      >
        {t('grow-card.shop')}
      </Button>
    );
  };

  const growImages = () => {
    return (
      <div className={styles['phases-container']}>
        <div className={styles['phase-full']}>
          <div className={styles['egg-container']}>
            <img src={Egg} alt="egg" />
          </div>
          <span>{t('grow-card.egg')}</span>
        </div>
        <div className={styles['phase']}>
          <div className={styles['baby-container']}>
            <img src={BabyChu} alt="chu" />
          </div>
          <span>{t('grow-card.baby')}</span>
        </div>
        <div className={styles['phase']}>
          <div className={styles['adult-container']}>
            <img src={AdultChu} alt="adult-chu" />
          </div>
          <span>{t('grow-card.adult')}</span>
        </div>
      </div>
    );
  };

  const collectImages = () => {
    return (
      <div className={styles['collect-monsters-container']}>
        <div className={styles['monster-full']}>
          <div className={styles['shumoku-container']}>
            <img src={AdultShumoku} alt="shumoku" />
          </div>
          <span>Shumoku</span>
        </div>
        <div className={styles['monster']}>
          <div className={styles['howler-container']}>
            <img src={AdultHowler} alt="howler" />
          </div>
          <span>Howler</span>
        </div>
        <div className={styles['monster']}>
          <div className={styles['datboi-container']}>
            <img src={AdultDatboi} alt="datboi" />
          </div>
          <span>Datboi</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setCurrentGrowOption(growTitleOptions[1].title);
  }, [growTitleOptions, i18n.resolvedLanguage, setCurrentGrowOption]);

  return (
    <div className={styles['container']}>
      <div className={styles['bg']} />
      <div className={styles['content']}>
        {isMobile ? (
          <div className={styles['ghm-container']}>
            <img src={GrowHappinessMobile} alt="grow-happiness" />
          </div>
        ) : (
          <div className={styles['ghd-container']}>
            <img src={GrowHappinessDesktop} alt="grow-happiness" />
          </div>
        )}
        <div className={styles['down']}>
          <div className={styles['opts-container']}>
            {growTitleOptions &&
              growTitleOptions.map((opt) => (
                <CardTitleOption
                  key={`${opt.title}-${opt.sup}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleSelect(opt.title);
                  }}
                  option={opt}
                  selected={opt.title === currentGrowOption}
                  className={styles['opt-g']}
                />
              ))}
          </div>
          {paragraphPerTitleOption && currentGrowOption && paragraph()}
          {currentGrowOption && currentGrowOption === t('grow-card.shop')
            ? shopImages()
            : currentGrowOption === t('grow-card.grow')
            ? growImages()
            : collectImages()}
        </div>
      </div>
    </div>
  );
}
