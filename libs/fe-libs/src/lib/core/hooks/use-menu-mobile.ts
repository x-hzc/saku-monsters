import { atom, useAtom } from 'jotai';

const isOpenAtom = atom(false);

export function useMenuMobile() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const toggleMenu = () => {
    if (isOpen) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setIsOpen((previousState) => !previousState);
  };

  return {
    toggleMenu,
    isOpen,
  };
}
