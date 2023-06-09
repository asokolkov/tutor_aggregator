import { LessonStatus, V1LessonDto } from '../../../api/models';
import { SlotProps, SlotVariant } from '../Slot';
import {
  getDayAndMonthFromDate,
  getTimeFromDate,
  russianDayOfTheWeek,
} from '../../../utils/datetime';
import { getFullName } from '../../../utils/names';
import { useContext } from 'react';
import { UserContext } from '../../../layouts/base/contexts/UserContext';

export function useSlot(
  lesson: V1LessonDto,
  variant: SlotVariant
): { props: SlotProps } {
  const { user } = useContext(UserContext);
  const startDate = new Date(lesson.start);
  const endDate = new Date(lesson.end);

  const endTime = lesson.end ? getTimeFromDate(endDate) : '??:??';
  const startTime = lesson.start ? getTimeFromDate(startDate) : '??:??';

  const dateAndDay = lesson.start
    ? `${getDayAndMonthFromDate(startDate)}, ${russianDayOfTheWeek(endDate)}`
    : undefined;

  const props: SlotProps = {
    variant,
    endTime,
    startTime,
    dateAndDay,
    isBooked: lesson.status === LessonStatus.booked,
    price: lesson.price,
    tutorName: lesson.tutor
      ? getFullName(lesson.tutor.firstName, lesson.tutor.lastName)
      : undefined,
    studentName: lesson.student
      ? getFullName(lesson.student.firstName, lesson.student.lastName)
      : undefined,
    type: lesson.type,
    lessonId: lesson.id,
    isBookedByCurrent: user?.id === lesson.student?.id,
  };

  return { props };
}
