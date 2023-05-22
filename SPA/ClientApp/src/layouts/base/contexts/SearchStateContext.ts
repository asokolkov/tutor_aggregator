import React from 'react';
import { SearchProps } from '../../../pages/Main/hooks/useFormikValues';

type ContextProps = {
  searchValues: SearchProps;
  setSearchValues: (props: SearchProps) => void;
  hasSearchValues: boolean;
};

export const SearchStateContext = React.createContext<ContextProps>(null);
