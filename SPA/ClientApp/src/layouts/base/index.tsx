import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Flex } from '@chakra-ui/react';
import { UserContext } from './contexts/UserContext';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import React from 'react';
import { SearchStateContext } from './contexts/SearchStateContext';
import { useSearchValues } from './hooks/useSearchValues';
import { useUser } from './hooks/useUser';

const BaseLayout: React.FC = () => {
  const { providerValues: userProviderValues, isLoading } = useUser();
  const { providerValues: providerValues } = useSearchValues();

  if (isLoading) return <LoadBar description={'Загружаем данные'} />;
  return (
    <UserContext.Provider value={userProviderValues}>
      <SearchStateContext.Provider value={providerValues}>
        <Flex minH={'100vh'} direction={'column'} justify={'space-between'}>
          <Container padding={'0 5vw 0 5vw'} maxW={'100%'}>
            <Header />
            <Outlet />
          </Container>
          <Footer />
        </Flex>
      </SearchStateContext.Provider>
    </UserContext.Provider>
  );
};

export default BaseLayout;
