import * as React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

export const TimeBoxCalendar = (props: TimeBoxCalendarProps) => {
  return (
    <Flex h={'32px'} margin={'0 5px 0 0'}>
      <Box
        borderRadius={'5px'}
        bg={'#A1C0A0'}
        w={'60px'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Button
          colorScheme={'green'}
          size={'sm'}
          textAlign={'center'}
          margin={'auto'}
          as={'b'}
        >
          {props.time}
        </Button>
      </Box>
    </Flex>
  );
};

type TimeBoxCalendarProps = {
  time: string;
  isLockedEditor?: boolean;
  isCancellableEditor?: boolean;
  isFreePicker?: boolean;
  isChosenPicker?: boolean;
};
