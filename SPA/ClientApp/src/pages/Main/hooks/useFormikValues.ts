import { useContext } from 'react';
import { SearchStateContext } from '../../../layouts/base/contexts/SearchStateContext';

export type SearchProps = {
  district: string;
  subject: string;
};

export function useFormikValues() {
  const { hasSearchValues, searchValues } = useContext(SearchStateContext);
  const initValues: SearchProps = hasSearchValues
    ? searchValues
    : {
        district: '',
        subject: '',
      };

  return { initValues };
}
