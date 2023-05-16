import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { SlotContext } from '../../../contexts/SlotContext';
import { SlotInfo } from './SlotInfo';
import { useMemo } from 'react';
import { LessonType } from '../../../api/lessons';

export const Slot: React.FC<SlotProps> = (props) => {
  const providerValue = useMemo(
    () => ({
      ...props,
      timeRange: `${props.startTime || '??:??'} - ${props.endTime || '??:??'}`,
      tutorName: props.tutorName || 'Неизвестно',
    }),
    [props]
  );
  return (
    <>
      <SlotContext.Provider value={providerValue}>
        <HStack
          borderRadius="10px"
          borderWidth="2px"
          borderColor="blue.200"
          w={props.isForTutor ? '356px' : '260px'}
          spacing="0"
        >
          <TimeBox />
          <SlotInfo />
        </HStack>
      </SlotContext.Provider>
    </>
  );
};

export type SlotProps = {
  startTime: string;
  endTime: string;
  lessonId: string;
  isForTutor: boolean;
  isBooked: boolean;
  type: LessonType;
  price: number;
  tutorName: string;
  student?: {
    name: string;
    id: string;
  };
};
