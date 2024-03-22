import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { TokenCard } from '../token-card/token-card';
import styles from './inventory-page.module.scss';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import { useOnInit } from '../../../shared/hooks/use-on-init';
import { Logo } from '../../../core/components/logo/logo';
import { LanguageSelector } from '../../../core/components/language-selector/language-selector';
import { Button } from '../../../ui/components/button/button';
import { TOKEN_RARITY_ICON } from '../../helpers/token-rarity-icon-mapper';
import { TokenRarityType } from '@saku-monsters/shared';
import { Filters } from '../filters/filters';
import { FilterBar } from '../filter-bar/filter-bar';

export function InventoryPage() {
  const { t } = useTranslation();
  const { syncTokens, loadingTokens, filteredTokens } = useTokensFacade();

  useOnInit(() => {
    syncTokens();
  });

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <Logo className={styles['logo']} />
        <LanguageSelector contrasted={true} />
      </div>
      <div className={styles['top-content']}>
        <div className={styles['text-container']}>
          <div className={styles['title']}>SakuLog</div>
          <div className={styles['text']}>{t('inventory.log')}</div>
        </div>
        <FilterBar />
      </div>
      <div className={styles['content']}>
        <Filters />
        <div className={styles['grid-area']}>
          {loadingTokens && <div>Loader</div>}
          {!loadingTokens &&
            filteredTokens.length > 0 &&
            filteredTokens.map((token) => (
              <TokenCard token={token} key={token.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
