import styles from './phase-three.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo } from 'react';
import { useCardTitleStore } from '../../hooks/use-card-title-store';
import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { CardTitleOption } from '../card-title-option/card-title-option';
import Kanjis from '../../../../../assets/svgs/kanjis.svg';
import CoinsMobile from '../../../../../assets/pngs/bg_phase_three_coins_mobile.png';
import CoinsDesktop from '../../../../../assets/pngs/bg_phase_three_coins_desktop.png';
import Island from '../../../../../assets/pngs/bg_phase_three_island.png';
import PhaseThreeBirdmonster from '../../../../../assets/pngs/phase_three_birdmonster.png';
import cn from 'classnames';

export function PhaseThree() {
  const { i18n, t } = useTranslation();
  const phaseThreeTitleOptions = useMemo(
    () => [
      { title: t('phase-three.island'), sup: '01' },
      { title: t('phase-three.saku'), sup: '02' },
    ],
    [t]
  );
  const paragraphPerTitleOption = {
    [t('phase-three.island')]: t('phase-three.island-paragraph'),
    [t('phase-three.saku')]: t('phase-three.saku-paragraph'),
  };
  const {
    currentPhaseThreeOption,
    setCurrentPhaseThreeOption,
    currentPhaseThreeOptionSup,
    setCurrentPhaseThreeOptionSup,
  } = useCardTitleStore();
  const { isMaxTablet } = useDeviceType();

  const handleSelect = (selectedOption: { title: string; sup: string }) => {
    setCurrentPhaseThreeOption(selectedOption.title);
    setCurrentPhaseThreeOptionSup(selectedOption.sup);
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

  useEffect(() => {
    setCurrentPhaseThreeOption(phaseThreeTitleOptions[1].title);
    setCurrentPhaseThreeOptionSup(phaseThreeTitleOptions[1].sup);
  }, [
    i18n.resolvedLanguage,
    phaseThreeTitleOptions,
    setCurrentPhaseThreeOption,
    setCurrentPhaseThreeOptionSup,
  ]);

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
                    onClick={(event) => {
                      event.stopPropagation();
                      handleSelect(opt);
                    }}
                    option={opt}
                    selected={opt.title === currentPhaseThreeOption}
                    className={cn(styles['opt-pt'], {
                      [styles['opt-pt-end']]: opt.sup === '02',
                    })}
                  />
                ))}
            </div>
            {paragraphPerTitleOption && currentPhaseThreeOption && paragraph()}
          </div>
          <div className={styles['right']}>
            {currentPhaseThreeOptionSup === '02' ? (
              <div className={styles['coins-container']}>
                <img
                  src={isMaxTablet ? CoinsMobile : CoinsDesktop}
                  alt="phase-three-coins"
                />
              </div>
            ) : (
              <div className={styles['island-container']}>
                <img
                  src={Island}
                  alt="phase-three-island"
                />
              </div>
            )}
            <div className={styles['ptb-container']}>
              <img src={PhaseThreeBirdmonster} alt="phase-three-birdmonster" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
