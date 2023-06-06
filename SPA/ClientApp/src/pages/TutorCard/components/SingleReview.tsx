import {
  Avatar,
  Text,
  HStack,
  VStack,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { RatingStars } from '../../../components/ReviewStars/RatingStars';

export const SingleReview: React.FC<SingleReviewProps> = (props) => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

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
      <Avatar name={props.fullName} size={isLargerThanTablet ? 'md' : 'sm'} />
      <VStack spacing={'16px'} align={'start'}>
        <Stack
          spacing={isLargerThanTablet ? '16px' : '5px'}
          direction={isLargerThanTablet ? 'row' : 'column'}
        >
          <Text variant="regular.h3">{props.fullName}</Text>
          <RatingStars rating={props.rating} />
          <Text variant="misc.field-title">{props.date}</Text>
        </Stack>
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
