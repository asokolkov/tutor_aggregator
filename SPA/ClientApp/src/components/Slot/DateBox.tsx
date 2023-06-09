import * as React from 'react';
import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { SlotContext } from './contexts/SlotContext';
import { Color } from '../../assets/theme/themeEnum';
import { SlotVariant } from './Slot';
import {
  getDayAndMonthFromDate,
  russianDayOfTheWeek,
} from '../../utils/datetime';

export const DateBox: React.FC = () => {
  const { startDate, variant } = useContext(SlotContext);
  let color: Color;
  switch (variant) {
    case SlotVariant.activeCloseList:
      color = Color.green;
      break;
    case SlotVariant.canceledList:
      color = Color.red;
      break;
    default:
      color = Color.blue200;
  }
  return (
    <Flex w="100%" bg={color} h="32px" align="center">
      <Text m="0 8px" color="white" variant="regular.bold">
        {`${getDayAndMonthFromDate(startDate)}, ${russianDayOfTheWeek(
          startDate
        )}`}
      </Text>
    </Flex>
  );
};
