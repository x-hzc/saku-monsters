import { useMediaQuery } from '@mui/material';

export function useDeviceType() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isMaxTablet = useMediaQuery('(max-width:959px)');
  const isMinLargeTablet = useMediaQuery('(min-width:1024px)');
  const isMinDesktopSmall = useMediaQuery('(min-width:1240px)');
  const isMinDesktopLarge = useMediaQuery('(min-width:1920px)');

  return {
    isMobile,
    isMaxTablet,
    isMinLargeTablet,
    isMinDesktopSmall,
    isMinDesktopLarge,
  };
}
