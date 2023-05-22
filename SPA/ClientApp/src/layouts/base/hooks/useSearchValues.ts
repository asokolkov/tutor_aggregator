import { useState } from 'react';
import { SearchProps } from '../../../pages/Main/components/_formikHelper';

export function useSearchValues() {
  const [searchValues, setSearchValues] = useState<SearchProps>();
  const hasSearchValues = !!searchValues;

  return { searchValues, setSearchValues, hasSearchValues };
}
