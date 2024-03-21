import { atom, useAtom } from 'jotai';

const currentGrowOptionAtom = atom<string | null>(null);
const currentPhaseThreeOptionAtom = atom<string | null>(null);

export function useCardTitleStore() {
  const [currentGrowOption, setCurrentGrowOption] = useAtom(
    currentGrowOptionAtom
  );
  const [currentPhaseThreeOption, setCurrentPhaseThreeOption] = useAtom(
    currentPhaseThreeOptionAtom
  );

  return {
    currentGrowOption,
    setCurrentGrowOption,
    currentPhaseThreeOption,
    setCurrentPhaseThreeOption,
  };
}
