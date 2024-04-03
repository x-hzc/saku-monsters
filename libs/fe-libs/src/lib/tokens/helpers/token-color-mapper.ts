import {
  TokenAdulthoodType,
  TokenEggType,
  TokenRarityType,
} from '@saku-monsters/shared';

export const TOKEN_RARITY_COLOR: Record<TokenRarityType, string> = {
  [TokenRarityType.COMMON]: '#4ED29C',
  [TokenRarityType.RARE]: '#5BAFFD',
  [TokenRarityType.EPIC]: '#EB84F6',
  [TokenRarityType.LEGENDARY]: '#FDC25B',
};
export const TOKEN_RARITY_BG_COLOR: Record<TokenRarityType, string> = {
  [TokenRarityType.COMMON]: '#A0F5D2',
  [TokenRarityType.RARE]: '#CCE3F9',
  [TokenRarityType.EPIC]: '#F6DFFA',
  [TokenRarityType.LEGENDARY]: '#FEF1DB',
};

export const TOKEN_ADULTHOOD_COLOR: Record<TokenAdulthoodType, string> = {
  [TokenAdulthoodType.Adult]: '#FE92E4',
  [TokenAdulthoodType.Baby]: '#5BAFFD',
  [TokenAdulthoodType.All]: '#D3D3D3',
};

export const TOKEN_EGG_COLOR: Record<TokenEggType, string> = {
  [TokenEggType.BlueEgg]: '#5BAFFD',
  [TokenEggType.PurpleEgg]: '#EBB2FF',
  [TokenEggType.GoldenEgg]: '#FDC25B',
};
