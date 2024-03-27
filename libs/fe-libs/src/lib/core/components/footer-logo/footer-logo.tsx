import styles from './footer-logo.module.scss';
import SakuLogo from '../../../../../assets/pngs/footer_saku_logo.png';
import cn from 'classnames';

interface FooterLogoProps {
  className?: string;
}

export function FooterLogo(props: FooterLogoProps) {
  const { className = '' } = props;

  return (
    <div className={cn(styles['footer-saku-logo-container'], className)}>
      <img src={SakuLogo} alt="footer-saku-logo" />
    </div>
  );
}
