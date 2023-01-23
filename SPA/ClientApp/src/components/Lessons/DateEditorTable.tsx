import * as React from 'react';
import {
  Flex,
  Box,
  useBreakpointValue,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import moment from 'moment';
import { TimeBoxColumn } from './TimeBoxColumn';

function getNextNDays(daysRequired: number): string[] {
  let days = [];
  for (let i = 0; i < daysRequired; i++) {
    days.push(moment().add(i, 'days').format('DD.MM'));
  }
  return days;
}

export const DateEditorTable = () => {
  const nextDays = getNextNDays(7);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      width={'100%'}
      shadow={'md'}
      borderRadius={'5px'}
      borderWidth={'1px'}
      bg={'white'}
    >
      <Flex
        padding={isDesktop ? '1.5em' : '1em'}
        direction={isDesktop ? 'row' : 'column'}
      >
        <Flex
          width={'100%'}
          align={'left'}
          direction={'column'}
          margin={'0'}
          wrap={'nowrap'}
        >
          <Heading size={'md'} margin={'0 0 1em 0'}>
            Ваше расписание
          </Heading>
          <Flex
            minWidth="800px"
            maxWidth={'1000px'}
            width={'100%'}
            direction={'row'}
            overflow-x={'scroll'}
          >
            <TimeBoxColumn
              columnLabel={nextDays[0]}
              slots={[
                { time: '09:30', isLocked: false },
                { time: '11:00', isLocked: false },
                { time: '12:30', isLocked: true },
                { time: '14:00', isLocked: false },
              ]}
            />
            <Spacer />
            <TimeBoxColumn
              columnLabel={nextDays[1]}
              slots={[
                { time: '09:30', isLocked: false },
                { time: '11:00', isLocked: true },
                { time: '12:30', isLocked: false },
              ]}
            />
            <Spacer />
            <TimeBoxColumn
              columnLabel={nextDays[2]}
              slots={[
                { time: '09:30', isLocked: false },
                { time: '11:00', isLocked: false },
                { time: '12:30', isLocked: false },
                { time: '14:00', isLocked: false },
                { time: '15:30', isLocked: false },
              ]}
            />
            <Spacer />
            <TimeBoxColumn
              columnLabel={nextDays[3]}
              slots={[
                { time: '09:30', isLocked: true },
                { time: '11:00', isLocked: false },
                { time: '12:30', isLocked: true },
                { time: '14:00', isLocked: false },
              ]}
            />
            <Spacer />
            <TimeBoxColumn
              columnLabel={nextDays[4]}
              slots={[
                { time: '09:30', isLocked: false },
                { time: '11:00', isLocked: false },
                { time: '12:30', isLocked: false },
                { time: '14:00', isLocked: true },
              ]}
            />
            <Spacer />
            <TimeBoxColumn
              columnLabel={nextDays[5]}
              slots={[
                { time: '09:30', isLocked: false },
                { time: '11:00', isLocked: false },
                { time: '12:30', isLocked: false },
                { time: '14:00', isLocked: false },
              ]}
            />
            <Spacer />
            <TimeBoxColumn
              columnLabel={nextDays[6]}
              slots={[
                { time: '09:30', isLocked: false },
                { time: '11:00', isLocked: true },
                { time: '12:30', isLocked: false },
                { time: '14:00', isLocked: false },
              ]}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
