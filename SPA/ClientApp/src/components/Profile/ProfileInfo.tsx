import {
  Avatar,
  Container,
  Text,
  WrapItem,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';

export const ProfileInfo = (props: ProfileInfoProps) => {
  return (
    <Container maxW="90%" bg={'white'}>
      <HStack padding={'8px'}>
        <WrapItem>
          <Avatar
            name={props.name}
            showBorder={true}
            src={props.avatar}
            size="2xl"
          />
        </WrapItem>
        <VStack align={'left'}>
          <Text as="b" fontSize="2xl">
            {props.name}
          </Text>
          <Text fontSize="m">{props.description}</Text>
        </VStack>
      </HStack>
      <VStack align={'left'} padding={'8px'}>
        <Text fontSize="m">{props.occupation}</Text>
        <Text fontSize="m">{props.location}</Text>
        <HStack>
          <ReviewStar starCount={5} />
          <Text fontSize="m">
            {props.rating.average} на основе {props.rating.count} отзывов
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
};

type ProfileInfoProps = {
  name: string;
  description: string;
  location: string;
  occupation: string;
  avatar: string;
  rating: {
    count: number;
    average: number;
  };
};
