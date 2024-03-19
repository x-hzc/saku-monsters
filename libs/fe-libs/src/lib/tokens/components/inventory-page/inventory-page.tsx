import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';

export function InventoryPage() {
  const { t } = useTranslation();
  const { goToHome } = useRouter();

  return (
    <div>
      <h1>{t('inventory')}</h1>
      <div onClick={goToHome} style={{ cursor: 'pointer' }}>
        {t('goToHome')}
      </div>
    </div>
  );
}
