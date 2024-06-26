import { atom, useAtom } from 'jotai';
import {
  TokenAdulthoodType,
  TokenEggType,
  TokenRarityType,
} from '@saku-monsters/shared';

const adulthoodFilterAtom = atom<TokenAdulthoodType | null>(null);
const rarityFilterAtom = atom<TokenRarityType | null>(null);
const eggFilterAtom = atom<TokenEggType | null>(TokenEggType.BlueEgg);
const searchTermAtom = atom<string | null>(null);

export function useTokenFilterStorage() {
  const [adulthoodFilter, setAdulthoodFilter] = useAtom(adulthoodFilterAtom);
  const [rarityFilter, setRarityFilter] = useAtom(rarityFilterAtom);
  const [eggFilter, setEggFilter] = useAtom(eggFilterAtom);
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
  const isAnyFilterEnabled =
    !!adulthoodFilter || !!rarityFilter || !!searchTerm || !!eggFilter;

  function toggleAdulthoodFilter(filter: TokenAdulthoodType) {
    if (adulthoodFilter === filter) {
      return setAdulthoodFilter(null);
    }
    setAdulthoodFilter(filter);
  }

  function toggleRarityFilter(filter: TokenRarityType) {
    if (rarityFilter === filter) {
      return setRarityFilter(null);
    }
    setRarityFilter(filter);
  }

  function toggleEggFilter(filter: TokenEggType) {
    if (eggFilter === filter) {
      return setEggFilter(null);
    }
    setEggFilter(filter);
  }

  function clearFilters() {
    setSearchTerm(null);
    setRarityFilter(null);
    setAdulthoodFilter(null);
    setEggFilter(null);
  }

  function setInitialValue() {
    setSearchTerm(null);
    setAdulthoodFilter(null);
    setRarityFilter(null);
    setEggFilter(TokenEggType.BlueEgg);
  }

  return {
    adulthoodFilter,
    rarityFilter,
    eggFilter,
    isAnyFilterEnabled,
    setAdulthoodFilter,
    setRarityFilter,
    searchTerm,
    setSearchTerm,
    setEggFilter,
    toggleAdulthoodFilter,
    toggleRarityFilter,
    toggleEggFilter,
    clearFilters,
    setInitialValue,
  };
}
