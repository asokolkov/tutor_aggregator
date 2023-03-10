import {
  Avatar,
  Text,
  WrapItem,
  HStack,
  VStack,
  Button,
  Stack,
  Flex,
  useDisclosure,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
import BottomCardDescription from './components/BottomCardDescription';
import AwardsRow from './components/AwardsRow';
import categoryIcon from '../../img/category-icon.png';
import locationIcon from '../../img/location-icon.png';
import educationIcon from '../../img/educations-icon.png';
import requirementsIcon from '../../img/requirements-icon.png';
import ageIcon from '../../img/age-icon.png';
import aboutIcon from '../../img/about-icon.png';
import awardsIcon from '../../img/awards-icon.png';
import { Award, Education } from '../../apis/_share';
import RegisterModal from './modal/RegisterModal';
import ContactsPopoverButton from './components/ContactsPopoverButton';
import { ReviewStarWithStats } from './components/ReviewStarWithStats';
import React from 'react';

function getTextToAge(age: number): string {
  const lastDigit = age % 10;
  const texts = [
    'лет',
    'год',
    'года',
    'года',
    'года',
    'лет',
    'лет',
    'лет',
    'лет',
    'лет',
  ];
  return texts[lastDigit];
}

export const CardInfo = (props: CardInfoProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();
  const nameSize = isDesktop ? '3xl' : '2xl';
  const jobSize = isDesktop ? 'xl' : 'md';
  return (
    <>
      <RegisterModal isOpen={isOpenRegister} onClose={onCloseRegister} />
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
            <Avatar name={props.name} src={props.avatar} size="2xl" />
          </WrapItem>
          <VStack align={'left'} spacing={'2px'}>
            <Text as="b" fontSize={nameSize}>
              {props.name}
            </Text>
            <Text fontSize={jobSize}>{props.job}</Text>
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
              text={props.location}
            />
            <BottomCardDescription
              icon={educationIcon}
              categoryText={isDesktop ? 'Образование:' : ''}
              text={props.educations[0].description}
            />
            <BottomCardDescription
              icon={categoryIcon}
              categoryText={isDesktop ? 'Предметы:' : ''}
              text={props.subjects}
            />
            <BottomCardDescription
              icon={ageIcon}
              categoryText={isDesktop ? 'Возраст:' : ''}
              text={`${props.age.toString()} ${getTextToAge(props.age)}`}
            />
            <Divider colorScheme={'black'} margin={'0 0 8px 0'} />
            <BottomCardDescription
              icon={aboutIcon}
              categoryText={isDesktop ? `О себе:` : ''}
              text={props.about}
            />
            <AwardsRow
              icon={awardsIcon}
              categoryText={isDesktop ? 'Награды:' : ''}
              awards={props.awards}
            />
            <BottomCardDescription
              icon={requirementsIcon}
              categoryText={isDesktop ? 'Требования:' : ''}
              text={props.requirements}
            />
          </Flex>
          <Flex width={'100%'} direction={isDesktop ? 'row' : 'column'}>
            <Flex
              width={isDesktop ? '50em' : 'auto'}
              align={'center'}
              justify={'center'}
              margin={isDesktop ? 'auto' : '0 0 1em 0'}
            >
              <ReviewStarWithStats rating={props.rating} />
            </Flex>
            <ContactsPopoverButton contacts={props.contacts} />
            <Button
              size={'md'}
              colorScheme={'green'}
              width={'100%'}
              onClick={onOpenRegister}
              margin={isDesktop ? '0 0 0 1em' : '8px 0 0 0'}
            >
              Записаться на занятие
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};

type CardInfoProps = {
  name: string;
  job: string;
  subjects: string;
  educations: Education[];
  location: string;
  avatar: string;
  requirements: string;
  awards: Award[];
  contacts: string;
  rating: number;
  age: number;
  about: string;
};
