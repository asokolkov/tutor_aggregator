import { useContext, useState } from 'react';
import { SearchStateContext } from '../../../layouts/base/contexts/SearchStateContext';
import { useSearchPageQuery } from '../../../query/useSearchPageQuery';
export interface SearchValuesProps {
  district: string;
  price: string;
  rating: string;
  subject: string;
}

export function useSearchParams() {
  const { searchValues } = useContext(SearchStateContext);
  const [values, setValues] = useState<SearchValuesProps>({
    district: searchValues.district,
    subject: searchValues.subject,
    price: '',
    rating: '',
  });

  const query = useSearchPageQuery(values);
  return { query, values, setValues };
}
