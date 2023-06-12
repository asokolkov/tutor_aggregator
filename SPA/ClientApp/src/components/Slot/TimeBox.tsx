import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from './contexts/SlotContext';
import { Flex, Text } from '@chakra-ui/react';
import { getTimeFromDate } from '../../utils/datetime';

export const TimeBox: React.FC = () => {
  const { startDate, endDate } = useContext(SlotContext);
  const startTime = startDate ? getTimeFromDate(startDate) : '??:??';
  const endTime = endDate ? getTimeFromDate(endDate) : '??:??';

  return (
    <Flex
      w="70px"
      p="8px"
      gap="0"
      h="100%"
      minH={'100%'}
      direction={'column'}
      align={'center'}
    >
      <Text variant="regular.bold" color={'white'}>
        {startTime}
      </Text>
      <Text color={'white'}>|</Text>
      <Text variant="regular.bold" color={'white'}>
        {endTime}
      </Text>
    </Flex>
  );
};
