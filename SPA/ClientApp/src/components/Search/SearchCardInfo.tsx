import { Avatar, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { ReviewStarWithStats } from '../Profile/ReviewStarWithStats';
import categoryIcon from '../../img/category-icon.png';
import BottomProfileDescription from '../Profile/BottomProfileDescription';

const SearchCardInfo = (props: SearchCardInfoProps) => {
  const { name, imgSrc, education, occupation } = props;
  return (
    <VStack
      w={'auto'}
      minW={'390px'}
      borderWidth={'1px'}
      shadow={'md'}
      padding={'16px'}
      spacing={'16px'}
    >
      <Avatar name={name} border={'0px'} src={imgSrc} size="2xl" />
      <VStack h={'100px'} spacing={'8px'}>
        <Heading as="h4" size="lg" textAlign={'center'}>
          {name}
        </Heading>
        <BottomProfileDescription icon={categoryIcon} text={education} />
        <BottomProfileDescription icon={categoryIcon} text={occupation} />
      </VStack>
      <ReviewStarWithStats rating={props.rating} />
      <Button colorScheme={'teal'} w={'100%'} h={'40px'}>
        Открыть профиль
      </Button>
    </VStack>
  );
};

export default SearchCardInfo;

export type SearchCardInfoProps = {
  name: string;
  imgSrc: string;
  education: string;
  occupation: string;
  rating: {
    count: number;
    average: number;
  };
};
