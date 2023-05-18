import { Avatar, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RatingStars } from '../../sharedComponents/ReviewStars/RatingStars';
import categoryIcon from '../../../assets/images/category-icon.png';
import jobIcon from '../../../assets/images/job-icon.png';
import InfoWithIcon from '../../sharedComponents/InfoWithIcon';
import { getTutorCardByIdPath } from '../../../routes/routes';
import { Tutor } from '../../../api/tutors';

const SearchCardInfo: React.FC<SearchCardInfoProps> = ({ tutor }) => {
  const { avatar, firstName, lastName, educations, job, rating, id } = tutor;
  const fullName = `${firstName} ${lastName}`;

  const navigate = useNavigate();
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
          <InfoWithIcon
            icon={categoryIcon}
            text={educations.map((e) => e.value).join(', ')}
            categoryText={''}
          />
          <InfoWithIcon icon={jobIcon} text={job} categoryText={''} />
        </VStack>
      </VStack>

      <Button
        variant="green"
        h="48px"
        w="100%"
        onClick={() => navigate(getTutorCardByIdPath(id))}
      >
        Посмотреть профиль
      </Button>
    </VStack>
  );
};

export default SearchCardInfo;

export type SearchCardInfoProps = {
  tutor: Tutor;
};
