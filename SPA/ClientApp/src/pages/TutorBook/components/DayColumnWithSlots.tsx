import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { Title } from '../../Lessons/components/LessonCalendarTab/Title';
import { Slot } from '../../../components/Slot/Slot';
import { MapSlot } from '../../../components/Slot/_maper';
import { V1LessonDto } from '../../../api/models';

type Props = {
  lessons: V1LessonDto[];
  date: Date;
};
export const DayColumnWithSlots: React.FC<Props> = ({ lessons, date }) => {
  if (!lessons) lessons = [];
  const bookedCount = lessons.filter((x) => x.student).length;

  return (
    <VStack w="260px" spacing="30px">
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
