import styles from './footer-logo.module.scss';
import { FooterProps } from '../footer/footer';
import SakuLogo from '../../../../../assets/pngs/footer_saku_logo.png';
import cn from 'classnames';

export function FooterLogo(props: FooterProps) {
  const { className = '' } = props;

  return (
    <div className={cn(styles['footer-saku-logo-container'], className)}>
      <img src={SakuLogo} alt="footer-saku-logo" />
    </div>
  );
}
