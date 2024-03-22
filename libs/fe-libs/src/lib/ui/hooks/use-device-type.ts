import { useMediaQuery } from '@mui/material';

export function useDeviceType() {
  const isMinDesktopSmall = useMediaQuery('(min-width:1240px)');
  const isMinDesktopLarge = useMediaQuery('(min-width:1920px)');

  return {
    isMinDesktopSmall,
    isMinDesktopLarge,
  };
}
