import { useContext } from 'react';
import { SearchStateContext } from '../../../layouts/base/contexts/SearchStateContext';
import { LessonType } from '../../../api/models';

export type SearchProps = {
  district: string;
  subject: string;
  lessonType: LessonType;
};

export function useFormikValues() {
  const { hasSearchValues, searchValues } = useContext(SearchStateContext);
  const initValues: SearchProps = hasSearchValues
    ? searchValues
    : {
        district: '',
        subject: '',
        lessonType: LessonType.offline,
      };

  return { initValues };
}
