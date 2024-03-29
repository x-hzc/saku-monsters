import styles from './footer.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from '../../../routing/hooks/use-router';
// import { useDeviceType } from '../../../shared/hooks/use-device-type';
import { FooterLogo } from '../footer-logo/footer-logo';
import { Button } from '../../../ui/components/button/button';
import cn from 'classnames';

// import BgMobile from '../../../../../assets/svgs/bg_footer_wave_mobile.svg';
// import BgDesktop from '../../../../../assets/svgs/bg_footer_wave_desktop.svg';

export interface FooterProps {
  containerClassName?: string;
  contentClassName?: string;
  // bgClassName?: string;
  logoClassName?: string;
}

export function Footer(props: FooterProps) {
  const {
    containerClassName = '',
    contentClassName = '',
    // bgClassName = '',  
    logoClassName = '',
  } = props;
  const { t } = useTranslation();
  const { goToInventory, goToAppleSakuMonsters, goToTwitter, goToMarketplace } =
    useRouter();
  // const { isMaxTablet } = useDeviceType();

  return (
    <div className={cn(styles['container'], containerClassName)}>
      {/* <div className={cn(styles['bg-footer'], bgClassName)}>
        {isMaxTablet ? <BgMobile /> : <BgDesktop />}
      </div> */}
      <FooterLogo className={logoClassName} />
      <div className={cn(styles['content'], contentClassName)}>
        <div className={styles['t-container']}>
          <div className={styles['title']}>{t('footer.place')}</div>
          <Button className={styles['btn']} onClick={goToTwitter}>
            TWITTER
          </Button>
        </div>
        <ul className={styles['links-container']}>
          <li className={styles['link']} onClick={goToMarketplace}>
            {t('footer.marketplace')}
          </li>
          <li className={styles['link']} onClick={goToInventory}>
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
