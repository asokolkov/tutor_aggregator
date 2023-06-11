import { Decorator } from '@storybook/react';
import { V1AccountTypeDto, V1UserDto } from '../../src/api/models';
import {
  UserContext,
  UserContextProps,
} from '../../src/layouts/base/contexts/UserContext';

export const withUserProvider: Decorator = (story, context) => {
  const user: V1UserDto = {
    id: 'current',
    accountType:
      (context.args.accountType as V1AccountTypeDto) || V1AccountTypeDto.tutor,
    firstName: 'Имя',
    lastName: 'Фамилия',
  };

  const userProviderValue: UserContextProps = {
    isAuthorized: true,
    removeUser(): void {},
    setUser(_: V1UserDto): void {},
    user,
  };
  return (
    <UserContext.Provider value={userProviderValue}>
      {story()}
    </UserContext.Provider>
  );
};
