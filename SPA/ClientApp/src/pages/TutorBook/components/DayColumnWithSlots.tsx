import { Lesson, LessonStatus } from '../../../api/lessons';
import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { Title } from '../../Lessons/components/DayColumn/Title';
import { Slot } from '../../sharedComponents/Slot/Slot';

type Props = {
  lessons: Lesson[];
  date: Date;
};
export const DayColumnWithSlots: React.FC<Props> = ({ lessons, date }) => {
  lessons = lessons.filter((lesson) => lesson.status !== LessonStatus.Deleted);
  const bookedCount = lessons.filter((x) => x.student).length;

  return (
    <>
      <VStack w="420px" spacing="30px">
        <Title
          date={date}
          totalCount={lessons.length}
          bookedCount={bookedCount}
        />
        <VStack spacing="16px" w="100%">
          {lessons.map((lesson) => (
            <Slot lesson={lesson} forTutor={false} key={lesson.id} />
          ))}
        </VStack>
      </VStack>
    </>
  );
};
