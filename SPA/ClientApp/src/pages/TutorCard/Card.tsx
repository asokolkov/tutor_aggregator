import { Avatar, Text, HStack, VStack, Box } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { ButtonSection } from './components/ButtonSection';
import { CardInfoContext } from './contexts/CardInfoContext';
import InfoWithIcon from '../../components/InfoWithIcon';
import { BiMap } from 'react-icons/bi';
import { FaUserGraduate } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { V1ContactsDto } from '../../api/models';

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
              Icon={BiMap}
              categoryText={'Район'}
              text={props.location}
            />
            <InfoWithIcon
              Icon={FaUserGraduate}
              categoryText={'Оразование'}
              text={props.education}
            />
            <InfoWithIcon
              Icon={ImBooks}
              categoryText={'Предметы'}
              text={props.subjects}
            />
            <InfoWithIcon
              Icon={HiOutlineClipboardCheck}
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
  contacts: V1ContactsDto[];
  description: string;
  location: string;
  subjects: string;
  education: string;
  requirements: string;
};
