import styles from './grow-card.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import GrowHappiness from '../../../../../assets/pngs/grow_happiness.png';
import Egg from '../../../../../assets/pngs/egg.png';
import AdultChu from '../../../../../assets/Adult Chu.gif';
import Chu from '../../../../../assets/Chu_1.gif';
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

  const optionComponent = (option: Option) => {
    return (
      <div
        key={`${option.title}-${option.sup}`}
        onClick={() => handleSelect(option.title)}
        className={cn(styles['opt'], {
          [styles['is-selected']]: option.title === currentOption,
        })}
      >
        <span className={styles['tittle']}>{option.title}</span>
        <sup className={styles['sup']}>{option.sup}</sup>
      </div>
    );
  };

  const paragraphComponent = () => {
    return (
      <p className={styles['paragraph']}>{paragraphPerOption[currentOption]}</p>
    );
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
            {options && options.map((option) => optionComponent(option))}
          </div>
          {paragraphPerOption && currentOption && paragraphComponent()}
          <div className={styles['phases']}>
            <div className={styles['phase']}>
              <div className={styles['egg-container']}>
                <img src={Egg} alt="egg" />
              </div>
              <span className={styles['egg-span']}>{t('grow-card.egg')}</span>
            </div>
            <div className={styles['phase']}>
              <div className={styles['img-container']}>
                <img src={Chu} alt="chu" />
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
