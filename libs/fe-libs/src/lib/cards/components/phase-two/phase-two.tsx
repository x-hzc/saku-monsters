import styles from './phase-two.module.scss';
import { useTranslation } from 'react-i18next';
import KanjiLogo from '../../../../../assets/icons/logo_kanji.svg';
import { Button } from '../../../ui/components/button/button';
import { useRouter } from '../../../routing/hooks/use-router';
import { TokenCard } from '../../../tokens/components/token-card/token-card';
import { useTokensFacade } from '../../../tokens/hooks/use-tokens-facade';
import { useOnInit } from '../../../shared/hooks/use-on-init';
export function PhaseTwo() {
  const { t } = useTranslation();
  const { goToInventory } = useRouter();
  const { findTokenById, syncTokens, tokens } = useTokensFacade();
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
          <div className={styles['front-card']}>
            {axle && <TokenCard token={axle} />}
          </div>
          <div className={styles['back-card']}>
            {odin && <TokenCard token={odin} />}
          </div>
        </div>
      </div>
    </div>
  );
}
