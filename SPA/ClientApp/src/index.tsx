import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const rootElement = document.getElementById('root');
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './routes';

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
