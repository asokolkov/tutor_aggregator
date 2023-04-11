import * as React from 'react';
import { Flex, VStack, Text } from '@chakra-ui/react';
import {
  dayAndMonth,
  russianDayOfTheWeekByIndex,
} from '../../YourLessonsTab/helper';

type Props = {
  date: Date;
  bookedCount: number;
  totalCount: number;
};
export const Title: React.FC<Props> = ({ date, bookedCount, totalCount }) => {
  const dayOfTheWeek = () => russianDayOfTheWeekByIndex(date);

  return (
    <Flex justify={'space-between'} align={'center'} w="100%">
      <VStack spacing="0">
        <Text variant="big-semibold">{dayAndMonth(date)}</Text>
        <Text>{dayOfTheWeek()}</Text>
      </VStack>
      <Text>
        {totalCount ? `Занято: ${bookedCount} / ${totalCount}` : 'Нет слотов'}
      </Text>
    </Flex>
  );
};
