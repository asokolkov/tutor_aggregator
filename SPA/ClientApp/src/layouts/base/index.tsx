import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@chakra-ui/react';
import { UserContext } from './contexts/UserContext';
import React from 'react';
import { SearchStateContext } from './contexts/SearchStateContext';
import { useSearchValues } from './hooks/useSearchValues';
import { useUser } from './hooks/useUser';

const BaseLayout: React.FC = () => {
  const { providerValues: userProviderValues, isLoading } = useUser();
  const { providerValues: providerValues } = useSearchValues();

  return (
    <UserContext.Provider value={userProviderValues}>
      <SearchStateContext.Provider value={providerValues}>
        <Header />
        <Container padding={'0 5vw 0 5vw'} maxW={'100%'}>
          {!isLoading && <Outlet />}
        </Container>
        <Footer />
      </SearchStateContext.Provider>
    </UserContext.Provider>
  );
};

export default BaseLayout;
