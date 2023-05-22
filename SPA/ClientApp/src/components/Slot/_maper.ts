import { getTimeFromDate } from '../../utils/datetime';
import { SlotProps } from './Slot';
import { V1LessonDto } from '../../api/models';

export function MapSlot(lesson: V1LessonDto, isForTutor: boolean): SlotProps {
  const endTime = lesson.end
    ? getTimeFromDate(new Date(lesson.end))
    : undefined;
  const startTime = lesson.start
    ? getTimeFromDate(new Date(lesson.start))
    : undefined;

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
