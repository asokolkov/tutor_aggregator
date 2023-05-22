import React from 'react';
import { V1LocationDto, V1SubjectDto } from '../../../api/models';

type SearchParamsContextProps = {
  locationsData: V1LocationDto[];
  subjectsData: V1SubjectDto[];
};

export const SearchParamsContext =
  React.createContext<SearchParamsContextProps>(null);
