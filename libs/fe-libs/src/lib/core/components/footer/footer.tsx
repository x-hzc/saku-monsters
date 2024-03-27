import styles from './footer.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { Button } from '../../../ui/components/button/button';
import cn from 'classnames';

export interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps) {
  const { className = '' } = props;
  const { t } = useTranslation();
  const { goToAppleSakuMonsters } = useRouter();

  return (
    <div className={cn(styles['container'], className)}>
      <div className={styles['t-container']}>
        <div className={styles['title']}>{t('footer.place')}</div>
        <Button
          className={styles['btn']}
          onClick={goToAppleSakuMonsters}
        >
          TWITTER
        </Button>
      </div>
      <ul className={styles['links-container']}>
        <li className={styles['link']} onClick={goToAppleSakuMonsters}>
          {t('footer.marketplace')}
        </li>
        <li className={styles['link']} onClick={goToAppleSakuMonsters}>
          {t('footer.sakulog')}
        </li>
        <li className={styles['link']} onClick={goToAppleSakuMonsters}>
          {t('footer.download')}
        </li>
        <li className={styles['link']} onClick={goToAppleSakuMonsters}>
          {t('footer.privacy')}
        </li>
        <li className={styles['link']} onClick={goToAppleSakuMonsters}>
          {t('footer.terms')}
        </li>
      </ul>
      <div className={styles['rights']}>
        <div>© 2024 Saku Monsters,</div>
        <div>{t('footer.rights')}</div>
      </div>
    </div>
  );
}
