import { useInfiniteQuery } from 'react-query';
import { searchKey } from './queryKeys';
import TutorsAPI from '../api/tutors';
import { SearchValuesProps } from '../pages/Search/hooks/useSearchParams';

export function useSearchPageQuery(values: SearchValuesProps) {
  return useInfiniteQuery({
    queryKey: [searchKey, values],
    queryFn: ({ pageParam = 0 }) => {
      return TutorsAPI.getAllTutors(
        {
          rating: values.rating || null,
          maxPrice: values.price || null,
          subject: values.subject || null,
          district: values.district || null,

          city: null,
        },
        pageParam,
        30
      );
    },
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNext ? allPages.length : undefined,
  });
}
