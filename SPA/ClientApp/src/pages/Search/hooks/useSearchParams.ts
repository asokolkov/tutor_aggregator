import { useContext, useState } from 'react';
import { SearchStateContext } from '../../../layouts/base/contexts/SearchStateContext';
import { useSearchPageQuery } from '../../../query/useSearchPageQuery';
export interface SearchValuesProps {
  district: string;
  price: number;
  rating: number;
  subject: string;
}

export function useSearchParams() {
  const { searchValues } = useContext(SearchStateContext);
  const [values, setValues] = useState<SearchValuesProps>({
    district: searchValues.district,
    subject: searchValues.subject,
    price: -1,
    rating: -1,
  });

  const query = useSearchPageQuery(values);
  return { query, values, setValues };
}
