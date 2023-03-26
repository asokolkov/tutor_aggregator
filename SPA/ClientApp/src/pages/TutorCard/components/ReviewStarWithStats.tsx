import { Flex, Text } from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';
import React from 'react';

export const ReviewStarWithStats = (props: ReviewStarWithStatsProps) => {
  return (
    <Flex direction={props.isColumn ? 'column' : 'row'} justify={'center'}>
      <Flex margin={props.isColumn ? '0' : '0 12px 0 0'}>
        <ReviewStar starCount={props.rating} />
      </Flex>
      <Flex>
        <Text fontSize="m" textAlign={'center'}>
          Оценка: {props.rating.toFixed(2)}
        </Text>
      </Flex>
    </Flex>
  );
};

type ReviewStarWithStatsProps = {
  rating: number;
  isColumn?: boolean;
};
