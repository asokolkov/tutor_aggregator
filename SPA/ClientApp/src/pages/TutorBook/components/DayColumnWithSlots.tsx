import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { Title } from '../../Lessons/components/LessonCalendarTab/Title';
import { Slot, SlotVariant } from '../../../components/Slot/Slot';
import { V1LessonDto } from '../../../api/models';
import { useSlot } from '../../../components/Slot/hooks/useSlot';

type Props = {
  lessons: V1LessonDto[];
  date: Date;
};
export const DayColumnWithSlots: React.FC<Props> = ({ lessons, date }) => {
  if (!lessons) lessons = [];
  const bookedCount = lessons.filter((x) => x.student).length;
  const sortedLessons = lessons.sort((x) => new Date(x.start).getTime());

  return (
    <VStack
      w="260px"
      spacing="30px"
      style={{ breakInside: 'avoid' }}
      minH="50vh"
    >
      <Title
        date={date}
        totalCount={lessons.length}
        bookedCount={bookedCount}
      />
      <VStack spacing="16px" w="100%">
        {sortedLessons.map((lesson) => {
          const { props } = useSlot(lesson, SlotVariant.studentCalendar);
          return <Slot {...props} key={lesson.id} />;
        })}
      </VStack>
    </VStack>
  );
};
