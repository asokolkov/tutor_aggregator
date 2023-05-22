import React from 'react';
import { SearchProps } from '../pages/Main/components/_formikHelper';

type ContextProps = {
  searchValues: SearchProps;
  setSearchValues: (props: SearchProps) => void;
  hasSearchValues: boolean;
};

export const SearchStateContext = React.createContext<ContextProps>(null);
