import styles from './filter-bar.module.scss';
import { Button } from '../../../ui/components/button/button';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import { useTranslation } from 'react-i18next';
import SearchIcon from '../../../../../assets/icons/search.svg';

export function FilterBar() {
  const { tokens, clearFilters, setSearchTerm } = useTokensFacade();
  const { t } = useTranslation();
  return (
    <div className={styles['container']}>
      <Button onClick={clearFilters}>{t('filter.clear')}</Button>
      <div className={styles['input-container']}>
        <SearchIcon />
        <input
          type={'text'}
          className={styles['input']}
          placeholder={t('filter.search')}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles['text']}>
        {t('filter.unique', { count: tokens.length })}
      </div>
    </div>
  );
}
