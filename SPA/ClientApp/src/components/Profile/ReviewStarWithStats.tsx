import { Text, HStack } from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';

export const ReviewStarWithStats = (props: ReviewStarWithStatsProps) => {
  return (
    <HStack spacing={'32px'}>
      <ReviewStar starCount={5} />
      <Text fontSize="m">
        {props.rating.average} на основе {props.rating.count} отзывов
      </Text>
    </HStack>
  );
};

type ReviewStarWithStatsProps = {
  rating: {
    count: number;
    average: number;
  };
};
