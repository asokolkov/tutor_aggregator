import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const rootElement = document.getElementById('root');
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './routes/browserRouter';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './assets/theme/index';

const useMock = false;
if (useMock) {
  require('./api/mocks/index');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
