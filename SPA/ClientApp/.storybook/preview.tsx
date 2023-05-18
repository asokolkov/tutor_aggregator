import type { Preview } from '@storybook/react';
import theme from '../src/assets/theme/index';
import { QueryClientProvider, QueryClient } from 'react-query';
import { withRouter } from 'storybook-addon-react-router-v6';

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
};

export const decorators = [
  (story: any) => (
    <QueryClientProvider client={new QueryClient()}>
      {story()}
    </QueryClientProvider>
  ),
  withRouter,
];

export default preview;
