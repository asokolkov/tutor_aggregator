import {
  Avatar,
  Heading,
  VStack,
  Button,
  TagLabel,
  Tag,
  TagLeftIcon,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RatingStars } from '../../../components/ReviewStars/RatingStars';
import { MdSchool, MdBusinessCenter } from 'react-icons/md';
import { getTutorCardByIdPath } from '../../../routes/routes';
import { V1TutorDto } from '../../../api/models';
import { getFullName } from '../../../utils/names';

const SearchCard: React.FC<SearchCardInfoProps> = ({ tutor }) => {
  const { firstName, lastName, educations, job, rating, id } = tutor;
  const fullName = getFullName(firstName, lastName);

  const navigate = useNavigate();
  return (
    <VStack
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

        <VStack align="flex-start" w="100%" spacing={'0'}>
          {educations.length >= 1 && (
            <Tag
              size={'lg'}
              variant="subtle"
              colorScheme="white-alpha"
              padding={'0'}
            >
              <TagLeftIcon boxSize="20px" as={MdSchool} />
              <TagLabel>{educations.map((e) => e.value).join(', ')}</TagLabel>
            </Tag>
          )}
          {job && (
            <Tag
              size={'lg'}
              variant="subtle"
              colorScheme="white-alpha"
              padding={'0'}
            >
              <TagLeftIcon boxSize="20px" as={MdBusinessCenter} />
              <TagLabel>{job}</TagLabel>
            </Tag>
          )}
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
