import { useLessonsQuery } from '../../../query/useLessonsQuery';

export function useLessonTab(
  tutorId: string,
  columnCount: number,
  currentDate: Date
) {
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + columnCount - 1);
  const query = useLessonsQuery(tutorId, currentDate, endDate);
  return { query, endDate };
}
