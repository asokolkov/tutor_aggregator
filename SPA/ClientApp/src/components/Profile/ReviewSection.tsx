import { Review, ReviewProps } from './Review';
import { Text, VStack } from '@chakra-ui/react';

export const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  const reviewsDiv = [];
  for (const review of reviews) {
    reviewsDiv.push(
      <Review
        name={review.name}
        review={review.review}
        rating={review.rating}
        avatar={review.avatar}
      />
    );
  }
  return (
    <VStack w="100%" bg={'white'} spacing={'20px'} align={'start'}>
      <Text fontSize={'2xl'} as="b">
        Отзывы
      </Text>
      {reviewsDiv}
    </VStack>
  );
};

type ReviewSectionProps = {
  reviews: Array<ReviewProps>;
};
