import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const rootElement = document.getElementById('root');
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './assets/theme/index';

if (
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_APP_USE_MOCK_API === 'true'
) {
  require('./apis/mocks/index');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
