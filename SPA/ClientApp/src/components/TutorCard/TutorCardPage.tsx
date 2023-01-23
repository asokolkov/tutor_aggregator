import { ChakraProvider, VStack } from '@chakra-ui/react';
import Theme from '../../theme/index';
import { CardInfo } from './CardInfo';
import { ReviewSection } from './ReviewSection';
import { useEffect, useState } from 'react';
import TutorsAPI, { Tutor, ReviewList } from '../../apis/tutors';
import { useParams } from 'react-router-dom';
import { LoadBar } from '../BaseLayout/LoadBar';

export const TutorCardPage = () => {
  const [, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tutorState, setTutorState] = useState<Tutor>();
  const [reviewsState, setReviewState] = useState<ReviewList>();
  const { tutorId } = useParams();

  useEffect(() => {
    Promise.all([
      TutorsAPI.getTutorById(tutorId),
      TutorsAPI.getReviewsByTutorId(tutorId),
    ]).then(
      (result) => {
        setIsLoaded(true);
        setTutorState(result[0]);
        setReviewState(result[1]);
      },
      (e) => {
        setIsLoaded(true);
        setError(e);
      }
    );
  }, []);
  if (!isLoaded)
    return <LoadBar description={'Загружаем карточку преподавателя'} />;

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
