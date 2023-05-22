import { Avatar, Text, HStack, VStack, Box } from '@chakra-ui/react';
import categoryIcon from '../../assets/images/category-icon.png';
import locationIcon from '../../assets/images/location-icon.png';
import educationIcon from '../../assets/images/educations-icon.png';
import requirementsIcon from '../../assets/images/requirements-icon.png';
import React, { useMemo } from 'react';
import { ButtonSection } from './components/ButtonSection';
import { CardInfoContext } from '../../contexts/CardInfoContext';
import InfoWithIcon from '../sharedComponents/InfoWithIcon';

export const Card: React.FC<CardInfoProps> = (props) => {
  const providerValue = useMemo(() => ({ ...props }), [props]);
  return (
    <CardInfoContext.Provider value={providerValue}>
      <VStack spacing="20px" padding="10px 0" w="100%">
        <HStack spacing="0" w="100%">
          <Box p="10px 10px 10px 0px">
            <Avatar name={props.fullName} size="2xl" />
          </Box>
          <VStack spacing="8px" align="flex-start" p="10px 0 10px 30px">
            <Text variant="regular.h1">{props.fullName}</Text>
            <Text variant="regular.h3">{props.description}</Text>
          </VStack>
        </HStack>
        <VStack spacing="20px" w="100%">
          <VStack spacing="16px" align="flex-start" w="100%">
            <InfoWithIcon
              icon={locationIcon}
              categoryText={'Район'}
              text={props.location}
            />
            <InfoWithIcon
              icon={educationIcon}
              categoryText={'Оразование'}
              text={props.education}
            />
            <InfoWithIcon
              icon={categoryIcon}
              categoryText={'Предметы'}
              text={props.subjects}
            />
            <InfoWithIcon
              icon={requirementsIcon}
              categoryText={'Требования'}
              text={props.requirements}
            />
          </VStack>
          <ButtonSection />
        </VStack>
      </VStack>
    </CardInfoContext.Provider>
  );
};

export type CardInfoProps = {
  id: string;
  fullName: string;
  contacts: string;
  description: string;
  location: string;
  subjects: string;
  education: string;
  requirements: string;
};
