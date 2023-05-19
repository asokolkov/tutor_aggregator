import { Text, VStack } from '@chakra-ui/react';
import { CardInfo } from './CardInfo';
import { ReviewSection } from './ReviewSection';
import { LoadBar } from '../sharedComponents/LoadBar/LoadBar';
import { useTutorCardPageQuery } from '../../query/useTutorCardPageQuery';
import React, { useMemo } from 'react';
import { TutorCardContext } from '../../contexts/TutorCardContext';
import { MapCardInfo } from './_mapper';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Color } from '../../assets/theme/themeEnum';
import { SEARCH_PAGE } from '../../routes/routePaths';
import { Link } from 'react-router-dom';

export const TutorCardPage = () => {
  const { tutorQuery, reviewQuery } = useTutorCardPageQuery();

  const tutor = tutorQuery.data;
  const reviews = reviewQuery.data;
  const providerValue = useMemo(() => ({ tutor, reviews }), [tutor, reviews]);

  if (tutorQuery.isLoading || reviewQuery.isLoading)
    return <LoadBar description={'Загружаем карточку преподавателя'} />;

  return (
    <TutorCardContext.Provider value={providerValue}>
      <Link to={SEARCH_PAGE}>
        <Text variant="misc.link" color={Color.blue300}>
          <ArrowBackIcon />
          Вернуться в поиск
        </Text>
      </Link>
      <VStack maxW={'100%'} spacing={'40px'}>
        <CardInfo {...MapCardInfo(tutor)} />
        <ReviewSection />
      </VStack>
    </TutorCardContext.Provider>
  );
};
