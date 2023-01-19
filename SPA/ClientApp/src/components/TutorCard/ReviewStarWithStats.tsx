import { Text } from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';
import React from 'react';

export const ReviewStarWithStats = (props: ReviewStarWithStatsProps) => {
  return (
    <React.Fragment>
      <ReviewStar starCount={5} />
      <Text fontSize="m">Средняя оценка: {props.rating}</Text>
    </React.Fragment>
  );
};

type ReviewStarWithStatsProps = {
  rating: number;
};
