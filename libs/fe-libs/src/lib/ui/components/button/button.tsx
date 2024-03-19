import styles from './button.module.scss';
import { forwardRef } from 'react';
import { BaseButtonProps } from '../../types/base-button-props';
import cn from 'classnames';

export interface ButtonProps extends BaseButtonProps {
  type?: 'contained' | 'outlined' | 'round';
  fullWidth?: boolean;
  contrasted?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      type = 'contained',
      fullWidth = false,
      contrasted = false,
      onClick,
      disabled = false,
      children,
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
