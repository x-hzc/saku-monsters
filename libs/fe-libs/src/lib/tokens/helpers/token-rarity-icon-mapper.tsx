import { TokenRarityType } from '@saku-monsters/shared';
import CommonIcon from '../../../../assets/icons/common.svg';
import RareIcon from '../../../../assets/icons/rare.svg';
import EpicIcon from '../../../../assets/icons/epic.svg';
import LegendaryIcon from '../../../../assets/icons/legendary.svg';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

export const TOKEN_RARITY_ICON: Record<TokenRarityType, JSX.Element> = {
  [TokenRarityType.COMMON]: <CommonIcon />,
  [TokenRarityType.RARE]: <RareIcon />,
  [TokenRarityType.EPIC]: <EpicIcon />,
  [TokenRarityType.LEGENDARY]: <LegendaryIcon />,
  [TokenRarityType.ALL]: <AllInclusiveIcon />,
};
