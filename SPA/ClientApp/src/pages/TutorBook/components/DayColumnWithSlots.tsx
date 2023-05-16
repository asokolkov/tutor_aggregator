import { Lesson } from '../../../api/lessons';
import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { Title } from '../../Lessons/components/DayColumn/Title';
import { Slot } from '../../sharedComponents/Slot/Slot';
import { MapSlot } from '../../sharedComponents/Slot/_maper';

type Props = {
  lessons: Lesson[];
  date: Date;
};
export const DayColumnWithSlots: React.FC<Props> = ({ lessons, date }) => {
  const bookedCount = lessons.filter((x) => x.student).length;

  return (
    <VStack w="420px" spacing="30px">
      <Title
        date={date}
        totalCount={lessons.length}
        bookedCount={bookedCount}
      />
      <VStack spacing="16px" w="100%">
        {lessons.map((lesson) => (
          <Slot {...MapSlot(lesson, false)} key={lesson.id} />
        ))}
      </VStack>
    </VStack>
  );
};
