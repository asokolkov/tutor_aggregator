import {
  Avatar,
  Text,
  WrapItem,
  HStack,
  VStack,
  Button,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import BottomCardDescription from './BottomCardDescription';
import categoryIcon from '../../img/category-icon.png';
import locationIcon from '../../img/location-icon.png';
import educationIcon from '../../img/educations-icon.png';
import requirementsIcon from '../../img/requirements-icon.png';
import { Contact, Education } from '../../apis/_share';
import ContactsInfoModal from './ContactsInfoModal';
import { ReviewStarWithStats } from './ReviewStarWithStats';

export const CardInfo = (props: CardInfoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ContactsInfoModal
        isOpen={isOpen}
        onClose={onClose}
        contacts={props.contacts}
      />
      <Stack
        w="100%"
        bg={'white'}
        spacing={'24px'}
        borderWidth={'1px'}
        shadow={'md'}
        padding={'24px'}
      >
        <HStack spacing={'40px'}>
          <WrapItem>
            <Avatar
              name={props.name}
              showBorder={true}
              src={props.avatar}
              size="2xl"
            />
          </WrapItem>
          <VStack align={'left'} spacing={'2px'}>
            <Text as="b" fontSize="4xl">
              {props.name}
            </Text>
            <Text fontSize="xl">{props.job}</Text>
          </VStack>
        </HStack>
        <HStack justify={'space-between'} alignItems={'end'}>
          <VStack align={'left'} padding={'8px'}>
            <BottomCardDescription icon={locationIcon} text={props.location} />
            <BottomCardDescription
              icon={educationIcon}
              text={props.educations[0].description}
            />
            <BottomCardDescription icon={categoryIcon} text={props.subjects} />
            <BottomCardDescription
              icon={requirementsIcon}
              text={props.requirements}
            />
            <HStack>
              <ReviewStarWithStats rating={props.rating} />
            </HStack>
          </VStack>
          <VStack spacing={'16px'}>
            <Button
              size={'lg'}
              colorScheme={'blue'}
              width={'256px'}
              onClick={onOpen}
            >
              Показать контакты
            </Button>
            <Button size={'lg'} colorScheme={'green'} width={'256px'}>
              Записаться на занятие
            </Button>
          </VStack>
        </HStack>
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
  contacts: Contact[];
  rating: number;
};
