import styles from './logo.module.scss';
import { useRouter } from '../../../routing/hooks/use-router';
import SakuLogo from '../../../../../assets/pngs/saku_logo.png';
export function Logo() {
  const { goToHome } = useRouter();
  return (
    <div
      className={styles['container']}
      onClick={(event) => {
        event.stopPropagation();
        goToHome();
      }}
    >
      <img src={SakuLogo} alt={'App logo'} />
    </div>
  );
}
