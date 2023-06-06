import { Avatar, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RatingStars } from '../../../components/ReviewStars/RatingStars';
import InfoWithIcon from '../../../components/InfoWithIcon';
import { getTutorCardByIdPath } from '../../../routes/routes';
import { V1TutorDto } from '../../../api/models';
import { getFullName } from '../../../utils/names';
import { FaUserGraduate } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

const SearchCard: React.FC<SearchCardInfoProps> = ({ tutor }) => {
  const { firstName, lastName, educations, job, rating, id } = tutor;
  const fullName = getFullName(firstName, lastName);

  const navigate = useNavigate();
  return (
    <VStack
      minWidth="300px"
      flexGrow={'1'}
      borderWidth="2px"
      borderColor="blue.200"
      borderRadius="10px"
      padding="20px"
      spacing="20px"
      justify="space-between"
    >
      <VStack spacing="20px" w="100%">
        <VStack spacing="10px">
          <Avatar name={fullName} border="0px" size="2xl" />
          <VStack spacing="5px">
            <Heading variant="regular.h2" as="h2">
              {fullName}
            </Heading>
            <RatingStars rating={rating} />
          </VStack>
        </VStack>

        <VStack spacing="5px" align="flex-start" w="100%">
          <InfoWithIcon
            icon={<FaUserGraduate />}
            text={educations.map((e) => e.value).join(', ')}
            categoryText={''}
          />
          <InfoWithIcon icon={<MdOutlineWork />} text={job} categoryText={''} />
        </VStack>
      </VStack>

      <Button
        variant="green"
        size={'md'}
        w="100%"
        onClick={() => navigate(getTutorCardByIdPath(id))}
      >
        Посмотреть профиль
      </Button>
    </VStack>
  );
};

export default SearchCard;

export type SearchCardInfoProps = {
  tutor: V1TutorDto;
};
