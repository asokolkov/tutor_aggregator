import React from 'react';
import { VStack } from '@chakra-ui/react';
import { MainSearchBox } from './components/MainSearchBox';
import { MainDescriptionForStudents } from './components/MainDescriptionForStudents';
import { MainDescriptionForTutors } from './components/MainDescriptionForTutors';

export const MainPage = () => {
  return (
    <VStack spacing={'40px'}>
      <MainSearchBox />
      <MainDescriptionForStudents />
      <MainDescriptionForTutors />
    </VStack>
  );
};
