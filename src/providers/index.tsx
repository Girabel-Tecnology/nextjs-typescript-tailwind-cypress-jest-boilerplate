import { FC } from 'react';
import { UserProvider } from './UserProvider';

export const Providers: FC = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
