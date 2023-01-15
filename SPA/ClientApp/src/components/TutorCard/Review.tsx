import { Avatar, Text, HStack, VStack } from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';

export const Review = (props: ReviewProps) => {
  return (
    <div>
      <HStack spacing={'16px'} align={'start'}>
        <Avatar
          name={props.name}
          showBorder={true}
          src={props.avatar}
          size="md"
        />
        <VStack spacing={'16px'} align={'start'}>
          <HStack spacing={'16px'}>
            <Text as={'b'}>{props.name}</Text>
            <ReviewStar starCount={5} />
          </HStack>
          <Text>{props.review}</Text>
        </VStack>
      </HStack>
    </div>
  );
};

export type ReviewProps = {
  name: string;
  review: string;
  rating: number;
  avatar: string;
};
