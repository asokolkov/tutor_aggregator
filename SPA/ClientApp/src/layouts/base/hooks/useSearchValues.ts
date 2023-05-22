import { useMemo, useState } from 'react';
import { SearchProps } from '../../../pages/Main/components/_formikHelper';

export function useSearchValues() {
  const [searchValues, setSearchValues] = useState<SearchProps>();
  const hasSearchValues = !!searchValues;

  const providerValues = useMemo(
    () => ({ setSearchValues, searchValues, hasSearchValues }),
    [setSearchValues, searchValues, hasSearchValues]
  );

  return { providerValues };
}
