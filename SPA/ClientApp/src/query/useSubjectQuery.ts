import { useQuery } from 'react-query';
import { subjectsKey } from './queryKeys';
import SubjectsAPI from '../api/subjects';

export function useSubjectQuery() {
  const query = useQuery({
    queryKey: subjectsKey,
    queryFn: SubjectsAPI.getSubjects,
  });

  return { subjectQuery: query };
}
