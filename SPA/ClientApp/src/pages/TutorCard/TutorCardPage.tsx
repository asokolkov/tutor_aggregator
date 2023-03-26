import { ChakraProvider, VStack } from '@chakra-ui/react';
import Theme from '../../assets/theme/index';
import { CardInfo } from './CardInfo';
import { ReviewSection } from './ReviewSection';
import { LoadBar } from '../sharedComponents/LoadBar';
import { useTutorCardPageQuery } from '../../query/useTutorCardPageQuery';

export const TutorCardPage = () => {
  const { tutorQuery, reviewQuery } = useTutorCardPageQuery();

  if (tutorQuery.isLoading || reviewQuery.isLoading)
    return <LoadBar description={'Загружаем карточку преподавателя'} />;

  const tutorState = tutorQuery.data;
  const reviewsState = reviewQuery.data;

  return (
    <ChakraProvider theme={Theme}>
      <VStack maxW={'100%'} spacing={'40px'}>
        <CardInfo tutor={tutorState} />
        <ReviewSection reviews={reviewsState.items} />
      </VStack>
    </ChakraProvider>
  );
};
