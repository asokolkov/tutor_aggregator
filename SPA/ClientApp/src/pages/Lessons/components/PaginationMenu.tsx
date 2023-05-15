import * as React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { dayAndMonth } from '../../sharedComponents/Slot/_helpers';

type Props = {
  start: Date;
  end: Date;
  onDateChange: (isForward: boolean) => void;
};
export const PaginationMenu: React.FC<Props> = ({
  start,
  end,
  onDateChange,
}) => {
  const isOneDay = start.getDate() === end.getDate();
  return (
    <HStack width="100%" spacing="30px" justify="center" p="8px">
      <Button leftIcon={<ArrowBackIcon />} onClick={() => onDateChange(false)}>
        {isOneDay ? 'Предыдущий день' : 'Предыдущий период'}
      </Button>
      <Text variant="big-semibold">
        {isOneDay
          ? dayAndMonth(start)
          : `${dayAndMonth(start)} - ${dayAndMonth(end)}`}
      </Text>
      <Button
        rightIcon={<ArrowForwardIcon />}
        onClick={() => onDateChange(true)}
      >
        {isOneDay ? 'Следующий день' : 'Следующий период'}
      </Button>
    </HStack>
  );
};
