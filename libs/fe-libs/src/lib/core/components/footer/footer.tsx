import styles from './footer.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
import { Button } from '../../../ui/components/button/button';
import cn from 'classnames';
import { FooterLogo } from '../footer-logo/footer-logo';

export interface FooterProps {
  containerClassName?: string;
  contentClassName?: string;
}

export function Footer(props: FooterProps) {
  const { containerClassName = '', contentClassName = '' } = props;
  const { t } = useTranslation();
  const { goToAppleSakuMonsters, goToTwitter } = useRouter();

  return (
    <div className={cn(styles['container'], containerClassName)}>
      <FooterLogo />
      <div className={cn(styles['content'], contentClassName)}>
        <div className={styles['t-container']}>
          <div className={styles['title']}>{t('footer.place')}</div>
          <Button className={styles['btn']} onClick={goToTwitter}>
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
    </div>
  );
}
