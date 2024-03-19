import { MouseEventHandler, ReactNode } from 'react';

export interface BaseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}
