import {
  Avatar,
  Text,
  WrapItem,
  HStack,
  VStack,
  Stack,
  Flex,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
import BottomCardDescription from './components/BottomCardDescription';
import AwardsRow from './components/AwardsRow';
import categoryIcon from '../../assets/images/category-icon.png';
import locationIcon from '../../assets/images/location-icon.png';
import educationIcon from '../../assets/images/educations-icon.png';
import requirementsIcon from '../../assets/images/requirements-icon.png';
import aboutIcon from '../../assets/images/about-icon.png';
import awardsIcon from '../../assets/images/awards-icon.png';
import { ReviewStarWithStats } from './components/ReviewStarWithStats';
import React from 'react';
import { Tutor } from '../../api/tutors';
import { ButtonSection } from './components/ButtonSection';
import { mapCollectionToString } from './components/_helpers';

export const CardInfo = ({ tutor }: CardInfoProps) => {
  const {
    job,
    awards,
    requirements,
    rating,
    educations,
    contacts,
    avatar,
    firstName,
    lastName,
    location,
    description,
    subjects,
  } = tutor;

  const fullName = `${firstName} ${lastName}`;

  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const nameSize = isDesktop ? '3xl' : '2xl';
  const jobSize = isDesktop ? 'xl' : 'md';
  return (
    <>
      <Stack
        w="100%"
        bg={'#ffffff'}
        spacing={'12px'}
        shadow={'lg'}
        borderRadius={'5px'}
        borderWidth={'1px'}
        padding={isDesktop ? '1.5em 3em 1.5em 3em' : '1em 1em 1em 1em'}
      >
        <HStack spacing={'40px'}>
          <WrapItem>
            <Avatar name={fullName} src={avatar} size="2xl" />
          </WrapItem>
          <VStack align={'left'} spacing={'2px'}>
            <Text as="b" fontSize={nameSize}>
              {fullName}
            </Text>
            <Text fontSize={jobSize}>{job}</Text>
          </VStack>
        </HStack>
        <Flex
          justify={isDesktop ? 'space-between' : 'start'}
          direction={'column'}
        >
          <Flex
            direction={'column'}
            justify={'space-between'}
            borderRadius={'8px'}
            borderWidth={'1px'}
            borderColor={'gray'}
            padding={'1em'}
            h={'100%'}
            w={'100%'}
            margin={'0 0 1em 0'}
          >
            <BottomCardDescription
              icon={locationIcon}
              categoryText={isDesktop ? 'Район:' : ''}
              text={`${location?.city} ${location?.district}`}
            />
            <BottomCardDescription
              icon={educationIcon}
              categoryText={isDesktop ? 'Образование:' : ''}
              text={mapCollectionToString(educations.map((e) => e.value))}
            />
            <BottomCardDescription
              icon={categoryIcon}
              categoryText={isDesktop ? 'Предметы:' : ''}
              text={mapCollectionToString(subjects.map((s) => s.description))}
            />
            <Divider colorScheme={'black'} margin={'0 0 8px 0'} />
            <BottomCardDescription
              icon={aboutIcon}
              categoryText={isDesktop ? `О себе:` : ''}
              text={description}
            />
            <AwardsRow
              icon={awardsIcon}
              categoryText={isDesktop ? 'Награды:' : ''}
              awards={awards}
            />
            <BottomCardDescription
              icon={requirementsIcon}
              categoryText={isDesktop ? 'Требования:' : ''}
              text={mapCollectionToString(requirements.map((r) => r.value))}
            />
          </Flex>
          <Flex width={'100%'} direction={isDesktop ? 'row' : 'column'}>
            <Flex
              width={isDesktop ? '50em' : 'auto'}
              align={'center'}
              justify={'center'}
              margin={isDesktop ? 'auto' : '0 0 1em 0'}
            >
              <ReviewStarWithStats rating={rating} />
            </Flex>
            <ButtonSection contacts={contacts} />
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};

type CardInfoProps = {
  tutor: Tutor;
};
