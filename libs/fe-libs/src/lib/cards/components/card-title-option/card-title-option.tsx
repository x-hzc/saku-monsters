import styles from './card-title-option.module.scss';
import cn from 'classnames';

export interface Option {
  title: string;
  sup: string;
}

export interface CardTitleOptionProps {
  onClick: () => void;
  option: Option;
  selected: boolean;
  className?: string;
}

export function CardTitleOption(props: CardTitleOptionProps) {
  const { onClick, option, selected, className = '' } = props;

  return (
    <div
      onClick={onClick}
      className={cn(
        styles['opt'],
        {
          [styles['is-selected']]: selected,
        },
        className
      )}
    >
      <h5>{option.title}</h5>
      <sup className={styles['sup']}>{option.sup}</sup>
    </div>
  );
}
