import { useQueries } from 'react-query';
import { lessonsKey } from './queryKeys';
import LessonsAPI from '../api/lessons';

export function useLessonsQuery(tutorId: string, dates: Date[]) {
  const queries = dates.map((date) => ({
    queryKey: [lessonsKey, tutorId, date],
    queryFn: () => LessonsAPI.getTutorLessons(tutorId, date),
  }));
  return useQueries(queries);
}
