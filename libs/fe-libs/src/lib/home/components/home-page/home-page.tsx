import styles from './home-page.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { IntroCard } from '../../../cards/components/intro-card/intro-card';

export function HomePage() {
  const { t } = useTranslation();
  const { goToInventory } = useRouter();
  return (
    <div className={styles['container']}>
      <h1>{t('home.welcome')}</h1>
      <div onClick={goToInventory} style={{ cursor: 'pointer' }}>
        {t('home.goToInventory')}
      </div>
      <IntroCard />
    </div>
  );
}
