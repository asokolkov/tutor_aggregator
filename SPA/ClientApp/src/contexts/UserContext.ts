import React from 'react';
import { User } from '../apis/currentUser';

export const UserContext = React.createContext<User>(null);
