import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from '../../theme';

const BaseLayout: React.FC = () => {
  return (
    <ChakraProvider theme={Theme}>
      <div className="PageLayout">
        <Header />
        <main className="Main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default BaseLayout;
