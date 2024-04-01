import styles from './tokens-card.module.scss';
import { TokenAdulthoodType, TokenDTO } from '@saku-monsters/shared';
import { useTokensFacade } from '../../hooks/use-tokens-facade';
import { tokenImageMapper } from '../../helpers/token-image-mapper';
import {
  TOKEN_RARITY_BG_COLOR,
  TOKEN_RARITY_COLOR,
} from '../../helpers/token-color-mapper';
import { TOKEN_RARITY_ICON } from '../../helpers/token-rarity-icon-mapper';
import cn from 'classnames';

export interface TokensCardProps {
  token: TokenDTO;
  containerClassName?: string;
  bubbleImgClassName?: string;
  tokenImgClassName?: string;
}

export function TokensCard(props: TokensCardProps) {
  const {
    token,
    containerClassName = '',
    bubbleImgClassName = '',
    tokenImgClassName = '',
  } = props;
  const { toggleAdulthood } = useTokensFacade();
  const { id, rarity, name, adulthood, changingAdulthood } = token;

  return (
    <div className={cn(styles['container'], containerClassName)}>
      <div className={styles['content']}>
        <div
          className={styles['adulthood-container']}
          style={{
            color: TOKEN_RARITY_COLOR[rarity],
            backgroundColor: TOKEN_RARITY_BG_COLOR[rarity],
          }}
        >
          <div
            className={cn(styles['text'], {
              [styles['changing']]: changingAdulthood,
              [styles['show']]: !changingAdulthood,
            })}
          >
            {adulthood === TokenAdulthoodType.Baby && 'B'}
            {adulthood === TokenAdulthoodType.Adult && 'A'}
          </div>
        </div>
        <div className={styles['bubble-img-container']}>
          <div
            className={cn(
              styles['bubble-img'],
              {
                [styles['changing']]: changingAdulthood,
              },
              bubbleImgClassName
            )}
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
          className={cn(
            styles['token-img'],
            {
              [styles['changing']]: changingAdulthood,
            },
            tokenImgClassName
          )}
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
