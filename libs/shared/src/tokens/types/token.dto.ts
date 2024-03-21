import { TokenRarityType } from './token-rarity.enum';
import { TokenAdulthoodType } from './token-adulthood-type.enum';

export interface TokenDTO {
  id: string;
  name: string;
  rarity: TokenRarityType;
  adulthood: TokenAdulthoodType;
}
