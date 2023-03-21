import { useQuery } from 'react-query';
import { searchKey } from './queryKeys';
import TutorsAPI from '../api/tutors';

export function useSearchPageQuery() {
  const { isLoading, data } = useQuery({
    queryKey: [searchKey],
    queryFn: () => TutorsAPI.getAllTutors(0, 10),
  });
  return { isLoading, data };
}
