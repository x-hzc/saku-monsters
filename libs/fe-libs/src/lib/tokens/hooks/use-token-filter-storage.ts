import { atom, useAtom } from 'jotai';
import { TokenAdulthoodType, TokenRarityType } from '@saku-monsters/shared';

const adulthoodFilterAtom = atom<TokenAdulthoodType | null>(null);
const rarityFilterAtom = atom<TokenRarityType | null>(null);
const searchTermAtom = atom<string | null>(null);
export function useTokenFilterStorage() {
  const [adulthoodFilter, setAdulthoodFilter] = useAtom(adulthoodFilterAtom);
  const [rarityFilter, setRarityFilter] = useAtom(rarityFilterAtom);
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
  const isAnyFilterEnabled = !!adulthoodFilter || !!rarityFilter;

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

  function clearFilters() {
    setSearchTerm(null);
    setRarityFilter(null);
    setAdulthoodFilter(null);
  }

  return {
    adulthoodFilter,
    rarityFilter,
    isAnyFilterEnabled,
    setAdulthoodFilter,
    setRarityFilter,
    searchTerm,
    setSearchTerm,
    toggleAdulthoodFilter,
    toggleRarityFilter,
    clearFilters,
  };
}
