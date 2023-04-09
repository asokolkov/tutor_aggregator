import { useQuery } from 'react-query';
import { lessonsKey } from './queryKeys';
import LessonsAPI from '../api/lessons';

export function useLessonsQuery(tutorId: string) {
  return useQuery({
    queryKey: [lessonsKey, tutorId],
    queryFn: () => LessonsAPI.getTutorLessons(tutorId),
  });
}
