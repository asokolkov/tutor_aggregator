import { SingleReview } from './components/SingleReview';
import { Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { TutorCardContext } from '../../contexts/TutorCardContext';

export const ReviewSection = () => {
  const context = useContext(TutorCardContext);
  return (
    <VStack w="100%" bg={'white'} spacing={'20px'} align={'start'}>
      <Text fontSize={'2xl'} as="b">
        Отзывы
      </Text>
      {context.reviews.items.map((review) => (
        <SingleReview review={review} key={review.id} />
      ))}
    </VStack>
  );
};
