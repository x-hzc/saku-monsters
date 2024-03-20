import { TokenRarityType } from '@saku-monsters/shared';

export const TOKEN_RARITY_COLOR: Record<TokenRarityType, string> = {
  [TokenRarityType.COMMON]: '#5CB561',
  [TokenRarityType.RARE]: '#476AE0',
  [TokenRarityType.EPIC]: '#9A5EE6',
  [TokenRarityType.LEGENDARY]: '#C8974F',
};
export const TOKEN_RARITY_BG_COLOR: Record<TokenRarityType, string> = {
  [TokenRarityType.COMMON]: '#A0F5D2',
  [TokenRarityType.RARE]: '#CCE3F9',
  [TokenRarityType.EPIC]: '#EBB2FF',
  [TokenRarityType.LEGENDARY]: '#FEF1DB',
};
