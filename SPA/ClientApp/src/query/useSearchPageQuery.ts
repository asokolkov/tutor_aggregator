import { useInfiniteQuery } from 'react-query';
import { searchKey } from './queryKeys';
import TutorsAPI from '../api/tutors';

export function useSearchPageQuery() {
  const { isLoading, data, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [searchKey],
      queryFn: ({ pageParam = 0 }) =>
        TutorsAPI.getAllTutors(null, pageParam, 30),
      keepPreviousData: true,
      getNextPageParam: (_, allPages) => {
        return allPages.length;
      },
    });
  return { isLoading, isFetchingNextPage, data, fetchNextPage };
}
