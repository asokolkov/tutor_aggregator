import { useMemo, useState } from 'react';
import { SearchProps } from '../../../pages/Main/hooks/useFormikValues';

export function useSearchValues() {
  const [searchValues, setSearchValues] = useState<SearchProps>();
  const hasSearchValues = !!searchValues;

  const providerValues = useMemo(
    () => ({ setSearchValues, searchValues, hasSearchValues }),
    [setSearchValues, searchValues, hasSearchValues]
  );

  return { providerValues };
}
