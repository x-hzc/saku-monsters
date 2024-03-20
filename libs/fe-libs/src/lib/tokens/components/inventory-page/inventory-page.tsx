import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { TokenCard } from '../token-card/token-card';
import styles from './inventory-page.module.scss';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import { useOnInit } from '../../../shared/hooks/use-on-init';

export function InventoryPage() {
  const { t } = useTranslation();
  const { goToHome } = useRouter();
  const { syncTokens, tokens, loadingTokens } = useTokensFacade();

  useOnInit(() => {
    syncTokens();
  });

  return (
    <div className={styles['container']}>
      <h1>{t('inventory.inventory')}</h1>
      <div onClick={goToHome} style={{ cursor: 'pointer' }}>
        {t('inventory.goToHome')}
      </div>
      <div className={styles['grid-area']}>
        {loadingTokens && <div>Loader</div>}
        {!loadingTokens &&
          tokens.length > 0 &&
          tokens.map((token) => <TokenCard token={token} key={token.id} />)}
      </div>
    </div>
  );
}
