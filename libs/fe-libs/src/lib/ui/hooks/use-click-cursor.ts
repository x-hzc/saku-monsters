import { atom, useAtom } from 'jotai/index';

const clickedAtom = atom(false);

export function useClickCursor() {
  const [clicked, setClicked] = useAtom(clickedAtom);

  function showClickCursor() {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
  }

  return {
    clicked,
    showClickCursor,
  };
}
