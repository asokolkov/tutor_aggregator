import { SingleReview } from './components/SingleReview';
import { Text, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TutorCardContext } from '../../contexts/TutorCardContext';
import { MapSingleReview } from './_mapper';

export const ReviewSection: React.FC = () => {
  const context = useContext(TutorCardContext);
  return (
    <VStack w="100%" spacing="20px" align="start">
      <Text variant="brand.h1">Отзывы</Text>
      {context.reviews.items.map((review) => (
        <SingleReview {...MapSingleReview(review)} key={review.id} />
      ))}
    </VStack>
  );
};
