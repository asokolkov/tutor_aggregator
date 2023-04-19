import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { TimeBoxCalendar } from './TimeBoxCalendar';

export const TimeBoxRow = (props: TimeBoxRowProps) => {
  const row = props.slots.map((slot) => (
    <TimeBoxCalendar time={slot.time} isUnavailable={!slot.isAvailable} />
  ));
  return (
    <Flex
      width={'100%'}
      align={'center'}
      direction={'row'}
      margin={'0 0 0.6em 0'}
      justify={'left'}
    >
      <Flex>
        <Heading size={'sm'} width={'50px'}>
          {props.rowLabel}
        </Heading>
      </Flex>
      <Flex wrap={'wrap'}>{row}</Flex>
    </Flex>
  );
};

type TimeBoxRowProps = {
  rowLabel: string;
  slots: { time: string; isAvailable: boolean }[];
};
