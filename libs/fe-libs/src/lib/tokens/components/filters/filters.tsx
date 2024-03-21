import styles from './filters.module.scss';
import { Button } from '../../../ui/components/button/button';
import { TOKEN_RARITY_ICON } from '../../helpers/token-rarity-icon-mapper';
import { TokenAdulthoodType, TokenRarityType } from '@saku-monsters/shared';
import { useTranslation } from 'react-i18next';
import LogoKanji from '../../../../../assets/icons/logo_kanji.svg';
import { useRouter } from '../../../routing/hooks/use-router';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import {
  TOKEN_ADULTHOOD_COLOR,
  TOKEN_RARITY_COLOR,
} from '../../helpers/token-rarity-color-mapper';

export function Filters() {
  const { t } = useTranslation();
  const { goToAppleSakuMonsters } = useRouter();
  const {
    setRarityFilter,
    toggleAdulthoodFilter,
    adulthoodFilter,
    rarityFilter,
    toggleRarityFilter,
  } = useTokensFacade();
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>{t('filter.filters')}</div>
      <div className={styles['section']}>
        <div className={styles['title']}>{t('filter.adulthood')}</div>
        <Button
          className={styles['button']}
          onClick={() => toggleAdulthoodFilter(TokenAdulthoodType.Baby)}
          componentStyles={
            adulthoodFilter === TokenAdulthoodType.Baby
              ? {
                  backgroundColor:
                    TOKEN_ADULTHOOD_COLOR[TokenAdulthoodType.Baby],
                  color: 'var(--primary-color)',
                }
              : undefined
          }
        >
          <div className={styles['icon']}>B</div>
          <div className={styles['text']}>{t('filter.baby')}</div>
        </Button>
        <Button
          className={styles['button']}
          onClick={() => toggleAdulthoodFilter(TokenAdulthoodType.Adult)}
          componentStyles={
            adulthoodFilter === TokenAdulthoodType.Adult
              ? {
                  backgroundColor:
                    TOKEN_ADULTHOOD_COLOR[TokenAdulthoodType.Adult],
                  color: 'var(--primary-color)',
                }
              : undefined
          }
        >
          <div className={styles['icon']}>A</div>
          <div className={styles['text']}>{t('filter.adult')}</div>
        </Button>
      </div>
      <div className={styles['section']}>
        <div className={styles['title']}>{t('filter.rarity')}</div>
        <Button
          className={styles['button']}
          onClick={() => toggleRarityFilter(TokenRarityType.COMMON)}
          componentStyles={
            rarityFilter === TokenRarityType.COMMON
              ? {
                  backgroundColor: TOKEN_RARITY_COLOR[TokenRarityType.COMMON],
                  color: 'var(--primary-color)',
                }
              : undefined
          }
        >
          <div className={styles['icon']}>
            {TOKEN_RARITY_ICON[TokenRarityType.COMMON]}
          </div>
          <div className={styles['text']}>{t('filter.common')}</div>
        </Button>
        <Button
          className={styles['button']}
          onClick={() => toggleRarityFilter(TokenRarityType.RARE)}
          componentStyles={
            rarityFilter === TokenRarityType.RARE
              ? {
                  backgroundColor: TOKEN_RARITY_COLOR[TokenRarityType.RARE],
                  color: 'var(--primary-color)',
                }
              : undefined
          }
        >
          <div className={styles['icon']}>
            {TOKEN_RARITY_ICON[TokenRarityType.RARE]}
          </div>
          <div className={styles['text']}>{t('filter.rare')}</div>
        </Button>
        <Button
          className={styles['button']}
          onClick={() => toggleRarityFilter(TokenRarityType.EPIC)}
          componentStyles={
            rarityFilter === TokenRarityType.EPIC
              ? {
                  backgroundColor: TOKEN_RARITY_COLOR[TokenRarityType.EPIC],
                  color: 'var(--primary-color)',
                }
              : undefined
          }
        >
          <div className={styles['icon']}>
            {TOKEN_RARITY_ICON[TokenRarityType.EPIC]}
          </div>
          <div className={styles['text']}>{t('filter.epic')}</div>
        </Button>
        <Button
          className={styles['button']}
          onClick={() => toggleRarityFilter(TokenRarityType.LEGENDARY)}
          componentStyles={
            rarityFilter === TokenRarityType.LEGENDARY
              ? {
                  backgroundColor:
                    TOKEN_RARITY_COLOR[TokenRarityType.LEGENDARY],
                  color: 'var(--primary-color)',
                }
              : undefined
          }
        >
          <div className={styles['icon']}>
            {TOKEN_RARITY_ICON[TokenRarityType.LEGENDARY]}
          </div>
          <div className={styles['text']}>{t('filter.legendary')}</div>
        </Button>
      </div>
      <div className={styles['store-section']}>
        <div className={styles['title']}>
          {t('filter.store')} <LogoKanji />
        </div>
        <div className={styles['saku-card']} onClick={goToAppleSakuMonsters} />
      </div>
    </div>
  );
}