import { Avatar, Text, HStack, VStack } from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';
import { Review } from '../../apis/tutors';

export const SingleReview = (props: Review) => {
  return (
    <div>
      <HStack spacing={'16px'} align={'start'}>
        <Avatar
          name={props.studentName}
          showBorder={true}
          src={props.studentAvatar}
          size="md"
        />
        <VStack spacing={'16px'} align={'start'}>
          <HStack spacing={'16px'}>
            <Text as={'b'}>{props.studentName}</Text>
            <ReviewStar starCount={props.rating} />
          </HStack>
          <Text>{props.description}</Text>
        </VStack>
      </HStack>
    </div>
  );
};
