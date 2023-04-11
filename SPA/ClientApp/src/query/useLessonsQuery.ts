import { useQuery } from 'react-query';
import { lessonsKey } from './queryKeys';
import LessonsAPI from '../api/lessons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useLessonsQuery(tutorId: string, start: Date, end: Date) {
  return useQuery({
    queryKey: [lessonsKey, tutorId],
    queryFn: () => LessonsAPI.getTutorLessons(tutorId),
  });
}
