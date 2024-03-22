import {
  TokenAdulthoodType,
  TokenDTO,
  TokenEggType,
  TokenRarityType,
} from '@saku-monsters/shared';
import _ from 'lodash';

const JULIEGO: TokenDTO = {
  id: 'JULIEGO',
  name: 'Juliego',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const GOLEM: TokenDTO = {
  id: 'GOLEM',
  name: 'Golem',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const HOWLER: TokenDTO = {
  id: 'HOWLER',
  name: 'Howler',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const BANDITA: TokenDTO = {
  id: 'BANDITA',
  name: 'Bandita',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const DINA: TokenDTO = {
  id: 'DINA',
  name: 'Dina',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const PURPCAT: TokenDTO = {
  id: 'PURPCAT',
  name: 'Purpcat',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const VAPS: TokenDTO = {
  id: 'VAPS',
  name: 'Vaps',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const CHU: TokenDTO = {
  id: 'CHU',
  name: 'Chu',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const DATBOI: TokenDTO = {
  id: 'DATBOI',
  name: 'Datboi',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const SOY: TokenDTO = {
  id: 'SOY',
  name: 'Soy',
  rarity: TokenRarityType.COMMON,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const BEEPO: TokenDTO = {
  id: 'BEEPO',
  name: 'Beepo',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const ODIN: TokenDTO = {
  id: 'ODIN',
  name: 'Odin',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const ANUBA: TokenDTO = {
  id: 'ANUBA',
  name: 'Anuba',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const CLAW: TokenDTO = {
  id: 'CLAW',
  name: 'Claw',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const PUFFLET: TokenDTO = {
  id: 'PUFFLET',
  name: 'Pufflet',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const PAOLA: TokenDTO = {
  id: 'PAOLA',
  name: 'Paola',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const WOMPER: TokenDTO = {
  id: 'WOMPER',
  name: 'Womper',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const BUNAROO: TokenDTO = {
  id: 'BUNAROO',
  name: 'Bunaroo',
  rarity: TokenRarityType.RARE,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const AXLE: TokenDTO = {
  id: 'AXLE',
  name: 'Axle',
  rarity: TokenRarityType.EPIC,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const MARINA: TokenDTO = {
  id: 'MARINA',
  name: 'Marina',
  rarity: TokenRarityType.EPIC,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const SHUMOKU: TokenDTO = {
  id: 'SHUMOKU',
  name: 'Shumoku',
  rarity: TokenRarityType.EPIC,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const DORWIN: TokenDTO = {
  id: 'DORWIN',
  name: 'Dorwin',
  rarity: TokenRarityType.EPIC,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const MONKE: TokenDTO = {
  id: 'MONKE',
  name: 'Monke',
  rarity: TokenRarityType.EPIC,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};
const JOAT: TokenDTO = {
  id: 'JOAT',
  name: 'Joat',
  rarity: TokenRarityType.LEGENDARY,
  adulthood: TokenAdulthoodType.Baby,
  egg: TokenEggType.BlueEgg,
};
const SURAIMU: TokenDTO = {
  id: 'SURAIMU',
  name: 'Suraimu',
  rarity: TokenRarityType.LEGENDARY,
  adulthood: TokenAdulthoodType.Adult,
  egg: TokenEggType.BlueEgg,
};

export function getAllTokens(): TokenDTO[] {
  return _.cloneDeep([
    JULIEGO,
    GOLEM,
    HOWLER,
    BANDITA,
    DINA,
    PURPCAT,
    VAPS,
    CHU,
    DATBOI,
    SOY,
    BEEPO,
    ODIN,
    ANUBA,
    CLAW,
    PUFFLET,
    PAOLA,
    WOMPER,
    BUNAROO,
    AXLE,
    MARINA,
    SHUMOKU,
    DORWIN,
    MONKE,
    JOAT,
    SURAIMU,
  ]);
}
