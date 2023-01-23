import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { TimeBoxCreateRow } from './TimeBoxCreateRow';

export const TimeBoxColumn = (props: TimeBoxColumnProps) => {
  const column = props.slots.map((slot) => (
    <TimeBox time={slot.time} isCancellableEditor={!slot.isLocked} />
  ));
  return (
    <Flex
      width={'100%'}
      align={'left'}
      direction={'column'}
      margin={'0 0.5em 0 0'}
    >
      <Heading size={'sm'} margin={'0'}>
        {props.columnLabel}
      </Heading>
      {column}
      <TimeBoxCreateRow />
    </Flex>
  );
};

type TimeBoxColumnProps = {
  columnLabel: string;
  slots: { time: string; isLocked: boolean }[];
};
