import { useQueries } from 'react-query';
import { lessonsByDateKey } from './queryKeys';
import LessonsAPI from '../api/lessons';

export function useLessonsByDateQuery(tutorId: string, dates: Date[]) {
  const queries = dates.map((date) => ({
    queryKey: [lessonsByDateKey, tutorId, date],
    queryFn: () => LessonsAPI.getTutorLessons(tutorId, date),
  }));
  return useQueries(queries);
}
