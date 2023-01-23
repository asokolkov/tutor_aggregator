import * as React from 'react';
import {
  Flex,
  Box,
  useBreakpointValue,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import moment from 'moment';
import { TimeBoxColumn } from './TimeBoxColumn';
import { PriceInputRow } from './PriceInputRow';
import {useState} from "react";

function getNextNDays(daysRequired: number): string[] {
  let days = [];
  for (let i = 0; i < daysRequired; i++) {
    days.push(moment().add(i, 'days').format('DD.MM'));
  }
  return days;
}

export const DateEditorTable = () => {
    const nextDays = getNextNDays(7);
  const [slots, setSlots] = useState(
      {
          [nextDays[0]]: [
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: true},
          ],
          [nextDays[1]]: [
              {time: '09:30', isLocked: true},
              {time: '09:30', isLocked: true},
              {time: '09:30', isLocked: true},
          ],
          [nextDays[2]]: [
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: false},
          ],
          [nextDays[3]]: [
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: true},
          ],
          [nextDays[4]]: [
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: true},
          ],
          [nextDays[5]]: [
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: true},
          ],
          [nextDays[6]]: [
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: false},
              {time: '09:30', isLocked: true},
          ],
      });
    function removeSlot(day: string, newSlots: any): void {
        setSlots({
            ...slots, [day]: newSlots
        });
    }
  
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Flex width={'100%'}>
        <Box
          width={isDesktop ? '70%' : '100%'}
          shadow={'md'}
          borderRadius={'5px'}
          borderWidth={'1px'}
          flexGrow={'0.7'}
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
              <PriceInputRow />
              <Flex maxWidth={'900px'} direction={'row'} overflow={'auto'}>
                <TimeBoxColumn 
                  columnLabel={nextDays[0]}
                  slots={slots[nextDays[0]]}
                  removeSlot={removeSlot}
                />
                <Spacer />
                <TimeBoxColumn
                    columnLabel={nextDays[1]}
                    slots={slots[nextDays[1]]}
                    removeSlot={removeSlot}
                />
                <Spacer />
                <TimeBoxColumn
                    columnLabel={nextDays[2]}
                    slots={slots[nextDays[2]]}
                    removeSlot={removeSlot}
                />
                <Spacer />
                <TimeBoxColumn
                    columnLabel={nextDays[3]}
                    slots={slots[nextDays[3]]}
                    removeSlot={removeSlot}
                />
                <Spacer />
                <TimeBoxColumn
                    columnLabel={nextDays[4]}
                    slots={slots[nextDays[4]]}
                    removeSlot={removeSlot}
                />
                <Spacer />
                <TimeBoxColumn
                    columnLabel={nextDays[5]}
                    slots={slots[nextDays[5]]}
                    removeSlot={removeSlot}
                />
                <Spacer />
                <TimeBoxColumn
                    columnLabel={nextDays[6]}
                    slots={slots[nextDays[6]]}
                    removeSlot={removeSlot}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {isDesktop && (
          <Box
            shadow={'md'}
            borderRadius={'5px'}
            borderWidth={'1px'}
            bg={'white'}
            margin={'0 0 0 1em'}
            width={'30%'}
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
                  Помощь
                </Heading>
                <Flex
                  width={'100%'}
                  align={'left'}
                  justify={'center'}
                  direction={'column'}
                  margin={'0'}
                  wrap={'nowrap'}
                >
                  <Text size={'md'} margin={'0 0 1em 0'}>
                    {/* eslint-disable-next-line max-len */}1. Добавьте
                    временные слоты, в которые вы готовы работать.
                  </Text>
                  <Text size={'md'} margin={'0 0 1em 0'}>
                    {/* eslint-disable-next-line max-len */}2. Слоты можно
                    удалить, только если на них уже не записан студент.
                  </Text>
                  <Text size={'md'} margin={'0 0 1em 0'}>
                    {/* eslint-disable-next-line max-len */}3. Редактирование
                    слотов доступно на сегодняшний день и следующие шесть дней.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        )}
      </Flex>
    </>
  );
};
