import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from './contexts/SlotContext';
import { VStack, Text } from '@chakra-ui/react';
import { getTimeFromDate } from '../../utils/datetime';

export const TimeBox: React.FC = () => {
  const { startDate, endDate } = useContext(SlotContext);
  const startTime = startDate ? getTimeFromDate(startDate) : '??:??';
  const endTime = endDate ? getTimeFromDate(endDate) : '??:??';

  return (
    <VStack
      w="66px"
      p="0 8px"
      spacing="0"
      h="100%"
      borderRightWidth="2px"
      borderRightColor="blue.200"
    >
      <Text variant="semibold">{startTime}</Text>
      <Text variant="semibold">|</Text>
      <Text variant="semibold">{endTime}</Text>
    </VStack>
  );
};
