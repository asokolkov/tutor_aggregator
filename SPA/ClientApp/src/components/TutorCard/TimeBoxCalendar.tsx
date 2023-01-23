import * as React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

export const TimeBoxCalendar = (props: TimeBoxCalendarProps) => {
  return (
    <Flex h={'32px'} margin={'0 5px 5px 0'}>
      <Box
        borderRadius={'5px'}
        w={'60px'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Button
          colorScheme={props.isUnavailable ? 'gray' : 'twitter'}
          bg={props.isUnavailable ? '#a1a0a0' : '#A0AEC0'}
          size={'sm'}
          textAlign={'center'}
          margin={'auto'}
          as={'b'}
          isDisabled={props.isUnavailable}
          _hover={{
            bg: '#6eaeb6',
          }}
          _active={{
            bg: '#339b2e',
          }}
        >
          {props.time}
        </Button>
      </Box>
    </Flex>
  );
};

type TimeBoxCalendarProps = {
  time: string;
  isUnavailable: boolean;
  isChosen?: boolean;
};
