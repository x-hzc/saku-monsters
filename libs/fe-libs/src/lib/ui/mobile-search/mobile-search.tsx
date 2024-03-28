import styles from './mobile-search.module.scss';
import { useTranslation } from 'react-i18next';
import SearchIcon from '../../../../assets/icons/search.svg';
import CloseIcon from '../../../../assets/icons/close.svg';
import { useTokensFacade } from '../../tokens/hooks/use-tokens-facade';
import classNames from 'classnames';
import { useMobileSearch } from '../hooks/use-mobile-search';

export function MobileSearch() {
  const { t } = useTranslation();
  const { searchTerm, setSearchTerm } = useTokensFacade();
  const { toggleIsOpen, isOpen } = useMobileSearch();

  return (
    <div
      className={classNames(styles['container'], {
        [styles['open']]: isOpen,
      })}
    >
      <div className={styles['input-container']}>
        <input
          type={'text'}
          className={styles['input']}
          placeholder={t('filter.search')}
          onClick={(ev) => ev.stopPropagation()}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm ? searchTerm : ''}
        />
      </div>
      <div
        onClick={(ev) => {
          if (isOpen) {
            setSearchTerm(null);
          }
          toggleIsOpen();
          ev.stopPropagation();
        }}
        className={styles['btn']}
      >
        {isOpen ? <CloseIcon /> : <SearchIcon />}
      </div>
    </div>
  );
}
