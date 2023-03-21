import { ChakraProvider, VStack } from '@chakra-ui/react';
import Theme from '../../assets/theme/index';
import { CardInfo } from './CardInfo';
import { ReviewSection } from './ReviewSection';
import { LoadBar } from '../shared/LoadBar';
import { useTutorCardPageQuery } from './useTutorCardPageQuery';

export const TutorCardPage = () => {
  const { tutorQuery, reviewQuery } = useTutorCardPageQuery();

  if (tutorQuery.isLoading || reviewQuery.isLoading)
    return <LoadBar description={'Загружаем карточку преподавателя'} />;

  const tutorState = tutorQuery.data;
  const reviewsState = reviewQuery.data;

  return (
    <ChakraProvider theme={Theme}>
      <VStack maxW={'100%'} spacing={'40px'}>
        <CardInfo
          name={`${tutorState.lastName} ${tutorState.firstName} ${tutorState.middleName}`}
          job={`${tutorState.job.post} в ${tutorState.job.place}`}
          location={`${tutorState.location.city}, ${tutorState.location.district}`}
          subjects={tutorState.subjects.map((s) => s.description).join(', ')}
          rating={tutorState.rating}
          avatar={tutorState.avatar}
          contacts={tutorState.contacts}
          educations={tutorState.educations}
          requirements={tutorState.requirements}
          awards={tutorState.awards}
          age={18}
          about={
            // eslint-disable-next-line max-len
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien et velit suscipit faucibus non vitae leo. Nunc id lectus dolor. Curabitur quis mi metus. Integer ultricies sagittis nibh eu finibus. Nam non nulla eget ipsum vestibulum congue sed sit amet diam. Etiam purus augue, laoreet sit amet nisi eu, ultricies volutpat velit.'
          }
        />
        <ReviewSection reviews={reviewsState.items} />
      </VStack>
    </ChakraProvider>
  );
};
