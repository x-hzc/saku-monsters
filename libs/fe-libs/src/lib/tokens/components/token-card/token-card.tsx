import styles from './token-card.module.scss';
import { TokenAdulthoodType, TokenDTO } from '@saku-monsters/shared';
import { tokenImageMapper } from '../../helpers/token-image-mapper';
import {
  TOKEN_RARITY_BG_COLOR,
  TOKEN_RARITY_COLOR,
} from '../../helpers/token-color-mapper';
import { TOKEN_RARITY_ICON } from '../../helpers/token-rarity-icon-mapper';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import classNames from 'classnames';
export interface TokenCardProps {
  token: TokenDTO;
}

export function TokenCard({ token }: TokenCardProps) {
  const { toggleAdulthood } = useTokensFacade();
  const { id, rarity, name, adulthood, changingAdulthood } = token;

  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div
          className={styles['adulthood-container']}
          style={{
            color: TOKEN_RARITY_COLOR[rarity],
            backgroundColor: TOKEN_RARITY_BG_COLOR[rarity],
          }}
        >
          <div
            className={classNames(styles['text'], {
              [styles['changing']]: changingAdulthood,
              [styles['show']]: !changingAdulthood,
            })}
          >
            {adulthood === TokenAdulthoodType.Baby && 'B'}
            {adulthood === TokenAdulthoodType.Adult && 'A'}
          </div>
        </div>
        <div className={styles['adulthood-img-container']}>
          <div
            className={classNames(styles['adulthood-img'], {
              [styles['changing']]: changingAdulthood,
            })}
            onClick={(event) => {
              event.stopPropagation();
              toggleAdulthood(id);
            }}
            style={{
              backgroundImage: `url(${tokenImageMapper(
                id,
                adulthood === TokenAdulthoodType.Baby
                  ? TokenAdulthoodType.Adult
                  : TokenAdulthoodType.Baby
              )})`,
            }}
          />
        </div>
        <div
          className={classNames(styles['token-img'], {
            [styles['changing']]: changingAdulthood,
          })}
          style={{
            backgroundImage: `url(${tokenImageMapper(id, adulthood)})`,
          }}
        />
        <div
          className={styles['name-container']}
          style={{
            backgroundColor: TOKEN_RARITY_COLOR[rarity],
          }}
        >
          <div
            className={styles['rarity-icon-container']}
            style={{
              backgroundColor: TOKEN_RARITY_BG_COLOR[rarity],
              color: TOKEN_RARITY_COLOR[rarity],
            }}
          >
            {TOKEN_RARITY_ICON[rarity]}
          </div>
          <div className={styles['name']}>{name}</div>
        </div>
      </div>
    </div>
  );
}
