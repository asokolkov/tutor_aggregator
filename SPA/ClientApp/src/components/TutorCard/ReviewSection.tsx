import { SingleReview } from './SingleReview';
import { Text, VStack } from '@chakra-ui/react';
import { Review } from '../../apis/tutors';

export const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  return (
    <VStack w="100%" bg={'white'} spacing={'20px'} align={'start'}>
      <Text fontSize={'2xl'} as="b">
        Отзывы
      </Text>
      {reviews.map((r) => (
        <SingleReview {...r} key={r.id} />
      ))}
    </VStack>
  );
};

type ReviewSectionProps = {
  reviews: Array<Review>;
};
