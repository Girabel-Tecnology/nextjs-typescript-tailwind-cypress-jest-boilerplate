import { useMemo } from 'react';
import styles from './index.module.css';

export const PrimaryButton: React.FC = ({ children }) => {
  const classes = useMemo(() => {
    return [styles.button, styles.primaryButton].join(' ');
  }, []);

  return <button className={classes}>{children}</button>;
};

export const SecondaryButton: React.FC = ({ children }) => {
  const classes = useMemo(() => {
    return [styles.button, styles.secondaryButton].join(' ');
  }, []);

  return <button className={classes}>{children}</button>;
};
