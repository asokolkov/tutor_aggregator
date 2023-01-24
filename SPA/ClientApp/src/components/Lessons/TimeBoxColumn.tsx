import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { TimeBoxCreateRow } from './TimeBoxCreateRow';

export const TimeBoxColumn = (props: TimeBoxColumnProps) => {
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
      {props.slots.map((slot: any) => (
        <TimeBox
          columnLabel={props.columnLabel}
          slots={props.slots}
          slot={slot}
          removeSlot={props.removeSlot}
        />
      ))}
      <TimeBoxCreateRow
        columnLabel={props.columnLabel}
        slots={props.slots}
        removeSlot={props.removeSlot}
      />
    </Flex>
  );
};

type TimeBoxColumnProps = {
  columnLabel: string;
  slots: any;
  removeSlot: any;
};
