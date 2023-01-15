import { Avatar, Heading, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { ReviewStar } from '../TutorCard/ReviewStar';

const SearchCardInfo = (props: SearchCardInfoProps) => {
  const { name, imgSrc, description } = props;
  return (
    <VStack
      w={'100%px'}
      minW={'350px'}
      borderWidth={'1px'}
      shadow={'md'}
      padding={'16px'}
      spacing={'16px'}
    >
      <Avatar name={name} showBorder={true} src={imgSrc} size="2xl" />
      <VStack h={'200px'} spacing={'8px'}>
        <Heading as="h4" size="xl" textAlign={'center'}>
          {name}
        </Heading>
        <Text style={{ overflow: 'hidden' }} textAlign={'center'}>
          {description}
        </Text>
      </VStack>
      <ReviewStar starCount={5} />
      <Button colorScheme={'teal'} w={'100%'}>
        Посмотреть профиль
      </Button>
    </VStack>
  );
};

export default SearchCardInfo;

export type SearchCardInfoProps = {
  name: string;
  imgSrc: string;
  description: string;
  rating: {
    count: number;
    average: number;
  };
};
