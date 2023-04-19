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
  return (
    <HStack width="100%" spacing="30px" justify="center" p="8px">
      <Button leftIcon={<ArrowBackIcon />} onClick={() => onDateChange(false)}>
        Предыдущий период
      </Button>
      <Text variant="big-semibold">
        {dayAndMonth(start)} - {dayAndMonth(end)}
      </Text>
      <Button
        rightIcon={<ArrowForwardIcon />}
        onClick={() => onDateChange(true)}
      >
        Следующий период
      </Button>
    </HStack>
  );
};
