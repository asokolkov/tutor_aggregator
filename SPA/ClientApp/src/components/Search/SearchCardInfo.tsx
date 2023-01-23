import { Avatar, Heading, VStack, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TUTORS_PATH } from '../../route-paths';
import { ReviewStarWithStats } from '../TutorCard/ReviewStarWithStats';
import categoryIcon from '../../img/category-icon.png';
import jobIcon from '../../img/job-icon.png';
import SearchCardInfoRow from './SearchCardInfoRow';
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
      spacing={'8px'}
    >
      <Avatar name={name} border={'0px'} src={imgSrc} size="2xl" />
      <Flex h={'auto'} direction={'column'}>
        <Heading as="h4" size="lg" textAlign={'center'} margin={'0 0 12px 0'}>
          {name}
        </Heading>
        <SearchCardInfoRow
          icon={categoryIcon}
          text={education.map((e) => e.description).join(', ')}
          categoryText={''}
        />
        <SearchCardInfoRow icon={jobIcon} text={job} categoryText={''} />
      </Flex>
      <VStack spacing={'4px'} padding={'0 0 16px 0'}>
        <ReviewStarWithStats rating={rating} />
      </VStack>
      <Link to={`${TUTORS_PATH}/${id}`} style={{ width: '100%' }}>
        <Button colorScheme={'teal'} h={'40px'} w={'100%'}>
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
  rating: number;
};
