import styles from './grow-card.module.scss';
import { useTranslation } from 'react-i18next';
import GrowHappiness from '../../../../../assets/pngs/grow_happiness.png';
import Egg from '../../../../../assets/pngs/egg.png';
import AdultChu from '../../../../../assets/adult_chu.gif';
import BabyChu from '../../../../../assets/baby_chu.gif';
import { useCardTitleStore } from '../../hooks/use-card-title-store';
import { CardTitleOption } from '../card-title-option/card-title-option';
import { useOnInit } from '../../../shared/hooks/use-on-init';

export function GrowCard() {
  const { t } = useTranslation();
  const growTitleOptions = [
    { title: t('grow-card.shop'), sup: '01' },
    { title: t('grow-card.grow'), sup: '02' },
    { title: t('grow-card.collect'), sup: '03' },
  ];
  const paragraphPerTitleOption = {
    [t('grow-card.shop')]: t('grow-card.shop-paragraph'),
    [t('grow-card.grow')]: t('grow-card.grow-paragraph'),
    [t('grow-card.collect')]: t('grow-card.collect-paragraph'),
  };
  const { currentGrowOption, setCurrentGrowOption } = useCardTitleStore();

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
    );
  };

  const collectImages = () => {
    return <></>;
  };

  useOnInit(() => {
    setCurrentGrowOption(growTitleOptions[1].title);
  });

  return (
    <div className={styles['container']}>
      <div className={styles['bg']} />
      <div className={styles['content']}>
        <div className={styles['gh-container']}>
          <img src={GrowHappiness} alt="grow-happiness" />
        </div>
        <div className={styles['down']}>
          <div className={styles['opts-container']}>
            {growTitleOptions &&
              growTitleOptions.map((opt) => (
                <CardTitleOption
                  key={`${opt.title}-${opt.sup}`}
                  onClick={() => handleSelect(opt.title)}
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
