import { Avatar, Heading, VStack, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReviewStarWithStats } from '../../TutorCard/components/ReviewStarWithStats';
import categoryIcon from '../../../assets/images/category-icon.png';
import jobIcon from '../../../assets/images/job-icon.png';
import SearchCardInfoRow from './SearchCardInfoRow';
import { getTutorCardByIdPath } from '../../../routes/routes';
import { Tutor } from '../../../api/tutors';

const SearchCardInfo: React.FC<SearchCardInfoProps> = ({ tutor }) => {
  const { avatar, firstName, lastName, educations, job, rating, id } = tutor;
  const fullName = `${firstName} ${lastName}`;
  return (
    <VStack
      w={'auto'}
      minW={'390px'}
      borderWidth={'1px'}
      shadow={'md'}
      padding={'16px'}
      spacing={'8px'}
    >
      <Avatar name={fullName} border={'0px'} src={avatar} size="2xl" />
      <Flex h={'auto'} direction={'column'}>
        <Heading as="h4" size="lg" textAlign={'center'} margin={'0 0 12px 0'}>
          {fullName}
        </Heading>
        <SearchCardInfoRow
          icon={categoryIcon}
          text={educations.map((e) => e.value).join(', ')}
          categoryText={''}
        />
        <SearchCardInfoRow icon={jobIcon} text={job} categoryText={''} />
      </Flex>
      <VStack spacing={'4px'} padding={'0 0 16px 0'}>
        <ReviewStarWithStats rating={rating} />
      </VStack>
      <Link to={getTutorCardByIdPath(id)} style={{ width: '100%' }}>
        <Button colorScheme={'teal'} h={'40px'} w={'100%'}>
          Открыть профиль
        </Button>
      </Link>
    </VStack>
  );
};

export default SearchCardInfo;

export type SearchCardInfoProps = {
  tutor: Tutor;
};
