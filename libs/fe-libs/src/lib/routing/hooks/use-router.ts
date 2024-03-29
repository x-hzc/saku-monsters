import { useNavigate, useLocation } from 'react-router-dom';

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes: Array<{
    label: string;
    onClick: () => void;
    disabled?: boolean;
    path: string;
  }> = [
    {
      label: 'Home',
      onClick: goToHome,
      path: '/home',
    },
    {
      label: 'Inventory',
      onClick: goToInventory,
      path: '/inventory',
    },
  ];

  function goToHome() {
    navigate('/home');
  }

  function goToInventory() {
    navigate('/inventory');
  }

  function goToExternalSite(url: string) {
    window.open(url, '_blank');
  }

  function goToAppleSakuMonsters() {
    goToExternalSite(
      'https://apps.apple.com/us/app/saku-monsters/id6475238373'
    );
  }

  function goToTwitter() {
    goToExternalSite('https://twitter.com/sakumonsters?lang=en');
  }

  function goToMarketplace() {
    goToExternalSite('https://store.sakumonsters.com/auth/login');
  }

  return {
    routes,
    currentPath: location.pathname,
    goToHome,
    goToInventory,
    goToExternalSite,
    goToAppleSakuMonsters,
    goToTwitter,
    goToMarketplace,
  };
}
