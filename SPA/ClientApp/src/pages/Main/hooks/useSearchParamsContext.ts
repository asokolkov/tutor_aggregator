import { useLocationQuery } from '../../../query/useLocationQuery';
import { useSubjectQuery } from '../../../query/useSubjectQuery';
import { useMemo } from 'react';

export function useSearchParamsContext() {
  const { locationsQuery } = useLocationQuery();
  const { subjectQuery } = useSubjectQuery();
  const isLoading = locationsQuery.isLoading || subjectQuery.isLoading;

  const providerValue = useMemo(
    () => ({
      locationsData: locationsQuery.data,
      subjectsData: subjectQuery.data,
    }),
    [locationsQuery, subjectQuery]
  );

  return { providerValue, isLoading };
}
