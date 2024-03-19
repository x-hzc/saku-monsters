import styles from './home-page.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';

export function HomePage() {
  const { t } = useTranslation();
  const { goToInventory } = useRouter();

  return (
    <div className={styles['container']}>
      <h1>{t('welcome')}</h1>
      <div onClick={goToInventory} style={{ cursor: 'pointer' }}>
        {t('goToInventory')}
      </div>
    </div>
  );
}
