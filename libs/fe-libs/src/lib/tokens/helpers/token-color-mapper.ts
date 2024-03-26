import {
  TokenAdulthoodType,
  TokenEggType,
  TokenRarityType,
} from '@saku-monsters/shared';

export const TOKEN_RARITY_COLOR: Record<TokenRarityType, string> = {
  [TokenRarityType.COMMON]: '#5CB561',
  [TokenRarityType.RARE]: '#476AE0',
  [TokenRarityType.EPIC]: '#9A5EE6',
  [TokenRarityType.LEGENDARY]: '#C8974F',
};
export const TOKEN_RARITY_BG_COLOR: Record<TokenRarityType, string> = {
  [TokenRarityType.COMMON]: '#A0F5D2',
  [TokenRarityType.RARE]: '#CCE3F9',
  [TokenRarityType.EPIC]: '#EB84F6',
  [TokenRarityType.LEGENDARY]: '#FEF1DB',
};

export const TOKEN_ADULTHOOD_COLOR: Record<TokenAdulthoodType, string> = {
  [TokenAdulthoodType.Adult]: '#FE92E4',
  [TokenAdulthoodType.Baby]: '#5BAFFD',
};

export const TOKEN_EGG_COLOR: Record<TokenEggType, string> = {
  [TokenEggType.BlueEgg]: '#5BAFFD',
  [TokenEggType.PurpleEgg]: '#EBB2FF',
  [TokenEggType.GoldenEgg]: '#FDC25B',
};
