import React from 'react';
import { Subject } from '../api/_share';
import { Location } from '../api/locations';

type SearchParamsContextProps = {
  locationsData: Location[];
  subjectsData: Subject[];
};

React.createContext<SearchParamsContextProps>(null);
