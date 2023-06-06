import {
  Avatar,
  Text,
  VStack,
  Box,
  Flex,
  Divider,
  useBreakpointValue,
  SkeletonCircle,
  Skeleton,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { ButtonSection } from './components/ButtonSection';
import { CardInfoContext } from './contexts/CardInfoContext';
import InfoWithIcon from '../../components/InfoWithIcon';
import {
  MdLocationOn,
  MdBookmark,
  MdSchool,
  MdWork,
  MdAssignment,
} from 'react-icons/md';
import { V1ContactsDto } from '../../api/models';

export const Card: React.FC<CardInfoProps> = (props) => {
  const providerValue = useMemo(() => ({ ...props }), [props]);
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );
  const { isLoading } = props;

  return (
    <CardInfoContext.Provider value={providerValue}>
      <Flex
        direction={isLargerThanTablet ? 'row' : 'column'}
        align={'center'}
        margin={'0 -5vw 0 -5vw'}
        bg={'custom.blue.100'}
        width={'calc(100% + 10vw)'}
      >
        <Box
          bg={isLargerThanTablet ? 'custom.blue.200' : 'custom.blue.100'}
          height={'100%'}
          alignItems={'center'}
          padding={
            isLargerThanTablet ? '10px 10px 10px 5vw' : '20px 10px 0 10px'
          }
        >
          {isLoading ? (
            <SkeletonCircle size="128px" />
          ) : (
            <Avatar name={props.fullName} size={'2xl'} />
          )}
        </Box>
        <VStack
          spacing="8px"
          align="flex-start"
          p={isLargerThanTablet ? '10px 5vw 10px 30px' : '10px 10px 20px 10px'}
        >
          <Skeleton isLoaded={!isLoading}>
            <Text
              variant="regular.h1"
              textAlign={isLargerThanTablet ? 'left' : 'center'}
              width={'100%'}
            >
              {props.fullName}
            </Text>
          </Skeleton>

          <Skeleton isLoaded={!isLoading}>
            <Text
              variant="regular.h3"
              textAlign={isLargerThanTablet ? 'left' : 'center'}
              width={'100%'}
            >
              {props.description}
            </Text>
          </Skeleton>
        </VStack>
      </Flex>
      <VStack spacing="20px" padding="20px 0" w="100%">
        <VStack spacing="20px" w="100%">
          <VStack
            spacing={isLargerThanTablet ? '8px' : '12px'}
            align="flex-start"
            w="100%"
          >
            <InfoWithIcon
              Icon={MdLocationOn}
              categoryText={'Район'}
              text={props.location}
            />

            <InfoWithIcon
              Icon={MdBookmark}
              categoryText={'Предметы'}
              text={props.subjects}
            />

            <Divider borderColor={'custom.blue.100'}></Divider>
            <InfoWithIcon
              Icon={MdSchool}
              categoryText={'Образование'}
              text={props.education}
            />

            <InfoWithIcon
              Icon={MdWork}
              categoryText={'Работа'}
              text={props.education}
            />

            <InfoWithIcon
              Icon={MdAssignment}
              categoryText={'Требования'}
              text={props.requirements}
            />
            <ButtonSection />
          </VStack>
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
  isLoading: boolean;
};
