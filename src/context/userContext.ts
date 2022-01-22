import React from 'react';

// TODO ver onde colocar essas interface
export interface User {
  id: number;
  email: string;
  name: string;
}

export type SignUpParams = Omit<User, 'id'>;

export interface SignInParams {
  email: string;
  password: string;
}

interface UserContext {
  user: User;
  setUser: (user: Partial<User>) => void;
  signIn: (values: SignInParams) => Promise<void>;
  signUp: (values: SignUpParams) => Promise<void>;
  logOut: () => void;
}

export const UserContext = React.createContext<UserContext>({} as UserContext);
