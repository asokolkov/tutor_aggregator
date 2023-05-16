import { Avatar, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { RatingStars } from '../../sharedComponents/ReviewStars/RatingStars';
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
      w="310px"
      borderWidth="2px"
      borderColor="blue.200"
      borderRadius="10px"
      padding={'20px'}
      spacing={'20px'}
    >
      <VStack spacing="20px" w="100%">
        <VStack spacing="10px">
          <Avatar name={fullName} src={avatar} border="0px" size="2xl" />
          <VStack spacing="5px">
            <Heading variant="regular.h2" as="h2">
              {fullName}
            </Heading>
            <RatingStars rating={rating} />
          </VStack>
        </VStack>

        <VStack spacing="5px" align="flex-start" w="100%">
          <SearchCardInfoRow
            icon={categoryIcon}
            text={educations.map((e) => e.value).join(', ')}
            categoryText={''}
          />
          <SearchCardInfoRow icon={jobIcon} text={job} categoryText={''} />
        </VStack>
      </VStack>

      <Link to={getTutorCardByIdPath(id)} style={{ width: '100%' }}>
        <Button variant="green" h="48px" w="100%">
          Посмотреть профиль
        </Button>
      </Link>
    </VStack>
  );
};

export default SearchCardInfo;

export type SearchCardInfoProps = {
  tutor: Tutor;
};
