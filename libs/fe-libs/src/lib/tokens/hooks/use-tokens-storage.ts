import { atom, useAtom } from 'jotai';
import { TokenDTO } from '@saku-monsters/shared';

const tokensAtom = atom<TokenDTO[]>([]);
const loadingTokensAtom = atom(false);
export function useTokensStorage() {
  const [tokens, setTokens] = useAtom(tokensAtom);
  const [loadingTokens, setLoadingTokens] = useAtom(loadingTokensAtom);

  return {
    tokens,
    setTokens,
    loadingTokens,
    setLoadingTokens,
  };
}
