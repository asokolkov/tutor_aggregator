import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Theme from '../../theme';
import UserAPI, { User } from '../../apis/currentUser';
import UserContext from './UserContext';
import { LoadBar } from './LoadBar';

const BaseLayout: React.FC = () => {
  const [user, setUser] = useState<User>({ isAuthorized: false });
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    UserAPI.getCurrentUser()
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log('Запрос на авторизацию провалился');

        setLoading(false);
      });
  }, []);
  if (isLoading) return <LoadBar />;
  return (
    <ChakraProvider theme={Theme}>
      <UserContext.Provider value={user}>
        <Header />
        <Container padding={'0vh 5vw 16vh 5vw'} maxW={'100%'}>
          <Outlet />
        </Container>
        <Footer />
      </UserContext.Provider>
    </ChakraProvider>
  );
};

export default BaseLayout;
