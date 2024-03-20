import { useTokensStorage } from './use-tokens-storage';
import { getAllTokens } from '../constants/token-data';

export function useTokensFacade() {
  const tokensStorage = useTokensStorage();
  const { setTokens, setLoadingTokens } = tokensStorage;

  function syncTokens() {
    setLoadingTokens(true);
    const tokens = getAllTokens();
    setTokens(tokens);
    setLoadingTokens(false);
  }

  return {
    ...tokensStorage,
    syncTokens,
  };
}
