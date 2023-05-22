import { useContext } from 'react';
import { SearchStateContext } from '../../../layouts/base/contexts/SearchStateContext';
import { useNavigate } from 'react-router-dom';
import { SearchProps } from './useFormikValues';
import { SEARCH_PAGE } from '../../../routes/routePaths';

export function useSubmitButton() {
  const { setSearchValues } = useContext(SearchStateContext);
  const navigate = useNavigate();
  const onSubmit = (values: SearchProps) => {
    setSearchValues(values);
    navigate(SEARCH_PAGE);
  };

  return { onSubmit };
}
