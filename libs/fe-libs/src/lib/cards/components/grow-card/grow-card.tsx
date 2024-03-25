import styles from './grow-card.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo } from 'react';
import { useCardTitleStore } from '../../hooks/use-card-title-store';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { CardTitleOption } from '../card-title-option/card-title-option';
import GrowHappinessMobile from '../../../../../assets/pngs/grow_happiness_mobile.png';
import GrowHappinessDesktop from '../../../../../assets/pngs/grow_happiness_desktop.png';
import Egg from '../../../../../assets/pngs/egg.png';
import AdultChu from '../../../../../assets/pngs/grow_adult_chu.png';
import BabyChu from '../../../../../assets/pngs/grow_baby_chu.png';

export function GrowCard() {
  const { i18n, t } = useTranslation();
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
    return <></>;
  };

  const growImages = () => {
    return (
      <div className={styles['phases']}>
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
    return <></>;
  };

  useEffect(() => {
    setCurrentGrowOption(growTitleOptions[1].title);
  }, [growTitleOptions, i18n.resolvedLanguage, setCurrentGrowOption]);

  return (
    <div className={styles['container']}>
      <div className={styles['bg']} />
      <div className={styles['content']}>
        <div className={styles['gh-container']}>
          <img
            src={isMobile ? GrowHappinessMobile : GrowHappinessDesktop}
            alt="grow-happiness"
          />
        </div>
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
