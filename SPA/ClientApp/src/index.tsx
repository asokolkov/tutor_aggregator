import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const rootElement = document.getElementById('root');
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './routes/browserRouter';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './assets/theme/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const useMock = false;
if (useMock) {
  require('./api/mocks/index');
}

const root = createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
