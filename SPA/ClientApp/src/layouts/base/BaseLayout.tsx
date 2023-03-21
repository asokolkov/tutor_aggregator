import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Theme from '../../assets/theme';
import { UserContext } from '../../contexts/UserContext';
import { LoadBar } from '../../pages/shared/LoadBar';
import { useUser } from './hooks';
import React, { useMemo } from 'react';

const BaseLayout: React.FC = () => {
  const { user, setUser, removeUser, isLoading, isUserAuth } = useUser();
  const userProviderValues = useMemo(
    () => ({ user, setUser, removeUser, isAuthorized: isUserAuth }),
    [user, setUser, removeUser, isUserAuth]
  );
  if (isLoading) return <LoadBar description={'Загружаем данные'} />;
  return (
    <ChakraProvider theme={Theme}>
      <UserContext.Provider value={userProviderValues}>
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
