import styles from './logo.module.scss';
import { useRouter } from '../../../routing/hooks/use-router';
import SakuLogo from '../../../../../assets/pngs/saku_logo.png';
import classNames from 'classnames';
export interface LogoProps {
  className?: string;
}
export function Logo({ className }: LogoProps) {
  const { goToHome } = useRouter();
  return (
    <div
      className={classNames(styles['container'], className)}
      onClick={(event) => {
        event.stopPropagation();
        goToHome();
      }}
    >
      <img src={SakuLogo} alt={'App logo'} />
    </div>
  );
}
