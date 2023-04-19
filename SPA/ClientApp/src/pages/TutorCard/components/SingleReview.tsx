import { Avatar, Text, HStack, VStack } from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';
import { Review } from '../../../api/tutors';
import React from 'react';

type Props = {
  review: Review;
};

export const SingleReview: React.FC<Props> = ({ review }) => {
  return (
    <div>
      <HStack spacing={'16px'} align={'start'}>
        <Avatar
          name={review.studentName}
          showBorder={true}
          src={review.studentAvatar}
          size="md"
        />
        <VStack spacing={'16px'} align={'start'}>
          <HStack spacing={'16px'}>
            <Text as={'b'}>{review.studentName}</Text>
            <ReviewStar starCount={review.rating} />
          </HStack>
          <Text>{review.description}</Text>
        </VStack>
      </HStack>
    </div>
  );
};
