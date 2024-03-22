import styles from './phase-three.module.scss';
import { useTranslation } from 'react-i18next';
import { CardTitleOption } from '../card-title-option/card-title-option';
import { useCardTitleStore } from '../../hooks/use-card-title-store';
import { useOnInit } from '../../../shared/hooks/use-on-init';
import Kanjis from '../../../../../assets/svgs/kanjis.svg';
import Coins from '../../../../../assets/pngs/bg_phase_three_coins.png';
import PhaseThreeBirdmonster from '../../../../../assets/pngs/phase_three_birdmonster.png';

export function PhaseThree() {
  const { t } = useTranslation();
  const phaseThreeTitleOptions = [
    { title: t('phase-three.community'), sup: '01' },
    { title: t('phase-three.saku'), sup: '02' },
  ];
  const paragraphPerTitleOption = {
    [t('phase-three.community')]: t('phase-three.community-paragraph'),
    [t('phase-three.saku')]: t('phase-three.saku-paragraph'),
  };
  const { currentPhaseThreeOption, setCurrentPhaseThreeOption } =
    useCardTitleStore();

  const handleSelect = (selectedOption: string) => {
    setCurrentPhaseThreeOption(selectedOption);
  };

  const paragraph = () => {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {currentPhaseThreeOption && (
          <p className={styles['p']}>
            {paragraphPerTitleOption[currentPhaseThreeOption]}
          </p>
        )}
      </>
    );
  };

  useOnInit(() => {
    setCurrentPhaseThreeOption(phaseThreeTitleOptions[1].title);
  });

  return (
    <div className={styles['container']}>
      <div className={styles['card-container']}>
        <div className={styles['bg-pt-card']} />
        <div className={styles['content']}>
          <div className={styles['left']}>
            <div className={styles['t-container']}>
              <div className={styles['phase']}>{t('phase-three.phase')}</div>
              <div className={styles['k-container']}>
                <Kanjis />
              </div>
            </div>
            <div className={styles['opts-container']}>
              {phaseThreeTitleOptions &&
                phaseThreeTitleOptions.map((opt) => (
                  <CardTitleOption
                    key={`${opt.title}-${opt.sup}`}
                    onClick={() => handleSelect(opt.title)}
                    option={opt}
                    selected={opt.title === currentPhaseThreeOption}
                    className={styles['opt-pt']}
                  />
                ))}
            </div>
            {paragraphPerTitleOption && currentPhaseThreeOption && paragraph()}
          </div>
          <div className={styles['right']}>
            <div className={styles['coins-container']}>
              <img src={Coins} alt="phase-three-coins" />
            </div>
            <div className={styles['ptb-container']}>
              <img src={PhaseThreeBirdmonster} alt="phase-three-birdmonster" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}