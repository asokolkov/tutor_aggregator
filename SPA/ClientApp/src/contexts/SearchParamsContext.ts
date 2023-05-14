import React from 'react';
import { Subject } from '../api/_share';
import { Location } from '../api/locations';

type SearchParamsContextProps = {
  isRefetching: boolean;
  locationsData: Location[];
  subjectsData: Subject[];
};

export const SearchParamsContext =
  React.createContext<SearchParamsContextProps>(null);
