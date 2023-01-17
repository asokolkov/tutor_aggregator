import { Avatar, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TUTORS_PATH } from '../../route-paths';
import { ReviewStarWithStats } from '../TutorCard/ReviewStarWithStats';
import categoryIcon from '../../img/category-icon.png';
import BottomProfileDescription from '../TutorCard/BottomCardDescription';
import { Education } from '../../apis/_share';

const SearchCardInfo: React.FC<SearchCardInfoProps> = ({
  id,
  name,
  imgSrc,
  education,
  job,
  rating,
}) => {
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
        <BottomProfileDescription
          icon={categoryIcon}
          text={education.map((e) => e.description).join(', ')}
        />
        <BottomProfileDescription icon={categoryIcon} text={job} />
      </VStack>
      <ReviewStarWithStats rating={rating} />
      <Link to={`${TUTORS_PATH}/${id}`}>
        <Button colorScheme={'teal'} w={'100%'} h={'40px'}>
          Открыть профиль
        </Button>
      </Link>
    </VStack>
  );
};

export default SearchCardInfo;

export type SearchCardInfoProps = {
  id: string;
  name: string;
  imgSrc: string;
  education: Education[];
  job: string;
  rating: {
    count: number;
    average: number;
  };
};
