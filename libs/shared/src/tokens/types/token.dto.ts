import { TokenRarityType } from './token-rarity.enum';

export interface TokenDTO {
  id: string;
  name: string;
  rarity: TokenRarityType;
}
