import React from 'react';
import { VStack } from '@chakra-ui/react';
import { MainSearchBox } from './components/MainSearchBox';
import { MainDescriptionForStudents } from './components/MainDescriptionForStudents';
import { MainDescriptionForTutors } from './components/MainDescriptionForTutors';
import { SearchParamsContext } from './contexts/SearchParamsContext';
import { useSearchParamsContext } from './hooks/useSearchParamsContext';

export const MainPage = () => {
  const { providerValue } = useSearchParamsContext();

  return (
    <VStack spacing="40px">
      <SearchParamsContext.Provider value={providerValue}>
        <MainSearchBox />
      </SearchParamsContext.Provider>
      <VStack spacing="60px" w="100%">
        <MainDescriptionForStudents />
        <MainDescriptionForTutors />
      </VStack>
    </VStack>
  );
};
