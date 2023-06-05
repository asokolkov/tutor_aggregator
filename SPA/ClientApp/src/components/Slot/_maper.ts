import {
  getDayAndMonthFromDate,
  getTimeFromDate,
  russianDayOfTheWeek,
} from '../../utils/datetime';
import { SlotProps, SlotVariant } from './Slot';
import { V1LessonDto } from '../../api/models';

export function MapSlot(lesson: V1LessonDto, variant: SlotVariant): SlotProps {
  const startDate = new Date(lesson.start);
  const endDate = new Date(lesson.end);

  const endTime = lesson.end ? getTimeFromDate(endDate) : undefined;
  const startTime = lesson.start ? getTimeFromDate(startDate) : undefined;

  const dateAndDay = lesson.start
    ? `${getDayAndMonthFromDate(startDate)}, ${russianDayOfTheWeek(endDate)}`
    : undefined;

  return {
    variant,
    endTime,
    startTime,
    dateAndDay,
    isBooked: !!lesson.student,
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
