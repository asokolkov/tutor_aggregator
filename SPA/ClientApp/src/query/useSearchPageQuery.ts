import { useInfiniteQuery } from 'react-query';
import { searchKey } from './queryKeys';
import TutorsAPI from '../api/tutors';
import { useState } from 'react';

export interface SearchValuesProps {
  district: string;
  price: number;
  rating: number;
  subject: string;
}

export function useSearchPageQuery() {
  const [values, setValues] = useState<SearchValuesProps>({
    district: '',
    subject: '',
    price: -1,
    rating: -1,
  });

  const { isLoading, data, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [searchKey, values],
      queryFn: ({ pageParam = 0 }) =>
        TutorsAPI.getAllTutors(
          {
            rating: values.rating,
            maxPrice: values.price,
            subject: values.subject || null,
            district: values.district || null,
            city: null,
          },
          pageParam,
          30
        ),
      keepPreviousData: true,
      getNextPageParam: (_, allPages) => {
        return allPages.length;
      },
    });
  return {
    isLoading,
    isFetchingNextPage,
    data,
    fetchNextPage,
    values,
    setValues,
  };
}
