import React, { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';
import styles from './index.module.css';

interface ButtonProps {
  type?: 'submit';
}

export const Button: React.FC<ButtonProps> = ({ children, type }) => {
  const classes = useMemo(() => {
    return [styles.button, styles.primaryButton].join(' ');
  }, []);

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC = ({ children }) => {
  const classes = useMemo(() => {
    return [styles.button, styles.secondaryButton].join(' ');
  }, []);

  return <button className={classes}>{children}</button>;
};
