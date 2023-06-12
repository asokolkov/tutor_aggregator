import * as React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { SlotContext } from './contexts/SlotContext';
import { SlotInfo } from './SlotInfo';
import { useMemo } from 'react';
import { LessonType, V1ContactsDto } from '../../api/models';
import { DateBox } from './DateBox';
import { getTimeFromDate } from '../../utils/datetime';

export const Slot: React.FC<SlotProps> = (props) => {
  const providerValue = useMemo(
    () => ({
      ...props,
      timeRange: `${getTimeFromDate(props.startDate)} - ${getTimeFromDate(
        props.endDate
      )}`,
      tutorName: props.tutorName,
      startDate: new Date(props.startDate),
      endDate: new Date(props.endDate),
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
  startDate: Date;
  endDate: Date;
  lessonId: string;
  tutorId: string;
  bookedBy: BookedBy;
  type: LessonType;
  price: number;
  tutorName: string;
  studentName: string;
  variant: SlotVariant;
  contacts: V1ContactsDto[];
};

export enum SlotVariant {
  tutorCalendar = 'Tutor Calendar',
  studentCalendar = 'Student Calendar',
  activeCloseList = 'Active close',
  activeAllList = 'Active all',
  pastList = 'Past List',
  canceledList = 'CanceledList',
}

export enum BookedBy {
  nobody = 'Nobody',
  someone = 'Someone',
  current = 'Current',
}
