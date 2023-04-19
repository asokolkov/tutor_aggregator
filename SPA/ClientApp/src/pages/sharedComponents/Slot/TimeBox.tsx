import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from '../../../contexts/SlotContext';
import { VStack, Text } from '@chakra-ui/react';
import { getTimeFromDate } from './_helpers';

export const TimeBox: React.FC = () => {
  const { lesson } = useContext(SlotContext);

  const startTime = getTimeFromDate(lesson.start);
  const endTime = getTimeFromDate(lesson.end);

  return (
    <VStack className="TimeBox" w="66px" p="0 8px" spacing="0" h="100%">
      <Text variant="semibold">{startTime}</Text>
      <Text variant="semibold">|</Text>
      <Text variant="semibold">{endTime}</Text>
    </VStack>
  );
};
