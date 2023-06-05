import type { Preview } from '@storybook/react';
import theme from '../src/assets/theme/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { withRouter } from 'storybook-addon-react-router-v6';
import {
  UserContext,
  UserContextProps,
} from '../src/layouts/base/contexts/UserContext';
import { V1AccountTypeDto, V1UserDto } from '../src/api/models';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
  },

  decorators: [
    (story, context) => {
      const user: V1UserDto = {
        id: 'current',
        accountType: context.args.accountType || V1AccountTypeDto.tutor,
        firstName: 'Имя',
        lastName: 'Фамилия',
      };

      const userProviderValue: UserContextProps = {
        isAuthorized: true,
        removeUser(): void {},
        setUser(u: V1UserDto): void {},
        user,
      };
      return (
        <UserContext.Provider value={userProviderValue}>
          <QueryClientProvider client={new QueryClient()}>
            {story()}
          </QueryClientProvider>
        </UserContext.Provider>
      );
    },
    withRouter,
  ],
};

export default preview;
