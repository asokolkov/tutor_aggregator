import React from 'react';
import { User } from '../apis/currentUser';

type UserContextProps = {
  user?: User;
  setUser: (u: User) => void;
  removeUser: () => void;
};
export const UserContext = React.createContext<UserContextProps>({
  user: undefined,
  setUser: () => {},
  removeUser: () => {},
});
