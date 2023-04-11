import * as React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { dayAndMonth } from '../YourLessonsTab/helper';

type Props = {
  start: Date;
  end: Date;
};
export const PaginationMenu: React.FC<Props> = ({ start, end }) => {
  return (
    <HStack width="100%" spacing="30px" justify="center" p="8px">
      <Button leftIcon={<ArrowBackIcon />}>Предыдущий период</Button>
      <Text variant="big-semibold">
        {dayAndMonth(start)} - {dayAndMonth(end)}
      </Text>
      <Button rightIcon={<ArrowForwardIcon />}>Следующий период</Button>
    </HStack>
  );
};
