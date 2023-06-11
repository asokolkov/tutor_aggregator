import type { Preview } from '@storybook/react';
import theme from '../src/assets/theme/index';
import { withRouter } from 'storybook-addon-react-router-v6';
import { V1AccountTypeDto } from '../src/api/models';
import { withQueryClient } from './decorators/withQueryClient';
import { withUserProvider } from './decorators/withUserProvider';

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

  args: { accountType: V1AccountTypeDto.tutor },
  argTypes: {
    accountType: {
      control: 'radio',
      options: Object.values(V1AccountTypeDto),
    },
  },

  decorators: [withUserProvider, withQueryClient, withRouter],
};

export default preview;
