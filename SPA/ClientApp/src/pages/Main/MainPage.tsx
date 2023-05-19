import React, { useMemo } from 'react';
import { VStack } from '@chakra-ui/react';
import { MainSearchBox } from './components/MainSearchBox';
import { MainDescriptionForStudents } from './components/MainDescriptionForStudents';
import { MainDescriptionForTutors } from './components/MainDescriptionForTutors';
import { useLocationQuery } from '../../query/useLocationQuery';
import { useSubjectQuery } from '../../query/useSubjectQuery';
import { LoadBar } from '../sharedComponents/LoadBar/LoadBar';
import { SearchParamsContext } from '../../contexts/SearchParamsContext';

export const MainPage = () => {
  const { locationsQuery } = useLocationQuery();
  const { subjectQuery } = useSubjectQuery();

  const providerValues = useMemo(
    () => ({
      locationsData: locationsQuery.data,
      subjectsData: subjectQuery.data,
    }),
    [locationsQuery, subjectQuery]
  );

  if (locationsQuery.isLoading || subjectQuery.isLoading)
    return <LoadBar description="Загружаем данные о районах и предметах" />;
  return (
    <VStack spacing="40px">
      <SearchParamsContext.Provider value={providerValues}>
        <MainSearchBox />
      </SearchParamsContext.Provider>
      <VStack spacing="60px" w="100%">
        <MainDescriptionForStudents />
        <MainDescriptionForTutors />
      </VStack>
    </VStack>
  );
};
