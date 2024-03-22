import { useTokensStorage } from './use-tokens-storage';
import { getAllTokens } from '../constants/token-data';
import { useTokenFilterStorage } from './use-token-filter-storage';
import { TokenAdulthoodType } from '@saku-monsters/shared';

export function useTokensFacade() {
  const tokensStorage = useTokensStorage();
  const tokenFilterStorage = useTokenFilterStorage();
  const { setTokens, setLoadingTokens, tokens } = tokensStorage;
  const { rarityFilter, searchTerm, adulthoodFilter, eggFilter } =
    tokenFilterStorage;
  const filteredTokens = tokens
    .filter((token) => (rarityFilter ? token.rarity === rarityFilter : true))
    .filter((token) =>
      adulthoodFilter ? token.adulthood === adulthoodFilter : true
    )
    .filter((token) => (eggFilter ? token.egg === eggFilter : true))
    .filter((token) =>
      searchTerm
        ? token.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );
  function syncTokens() {
    setLoadingTokens(true);
    const tokens = getAllTokens();
    setTokens(tokens);
    setLoadingTokens(false);
  }

  function toggleAdulthood(id: string) {
    setTokens((tokens) =>
      tokens.map((token) =>
        token.id === id
          ? {
              ...token,
              adulthood:
                token.adulthood === TokenAdulthoodType.Baby
                  ? TokenAdulthoodType.Adult
                  : TokenAdulthoodType.Baby,
            }
          : token
      )
    );
  }

  function findTokenById(id: string) {
    return tokens.find((token) => token.id === id);
  }

  return {
    ...tokensStorage,
    ...tokenFilterStorage,
    filteredTokens,
    syncTokens,
    toggleAdulthood,
    findTokenById,
  };
}
