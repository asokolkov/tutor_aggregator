import React from 'react';
import { User } from '../api/user';

type UserContextProps = {
  user?: User;
  setUser: (u: User) => void;
  removeUser: () => void;
  isAuthorized: boolean;
};
export const UserContext = React.createContext<UserContextProps>({
  user: undefined,
  setUser: () => {},
  removeUser: () => {},
  isAuthorized: false,
});
