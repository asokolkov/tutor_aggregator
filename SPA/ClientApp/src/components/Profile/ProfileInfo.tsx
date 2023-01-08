import {
  Avatar,
  Text,
  WrapItem,
  HStack,
  VStack,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ReviewStar } from './ReviewStar';
import BottomProfileDescription from './BottomProfileDescription';
import categoryIcon from '../../img/category-icon.png';
import locationIcon from '../../img/location-icon.png';

export const ProfileInfo = (props: ProfileInfoProps) => {
  return (
    <Stack
      w="100%"
      bg={'white'}
      spacing={'24px'}
      borderWidth={'1px'}
      shadow={'md'}
      padding={'24px'}
    >
      <HStack spacing={'40px'}>
        <WrapItem>
          <Avatar
            name={props.name}
            showBorder={true}
            src={props.avatar}
            size="2xl"
          />
        </WrapItem>
        <VStack align={'left'} spacing={'8px'}>
          <Text as="b" fontSize="4xl">
            {props.name}
          </Text>
          <Text fontSize="m">{props.description}</Text>
        </VStack>
      </HStack>
      <HStack justify={'space-between'}>
        <VStack align={'left'} padding={'8px'}>
          <BottomProfileDescription
            icon={categoryIcon}
            text={props.occupation}
          />
          <BottomProfileDescription icon={locationIcon} text={props.location} />
          <HStack spacing={'32px'}>
            <ReviewStar starCount={5} />
            <Text fontSize="m">
              {props.rating.average} на основе {props.rating.count} отзывов
            </Text>
          </HStack>
        </VStack>
        <VStack spacing={'16px'}>
          <Button size={'lg'} colorScheme={'blue'} width={'256px'}>
            Написать сообщение
          </Button>
          <Button size={'lg'} colorScheme={'blue'} width={'256px'}>
            Записаться на занятие
          </Button>
        </VStack>
      </HStack>
    </Stack>
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
