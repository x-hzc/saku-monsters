import { TokenDTO, TokenRarityType } from '@saku-monsters/shared';
import _ from 'lodash';

const JULIEGO: TokenDTO = {
  id: 'JULIEGO',
  name: 'Juliego',
  rarity: TokenRarityType.COMMON,
};
const GOLEM: TokenDTO = {
  id: 'GOLEM',
  name: 'Golem',
  rarity: TokenRarityType.COMMON,
};
const HOWLER: TokenDTO = {
  id: 'HOWLER',
  name: 'Howler',
  rarity: TokenRarityType.COMMON,
};
const BANDITA: TokenDTO = {
  id: 'BANDITA',
  name: 'Bandita',
  rarity: TokenRarityType.COMMON,
};
const DINA: TokenDTO = {
  id: 'DINA',
  name: 'Dina',
  rarity: TokenRarityType.COMMON,
};
const PURPCAT: TokenDTO = {
  id: 'PURPCAT',
  name: 'Purpcat',
  rarity: TokenRarityType.COMMON,
};
const VAPS: TokenDTO = {
  id: 'VAPS',
  name: 'Vaps',
  rarity: TokenRarityType.COMMON,
};
const CHU: TokenDTO = {
  id: 'CHU',
  name: 'Chu',
  rarity: TokenRarityType.COMMON,
};
const DATBOI: TokenDTO = {
  id: 'DATBOI',
  name: 'Datboi',
  rarity: TokenRarityType.COMMON,
};
const SOY: TokenDTO = {
  id: 'SOY',
  name: 'Soy',
  rarity: TokenRarityType.COMMON,
};
const BEEPO: TokenDTO = {
  id: 'BEEPO',
  name: 'Beepo',
  rarity: TokenRarityType.RARE,
};
const ODIN: TokenDTO = {
  id: 'ODIN',
  name: 'Odin',
  rarity: TokenRarityType.RARE,
};
const ANUBA: TokenDTO = {
  id: 'ANUBA',
  name: 'Anuba',
  rarity: TokenRarityType.RARE,
};
const CLAW: TokenDTO = {
  id: 'CLAW',
  name: 'Claw',
  rarity: TokenRarityType.RARE,
};
const PUFFLET: TokenDTO = {
  id: 'PUFFLET',
  name: 'Pufflet',
  rarity: TokenRarityType.RARE,
};
const PAOLA: TokenDTO = {
  id: 'PAOLA',
  name: 'Paola',
  rarity: TokenRarityType.RARE,
};
const WOMPER: TokenDTO = {
  id: 'WOMPER',
  name: 'Womper',
  rarity: TokenRarityType.RARE,
};
const BUNAROO: TokenDTO = {
  id: 'BUNAROO',
  name: 'Bunaroo',
  rarity: TokenRarityType.RARE,
};
const AXLE: TokenDTO = {
  id: 'AXLE',
  name: 'Axle',
  rarity: TokenRarityType.EPIC,
};
const MARINA: TokenDTO = {
  id: 'MARINA',
  name: 'Marina',
  rarity: TokenRarityType.EPIC,
};
const SHUMOKU: TokenDTO = {
  id: 'SHUMOKU',
  name: 'Shumoku',
  rarity: TokenRarityType.EPIC,
};
const DORWIN: TokenDTO = {
  id: 'DORWIN',
  name: 'Dorwin',
  rarity: TokenRarityType.EPIC,
};
const MONKE: TokenDTO = {
  id: 'MONKE',
  name: 'Monke',
  rarity: TokenRarityType.EPIC,
};
const JOAT: TokenDTO = {
  id: 'JOAT',
  name: 'Joat',
  rarity: TokenRarityType.LEGENDARY,
};
const SURAIMU: TokenDTO = {
  id: 'SURAIMU',
  name: 'Suraimu',
  rarity: TokenRarityType.LEGENDARY,
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
