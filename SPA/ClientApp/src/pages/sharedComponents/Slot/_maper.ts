import { Lesson } from '../../../api/lessons';
import { getTimeFromDate } from './_helpers';
import { SlotProps } from './Slot';

export function MapSlot(lesson: Lesson, isForTutor: boolean): SlotProps {
  const endTime = getTimeFromDate(lesson.end);
  const startTime = getTimeFromDate(lesson.start);

  return {
    endTime,
    startTime,
    isBooked: !!lesson.student,
    isForTutor,
    price: lesson.price,
    tutorName: lesson.tutor
      ? `${lesson.tutor.firstName} ${lesson.tutor.lastName}`
      : undefined,
    student: lesson.student
      ? {
          id: lesson.student.id,
          name: `${lesson.student.firstName} ${lesson.student.lastName}`,
        }
      : undefined,
    type: lesson.type,
    lessonId: lesson.id,
  };
}
