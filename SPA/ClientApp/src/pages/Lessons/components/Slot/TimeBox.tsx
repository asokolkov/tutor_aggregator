import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from '../../../../contexts/SlotContext';
import { VStack, Text } from '@chakra-ui/react';

export const TimeBox: React.FC = () => {
  const context = useContext(SlotContext);
  const getTimeFromDate = (dateString: string) => {
    const date = new Date(dateString);
    return { hours: date.getHours(), minutes: date.getMinutes() };
  };
  const startTime = getTimeFromDate(context.startDate);
  const endTime = getTimeFromDate(context.endDate);

  return (
    <VStack className="TimeBox" w="66px" p="0 8px" spacing="0" h="100%">
      <Text variant="semibold">
        {startTime.hours}:{startTime.minutes}
      </Text>
      <Text variant="semibold">|</Text>
      <Text variant="semibold">
        {endTime.hours}:{endTime.minutes}
      </Text>
    </VStack>
  );
};
