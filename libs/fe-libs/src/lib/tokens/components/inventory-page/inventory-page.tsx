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
import { MenuMobile } from '../../../core/components/menu-mobile/menu-mobile';
import { MobileSearch } from '../../../ui/mobile-search/mobile-search';
import { useMobileSearch } from '../../../ui/hooks/use-mobile-search';
import classNames from 'classnames';
import { Footer } from '../../../core/components/footer/footer';

export function InventoryPage() {
  const { t } = useTranslation();
  const { syncTokens, loadingTokens, filteredTokens, setInitialValue } =
    useTokensFacade();
  const { isMinDesktopSmall } = useDeviceType();
  const { isOpen } = useMobileSearch();
  useOnInit(() => {
    syncTokens();
  });

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['header']}>
          <Logo
            className={classNames(styles['logo'], {
              [styles['hidden']]: isOpen,
            })}
          />
          {isMinDesktopSmall && <LanguageSelector contrasted={true} />}
          {!isMinDesktopSmall && (
            <>
              <MobileSearch />
              <MenuMobile className={styles['menu']} />
            </>
          )}
        </div>
        <div>
          <div className={styles['top-content']}>
            <div className={styles['text-container']}>
              <div className={styles['title']}>SakuLog</div>
              <div className={styles['text']}>{t('inventory.log')}</div>
            </div>

            <FilterBar />
          </div>
          <div className={styles['content']}>
            <div className={styles['sticky-container']}>
              <Filters />
            </div>
            {loadingTokens && (
              <Information>
                <div className={styles['info-title']}>
                  {t('inventory.loading')}
                </div>
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
      </div>
      <Footer
        containerClassName={styles['inventory-footer-position']}
        contentClassName={styles['inventory-footer-bg']}
      />
    </>
  );
}
