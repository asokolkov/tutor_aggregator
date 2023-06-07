import * as React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { SlotContext } from './contexts/SlotContext';
import { SlotInfo } from './SlotInfo';
import { useMemo } from 'react';
import { LessonType } from '../../api/models';
import { DateBox } from './DateBox';

export const Slot: React.FC<SlotProps> = (props) => {
  const providerValue = useMemo(
    () => ({
      ...props,
      timeRange: `${props.startTime || '??:??'} - ${props.endTime || '??:??'}`,
      tutorName: props.tutorName || 'Неизвестно',
    }),
    [props]
  );

  const isDateBoxVisible = !(
    props.variant === SlotVariant.tutorCalendar ||
    props.variant === SlotVariant.studentCalendar
  );
  return (
    <>
      <SlotContext.Provider value={providerValue}>
        <VStack
          borderRadius="10px"
          borderWidth="2px"
          borderColor="blue.200"
          overflow="hidden"
          width="100%"
        >
          {isDateBoxVisible && <DateBox />}
          <HStack w="100%" spacing="0">
            <TimeBox />
            <SlotInfo />
          </HStack>
        </VStack>
      </SlotContext.Provider>
    </>
  );
};

export type SlotProps = {
  startTime: string;
  endTime: string;
  dateAndDay: string;
  lessonId: string;
  isBooked: boolean;
  type: LessonType;
  price: number;
  tutorName: string;
  student?: {
    name: string;
    id: string;
  };
  variant: SlotVariant;
};

export enum SlotVariant {
  tutorCalendar = 'Tutor Calendar',
  studentCalendar = 'Student Calendar',
  activeCloseList = 'Active close',
  activeAllList = 'Active all',
  pastList = 'Past List',
  canceledList = 'CanceledList',
}
