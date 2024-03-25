import { useMediaQuery } from '@mui/material';

export function useDeviceType() {
  const isMinDesktopSmall = useMediaQuery('(min-width:1240px)');
  const isMinDesktopLarge = useMediaQuery('(min-width:1920px)');
  const isMinLargeTablet = useMediaQuery('(min-width:1024px)');

  return {
    isMinDesktopSmall,
    isMinDesktopLarge,
    isMinLargeTablet,
  };
}
