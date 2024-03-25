import { useMediaQuery } from '@mui/material';

export function useDeviceType() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isMaxTablet = useMediaQuery('(max-width:960px)');
  const isMinDesktopSmall = useMediaQuery('(min-width:1240px)');
  const isMinDesktopLarge = useMediaQuery('(min-width:1920px)');
  const isMinLargeTablet = useMediaQuery('(min-width:1024px)');

  return {
    isMobile,
    isMaxTablet,
    isMinDesktopSmall,
    isMinDesktopLarge,
    isMinLargeTablet,
  };
}
