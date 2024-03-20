import styles from './button.module.scss';
import { forwardRef, MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type?: 'contained' | 'outlined' | 'round' | 'discover';
  disabled?: boolean;
  fullWidth?: boolean;
  contrasted?: boolean;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      onClick,
      children,
      type = 'contained',
      disabled = false,
      fullWidth = false,
      contrasted = false,
      className,
    } = props;

    return (
      <button
        disabled={disabled}
        ref={ref}
        className={cn(
          styles['btn'],
          { [styles['disabled']]: disabled },
          { [styles['full-width']]: fullWidth },
          { [styles['contrasted']]: contrasted },
          styles[type],
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
