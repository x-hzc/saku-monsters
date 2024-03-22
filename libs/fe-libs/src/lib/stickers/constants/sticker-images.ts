import AxelSticker from '../../../../assets/pngs/axle_sticker.png';
import BlueEggSticker from '../../../../assets/pngs/blue_egg_sticker.png';
import GolemSticker from '../../../../assets/pngs/golem_sticker.png';
import OdinSticker from '../../../../assets/pngs/odin_sticker.png';
import PurpcatSticker from '../../../../assets/pngs/purpact_sticker.png';
import SoySticker from '../../../../assets/pngs/soy_sticker.png';
import WabitSticker from '../../../../assets/pngs/wabit_sticker.png';
import _ from 'lodash';

export function getAllStickers() {
  return _.cloneDeep([
    AxelSticker,
    BlueEggSticker,
    GolemSticker,
    OdinSticker,
    PurpcatSticker,
    SoySticker,
    WabitSticker,
  ]);
}
