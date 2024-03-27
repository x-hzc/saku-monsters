import styles from './logo.module.scss';
import { useRouter } from '../../../routing/hooks/use-router';
import SakuLogo from '../../../../../assets/pngs/saku_logo.png';
import classNames from 'classnames';
import { useMenuMobile } from '../../hoos/use-menu-mobile';
export interface LogoProps {
  className?: string;
}
export function Logo({ className }: LogoProps) {
  const { goToHome } = useRouter();
  const { isOpen, toggleMenu } = useMenuMobile();
  return (
    <div
      className={classNames(styles['container'], className)}
      onClick={(event) => {
        event.stopPropagation();
        goToHome();
        if (isOpen) {
          toggleMenu();
        }
      }}
    >
      <img src={SakuLogo} alt={'App logo'} />
    </div>
  );
}
