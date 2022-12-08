import { Review, ReviewProps } from './Review';
import { Text, Container } from '@chakra-ui/react';

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
    <Container maxW="100%" bg={'white'}>
      <Text fontSize={'2xl'} as="b">
        Отзывы
      </Text>
      {reviewsDiv}
    </Container>
  );
};

type ReviewSectionProps = {
  reviews: Array<ReviewProps>;
};
