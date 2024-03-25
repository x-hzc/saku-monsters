import styles from './filter-bar.module.scss';
import { Button } from '../../../ui/components/button/button';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import { useTranslation } from 'react-i18next';
import SearchIcon from '../../../../../assets/icons/search.svg';
import { TokenEggType } from '@saku-monsters/shared';
import { TOKEN_EGG_COLOR } from '../../helpers/token-color-mapper';

export function FilterBar() {
  const { tokens, setSearchTerm, toggleEggFilter, eggFilter, searchTerm } =
    useTokensFacade();
  const { t } = useTranslation();
  return (
    <div className={styles['container']}>
      <div className={styles['filter']}>
        <Button
          className={styles['btn']}
          onClick={() => toggleEggFilter(TokenEggType.BlueEgg)}
          componentStyles={{
            backgroundColor:
              eggFilter === TokenEggType.BlueEgg
                ? TOKEN_EGG_COLOR[TokenEggType.BlueEgg]
                : undefined,
          }}
        >
          {t('filter.blue')}
        </Button>
        <Button
          className={styles['btn']}
          disabled
          onClick={() => toggleEggFilter(TokenEggType.PurpleEgg)}
          componentStyles={{
            backgroundColor:
              eggFilter === TokenEggType.PurpleEgg
                ? TOKEN_EGG_COLOR[TokenEggType.PurpleEgg]
                : undefined,
          }}
        >
          {t('filter.purple')}
        </Button>
        <Button
          className={styles['btn']}
          disabled
          onClick={() => toggleEggFilter(TokenEggType.GoldenEgg)}
          componentStyles={{
            backgroundColor:
              eggFilter === TokenEggType.GoldenEgg
                ? TOKEN_EGG_COLOR[TokenEggType.GoldenEgg]
                : undefined,
          }}
        >
          {t('filter.golden')}
        </Button>
      </div>
      <div className={styles['input-container']}>
        <SearchIcon />
        <input
          type={'text'}
          className={styles['input']}
          placeholder={t('filter.search')}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm ? searchTerm : ''}
        />
      </div>

      <div className={styles['text']}>
        {t('filter.unique', { count: tokens.length })}
      </div>
    </div>
  );
}
