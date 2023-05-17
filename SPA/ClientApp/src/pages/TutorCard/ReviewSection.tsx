import { SingleReview } from './components/SingleReview';
import { Button, Flex, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TutorCardContext } from '../../contexts/TutorCardContext';
import { MapSingleReview } from './_mapper';
import NewReviewModal from './modal/NewReviewModal';
import { UserContext } from '../../contexts/UserContext';
import { AccountType } from '../../api/user';

export const ReviewSection: React.FC = () => {
  const { reviews } = useContext(TutorCardContext);
  const { user } = useContext(UserContext);
  const disclosure = useDisclosure();

  return (
    <VStack w="100%" spacing="20px" align="start">
      <Flex justify="space-between" w="100%">
        <Text variant="brand.h1">Отзывы</Text>
        {user.accountType === AccountType.Student && (
          <>
            <Button variant="green" onClick={disclosure.onOpen}>
              Добавить отзыв
            </Button>
            <NewReviewModal disclosure={disclosure} />
          </>
        )}
      </Flex>
      {reviews.items.map((review) => (
        <SingleReview {...MapSingleReview(review)} key={review.id} />
      ))}
    </VStack>
  );
};
