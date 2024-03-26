import { useTranslation } from 'react-i18next';
import { TokenCard } from '../token-card/token-card';
import styles from './inventory-page.module.scss';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import { useOnInit } from '../../../shared/hooks/use-on-init';
import { Logo } from '../../../core/components/logo/logo';
import { LanguageSelector } from '../../../core/components/language-selector/language-selector';
import { Button } from '../../../ui/components/button/button';
import { Filters } from '../filters/filters';
import { FilterBar } from '../filter-bar/filter-bar';
import { Information } from '../../../ui/components/information/information';
import { CircularProgress } from '@mui/material';
import { useDeviceType } from '../../../shared/hooks/use-device-type';

export function InventoryPage() {
  const { t } = useTranslation();
  const { syncTokens, loadingTokens, filteredTokens, setInitialValue } =
    useTokensFacade();
  const { isMinDesktopSmall } = useDeviceType();

  useOnInit(() => {
    syncTokens();
  });

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <Logo className={styles['logo']} />
        {isMinDesktopSmall && <LanguageSelector contrasted={true} />}
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
        {loadingTokens && (
          <Information>
            <div className={styles['info-title']}>{t('inventory.loading')}</div>
            <CircularProgress variant={'indeterminate'} />
          </Information>
        )}
        {!loadingTokens && filteredTokens.length === 0 && (
          <Information>
            <div className={styles['info-title']}>
              {t('inventory.not-found')}
            </div>
            <div className={styles['hint']}></div>
            {t('inventory.hint')}
            <Button onClick={setInitialValue} className={styles['button']}>
              {t('filter.reset')}
            </Button>
          </Information>
        )}
        {!loadingTokens && filteredTokens.length > 0 && (
          <div className={styles['grid-area']}>
            {filteredTokens.map((token) => (
              <TokenCard token={token} key={token.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
