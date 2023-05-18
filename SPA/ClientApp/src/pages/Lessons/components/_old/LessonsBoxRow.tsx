import * as React from 'react';
import {
  Flex,
  Text,
  Spacer,
  Box,
  Button,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
import { Link, To } from 'react-router-dom';

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
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const date = new Date(props.datetime);
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const month =
    date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  // @ts-ignore
  return (
    <>
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
              <Button colorScheme="green" size={'sm'}>
                Оценить
              </Button>
            )}
            {props.isCancellable && (
              <Button colorScheme="red" size={'sm'}>
                Отменить
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
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
