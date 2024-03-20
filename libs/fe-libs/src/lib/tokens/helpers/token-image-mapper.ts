import { TokenAdulthoodType } from '@saku-monsters/shared';
import { ADULT_TOKEN_IMAGE } from '../constants/adult-token-image';
import { BABY_TOKEN_IMAGE } from '../constants/baby-token-image';

export function tokenImageMapper(id: string, adulthood: TokenAdulthoodType) {
  if (adulthood === TokenAdulthoodType.Adult) {
    return ADULT_TOKEN_IMAGE[id];
  }
  return BABY_TOKEN_IMAGE[id];
}
