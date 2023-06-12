import { useContext, useState } from 'react';
import { SearchStateContext } from '../../../layouts/base/contexts/SearchStateContext';
import { useSearchPageQuery } from '../../../query/useSearchPageQuery';
import { LessonType } from '../../../api/models';
export interface SearchValuesProps {
  district: string;
  price: string;
  rating: string;
  subject: string;
  lessonType: LessonType;
}

export function useSearchParams() {
  const { searchValues } = useContext(SearchStateContext);
  const [values, setValues] = useState<SearchValuesProps>({
    district: searchValues.district,
    subject: searchValues.subject,
    lessonType: searchValues.lessonType,
    price: '',
    rating: '',
  });

  const query = useSearchPageQuery(values);
  return { query, values, setValues };
}
