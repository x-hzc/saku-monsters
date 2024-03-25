import styles from './information.module.scss';
import React from 'react';

export interface InformationProps {
  children: React.ReactNode;
}

export function Information({ children }: InformationProps) {
  return <div className={styles['container']}>{children}</div>;
}
