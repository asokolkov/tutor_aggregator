import { useLessonsQuery } from '../../../query/useLessonsQuery';

function datesForQuery(date: Date, count: number): Date[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + i);
    result.push(newDate);
  }
  return result;
}

export function useLessonTab(
  tutorId: string,
  columnCount: number,
  currentDate: Date
) {
  const dates = datesForQuery(currentDate, columnCount);
  const queries = useLessonsQuery(tutorId, dates);
  return { queries };
}
