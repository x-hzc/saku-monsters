import styles from './grow-card.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import GrowHappiness from '../../../../../assets/pngs/grow_happiness.png';
import Egg from '../../../../../assets/pngs/egg.png';
import AdultChu from '../../../../../assets/adult_chu.gif';
import BabyChu from '../../../../../assets/baby_chu.gif';
import cn from 'classnames';

interface Option {
  title: string;
  sup: string;
}

export function GrowCard() {
  const { t } = useTranslation();
  const options = [
    { title: t('grow-card.shop'), sup: '01' },
    { title: t('grow-card.grow'), sup: '02' },
    { title: t('grow-card.collect'), sup: '03' },
  ];
  const paragraphPerOption = {
    [t('grow-card.shop')]: t('grow-card.shop-paragraph'),
    [t('grow-card.grow')]: t('grow-card.grow-paragraph'),
    [t('grow-card.collect')]: t('grow-card.collect-paragraph'),
  };
  const [currentOption, setCurrentOption] = useState(options[1].title);

  const handleSelect = (selectedOption: string) => {
    setCurrentOption(selectedOption);
  };

  const option = (opt: Option) => {
    return (
      <div
        key={`${opt.title}-${opt.sup}`}
        onClick={() => handleSelect(opt.title)}
        className={cn(styles['opt'], {
          [styles['is-selected']]: opt.title === currentOption,
        })}
      >
        <span className={styles['tittle']}>{opt.title}</span>
        <sup className={styles['sup']}>{opt.sup}</sup>
      </div>
    );
  };

  const paragraph = () => {
    return (
      <p className={styles['paragraph']}>{paragraphPerOption[currentOption]}</p>
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

  return (
    <div className={styles['container']}>
      <div className={styles['bg']} />
      <div className={styles['content']}>
        <div className={styles['gh-container']}>
          <img src={GrowHappiness} alt="grow-happiness" />
        </div>
        <div className={styles['down']}>
          <div className={styles['opts-container']}>
            {options && options.map((opt) => option(opt))}
          </div>
          {paragraphPerOption && currentOption && paragraph()}
          {currentOption && currentOption === t('grow-card.shop')
            ? shopImages()
            : currentOption === t('grow-card.grow')
            ? growImages()
            : collectImages()}
        </div>
      </div>
    </div>
  );
}
