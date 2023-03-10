import * as React from 'react';
import {
  Flex,
  Text,
  Spacer,
  Box,
  Button,
  useBreakpointValue,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, To } from 'react-router-dom';
import CancelLessonModal from '../modals/CancelLessonModal';
import NewReviewModal from '../modals/NewReviewModal';

const monthNames = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];
const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

export const LessonsBoxRow = (props: LessonsBoxProps) => {
  const {
    isOpen: isOpenCancel,
    onOpen: OnOpenCancel,
    onClose: onCloseCancel,
  } = useDisclosure();
  const {
    isOpen: isOpenReview,
    onOpen: OnOpenReview,
    onClose: onCloseReview,
  } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const date = new Date(props.datetime);
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const month =
    date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  return (
    <React.Fragment>
      <NewReviewModal isOpen={isOpenReview} onClose={onCloseReview} />
      <CancelLessonModal isOpen={isOpenCancel} onClose={onCloseCancel} />
      <Box
        w={'100%'}
        h={'50px'}
        borderRadius={'5px'}
        borderWidth={'1px'}
        bg="white"
        margin={'0 0 0.5em 0'}
      >
        <Flex h={'100%'} padding={'0 1em 0 1em'}>
          <Flex
            align={'center'}
            maxWidth={'30%'}
            justify={'center'}
            direction={'column'}
          >
            <Text as={'b'}>
              {isDesktop
                ? `${date.getDate()} ${monthNames[date.getMonth()]}, ${
                    daysOfWeek[date.getDay()]
                  }. ${hours}:${minutes}`
                : `${date.getDate()}.${month}.${date.getFullYear() - 2000}`}
            </Text>
            {!isDesktop && (
              <Text w={'100%'} textAlign={'right'}>
                {hours}:{minutes}
              </Text>
            )}
          </Flex>
          <Divider
            orientation="vertical"
            color={'gray'}
            margin={'0 1em 0 1em'}
          />
          <Flex align={'center'} width={'20em'}>
            {props.isLink ? (
              <Link to={props.linkTo}>
                <Text as={'u'}>{props.personName}</Text>
              </Link>
            ) : (
              <Text>{props.personName}</Text>
            )}
          </Flex>
          <Spacer />
          <Flex align={'center'} maxWidth={'30%'} margin={'0 0 0 1em'}>
            {props.isRatable && (
              <Button colorScheme="green" size={'sm'} onClick={OnOpenReview}>
                Оценить
              </Button>
            )}
            {props.isCancellable && (
              <Button colorScheme="red" size={'sm'} onClick={OnOpenCancel}>
                Отменить
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

type LessonsBoxProps = {
  personName: string;
  isLink: boolean;
  // Параметр to в Link
  linkTo?: To;
  datetime: number;
  // isCancellable — будет ли кнопка «Отменить» в строке
  isCancellable: boolean;
  isRatable: boolean;
};
