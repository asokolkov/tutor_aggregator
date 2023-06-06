import { Text, VStack } from '@chakra-ui/react';
import { Card } from './Card';
import { ReviewSection } from './ReviewSection';
import { useTutorCardPageQuery } from '../../query/useTutorCardPageQuery';
import React from 'react';
import { MapCardInfo } from './_mapper';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Color } from '../../assets/theme/themeEnum';
import { SEARCH_PAGE } from '../../routes/routePaths';
import { Link } from 'react-router-dom';

export const TutorCardPage = () => {
  const { tutorQuery, reviewQuery } = useTutorCardPageQuery();

  const tutor = tutorQuery.data;
  const reviews = reviewQuery.data;

  return (
    <>
      <Link to={SEARCH_PAGE}>
        <Text variant="misc.link" color={Color.blue300} padding={'0 0 10px 0'}>
          <ArrowBackIcon />
          Вернуться в поиск
        </Text>
      </Link>
      <VStack maxW={'100%'} spacing={'0px'}>
        <Card {...MapCardInfo(tutor, tutorQuery.isLoading)} />
        <ReviewSection reviews={reviews} isLoading={reviewQuery.isLoading} />
      </VStack>
    </>
  );
};
