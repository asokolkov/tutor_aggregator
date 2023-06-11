import React from 'react';
import { V1UserDto } from '../../../api/models';

export type UserContextProps = {
  user?: V1UserDto;
  setUser: (u: V1UserDto) => void;
  removeUser: () => void;
  isAuthorized: boolean;
};
export const UserContext = React.createContext<UserContextProps>(undefined);
