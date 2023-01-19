import {
  ChakraProvider,
  CircularProgress,
  Flex,
  VStack,
} from '@chakra-ui/react';
import Theme from '../../theme/index';
import { CardInfo } from './CardInfo';
import { ReviewSection } from './ReviewSection';
import { useEffect, useState } from 'react';
import TutorsAPI, { Tutor } from '../../apis/tutors';
import ReviewAPI, { ReviewList } from '../../apis/reviews';
import AwardSection from './AwardSection';
import { useParams } from 'react-router-dom';

export const TutorCardPage = () => {
  const [, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tutorState, setTutorState] = useState<Tutor>();
  const [reviewsState, setReviewState] = useState<ReviewList>();
  const { tutorId } = useParams();

  useEffect(() => {
    Promise.all([
      TutorsAPI.getTutorById(tutorId),
      ReviewAPI.getReviewsByTutorId(tutorId),
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
    return (
      <Flex align={'center'} justify={'center'}>
        <CircularProgress
          isIndeterminate
          color="teal"
          size={'100px'}
          value={25}
          thickness="12px"
        />
      </Flex>
    );
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
        />

        <AwardSection awards={tutorState.awards} />
        <ReviewSection reviews={reviewsState.items} />
      </VStack>
    </ChakraProvider>
  );
};
