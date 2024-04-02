import { atom, useAtom } from 'jotai';

const currentGrowOptionAtom = atom<string | null>(null);
const currentPhaseThreeOptionAtom = atom<string | null>(null);
const currentPhaseThreeOptionSupAtom = atom<string | null>(null);

export function useCardTitleStore() {
  const [currentGrowOption, setCurrentGrowOption] = useAtom(
    currentGrowOptionAtom
  );
  const [currentPhaseThreeOption, setCurrentPhaseThreeOption] = useAtom(
    currentPhaseThreeOptionAtom
  );
  const [currentPhaseThreeOptionSup, setCurrentPhaseThreeOptionSup] = useAtom(
    currentPhaseThreeOptionSupAtom
  );

  return {
    currentGrowOption,
    setCurrentGrowOption,
    currentPhaseThreeOption,
    setCurrentPhaseThreeOption,
    currentPhaseThreeOptionSup,
    setCurrentPhaseThreeOptionSup,
  };
}
