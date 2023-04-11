import * as React from 'react';
import { HStack, useDisclosure } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { SlotContext } from '../../../../contexts/SlotContext';
import { SlotInfo } from './SlotInfo';
import { Lesson } from '../../../../api/lessons';
import { useMemo } from 'react';
import './Slot.css';
import { DeleteSlotModal } from '../modals/DeleteSlotModal';

export const Slot: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  const disclosure = useDisclosure();

  const providerValue = useMemo(
    () => ({
      onDeleteModalOpen: disclosure.onOpen,
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
    <>
      <SlotContext.Provider value={providerValue}>
        <HStack className="Slot" w="100%" spacing="0">
          <TimeBox />
          <SlotInfo />
        </HStack>
      </SlotContext.Provider>
      <DeleteSlotModal disclosure={disclosure} lesson={lesson} />
    </>
  );
};
