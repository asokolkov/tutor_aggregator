import { VStack } from '@chakra-ui/react';
import { CardInfo } from './CardInfo';
import { ReviewSection } from './ReviewSection';
import { LoadBar } from '../sharedComponents/LoadBar';
import { useTutorCardPageQuery } from '../../query/useTutorCardPageQuery';
import { useMemo } from 'react';
import { TutorCardContext } from '../../contexts/TutorCardContext';

export const TutorCardPage = () => {
  const { tutorQuery, reviewQuery } = useTutorCardPageQuery();

  const tutor = tutorQuery.data;
  const reviews = reviewQuery.data;
  const providerValue = useMemo(() => ({ tutor, reviews }), [tutor, reviews]);

  if (tutorQuery.isLoading || reviewQuery.isLoading)
    return <LoadBar description={'Загружаем карточку преподавателя'} />;

  return (
    <TutorCardContext.Provider value={providerValue}>
      <VStack maxW={'100%'} spacing={'40px'}>
        <CardInfo />
        <ReviewSection />
      </VStack>
    </TutorCardContext.Provider>
  );
};
