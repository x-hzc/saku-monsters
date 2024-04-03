import { atom } from 'jotai';
import { useAtom } from 'jotai/index';

const isOpenAtom = atom(false);

export function useMobileSearch() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  function toggleIsOpen() {
    return setIsOpen((prevState) => !prevState);
  }

  return {
    toggleIsOpen,
    setIsOpen,
    isOpen,
  };
}
