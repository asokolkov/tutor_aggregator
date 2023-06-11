import { Decorator } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const withQueryClient: Decorator = (story) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {story()}
    </QueryClientProvider>
  );
};
