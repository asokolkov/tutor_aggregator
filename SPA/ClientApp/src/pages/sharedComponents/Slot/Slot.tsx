import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import { TimeBox } from './TimeBox';
import { SlotContext } from '../../../contexts/SlotContext';
import { SlotInfo } from './SlotInfo';
import { Lesson } from '../../../api/lessons';
import { useMemo } from 'react';
import './Slot.css';
import { getTimeFromDate } from './_helpers';

type Props = {
  lesson: Lesson;
  forTutor: boolean;
};

export const Slot: React.FC<Props> = ({ forTutor, lesson }) => {
  const providerValue = useMemo(
    () => ({
      isForTutor: forTutor,
      lesson: lesson,
      isBooked: !!lesson.student,
      studentName: lesson.student
        ? `${lesson.student.firstName} ${lesson.student.lastName}`
        : undefined,
      tutorName: `${lesson.tutor.firstName} ${lesson.student.lastName}`,
      dateRangeStr: `${getTimeFromDate(lesson.start)} - ${getTimeFromDate(
        lesson.end
      )}`,
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
    </>
  );
};
