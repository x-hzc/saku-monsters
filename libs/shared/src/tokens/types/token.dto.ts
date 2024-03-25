import { TokenRarityType } from './token-rarity-type.enum';
import { TokenAdulthoodType } from './token-adulthood-type.enum';
import { TokenEggType } from './token-egg-type.enum';

export interface TokenDTO {
  id: string;
  name: string;
  rarity: TokenRarityType;
  adulthood: TokenAdulthoodType;
  egg: TokenEggType;
  changingAdulthood?: boolean;
}
