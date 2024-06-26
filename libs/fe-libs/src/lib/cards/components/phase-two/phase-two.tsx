import styles from './phase-two.module.scss';
import { useTranslation } from 'react-i18next';
import { useOnInit } from '../../../shared/hooks/use-on-init';
import { useRouter } from '../../../routing/hooks/use-router';
import { useTokensFacade } from '../../../tokens/hooks/use-tokens-facade';
import { TokensCard } from '../../../tokens/components/tokens-card/tokens-card';
import { Button } from '../../../ui/components/button/button';
import KanjiLogo from '../../../../../assets/icons/logo_kanji.svg';

export function PhaseTwo() {
  const { t } = useTranslation();
  const { goToInventory } = useRouter();
  const { findTokenById, syncTokens } = useTokensFacade();
  const axle = findTokenById('AXLE');
  const odin = findTokenById('ODIN');

  useOnInit(() => {
    syncTokens();
  });

  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['title-container']}>
          <div className={styles['phase']}>{t('phase-two.phase')}</div>
          <KanjiLogo />
          <div className={styles['title']}>{t('phase-two.title')}</div>
        </div>
        <div className={styles['discover-container']}>
          <div className={styles['discover']}>{t('phase-two.discover')}</div>
          <Button
            className={styles['btn']}
            onClick={goToInventory}
            type={'discover'}
          >
            {t('intro-card.button')}
          </Button>
        </div>
        <div className={styles['cards-container']}>
          <div className={styles['front-card-container']}>
            {axle && (
              <TokensCard
                token={axle}
                containerClassName={styles['front-card']}
                bubbleImgClassName={styles['bubble-axle-img']}
                tokenImgClassName={styles['token-axle-img']}
              />
            )}
          </div>
          <div className={styles['back-card-container']}>
            {odin && (
              <TokensCard
                token={odin}
                containerClassName={styles['back-card']}
                bubbleImgClassName={styles['bubble-odin-img']}
                tokenImgClassName={styles['token-odin-img']}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
