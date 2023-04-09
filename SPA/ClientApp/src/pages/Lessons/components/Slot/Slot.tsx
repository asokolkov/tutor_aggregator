import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { SlotContext } from '../../../../contexts/SlotContext';
import { SlotInfo } from './SlotInfo';
import { Lesson } from '../../../../api/lessons';
import { useMemo } from 'react';
import './Slot.css';

export const Slot: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  const providerValue = useMemo(
    () => ({
      type: lesson.type,
      startDate: lesson.start,
      endDate: lesson.end,
      price: lesson.price,
      isBooked: !!lesson.student,
      studentName: lesson.student
        ? `${lesson.student.firstName} ${lesson.student.lastName}`
        : undefined,
    }),
    [lesson]
  );

  return (
    <SlotContext.Provider value={providerValue}>
      <HStack className="Slot" w="100%" spacing="0">
        <TimeBox />
        <SlotInfo />
      </HStack>
    </SlotContext.Provider>
  );
};
