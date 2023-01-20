import React from 'react';
import { User } from '../../apis/currentUser';

const UserContext = React.createContext<User>(null);

export default UserContext;
