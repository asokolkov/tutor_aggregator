import { Avatar, Text, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { RatingStars } from '../../../components/ReviewStars/RatingStars';

export const SingleReview: React.FC<SingleReviewProps> = (props) => {
  return (
    <HStack
      w="100%"
      spacing={'16px'}
      align={'start'}
      borderWidth="2px"
      borderColor="blue.200"
      borderRadius="10px"
      p="16px"
    >
      <Avatar name={props.fullName} size="md" />
      <VStack spacing={'16px'} align={'start'}>
        <HStack spacing={'16px'}>
          <Text variant="regular.h3">{props.fullName}</Text>
          <RatingStars rating={props.rating} />
          <Text>{props.date}</Text>
        </HStack>
        <Text>{props.text}</Text>
      </VStack>
    </HStack>
  );
};

export type SingleReviewProps = {
  fullName: string;
  rating: number;
  date: string;
  text: string;
};
