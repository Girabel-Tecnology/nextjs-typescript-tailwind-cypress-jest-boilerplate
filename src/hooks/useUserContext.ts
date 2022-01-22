import { UserContext } from '../context/userContext';
import React from 'react';

export const useUserContext = () => {
  return React.useContext(UserContext);
};
