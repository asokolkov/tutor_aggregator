import { LessonStatus, V1LessonDto } from '../../../api/models';
import { BookedBy, SlotProps, SlotVariant } from '../Slot';
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

  const bookedBy =
    lesson.status === LessonStatus.booked
      ? user?.id === lesson.student?.id
        ? BookedBy.current
        : BookedBy.someone
      : BookedBy.nobody;

  const props: SlotProps = {
    variant,
    endDate: endDate,
    startDate: startDate,
    bookedBy,
    price: lesson.price,
    tutorName: lesson.tutor
      ? getFullName(lesson.tutor.firstName, lesson.tutor.lastName)
      : undefined,
    studentName: lesson.student
      ? getFullName(lesson.student.firstName, lesson.student.lastName)
      : undefined,
    type: lesson.type,
    lessonId: lesson.id,
    contacts: [],
  };

  return { props };
}
