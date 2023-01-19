import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Theme from '../../theme';

const BaseLayout: React.FC = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Header />
      <Container padding={'0vh 5vw 16vh 5vw'} maxW={'100%'}>
        <Outlet />
      </Container>
      <Footer />
    </ChakraProvider>
  );
};

export default BaseLayout;
