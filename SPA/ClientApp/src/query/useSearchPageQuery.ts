import { useQuery } from 'react-query';
import { searchKey } from './queryKeys';
import TutorsAPI from '../api/tutors';

export function useSearchPageQuery() {
  const { isLoading, data } = useQuery({
    queryKey: [searchKey],
    queryFn: () => TutorsAPI.getAllTutors(null, 1, 10),
  });
  return { isLoading, data };
}
