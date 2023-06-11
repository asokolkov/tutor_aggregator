import { useProfileQuery } from '../../../query/useProfilePageQuery';
import { useContext } from 'react';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { useLocationQuery } from '../../../query/useLocationQuery';
import { useSubjectQuery } from '../../../query/useSubjectQuery';

export function useProfilePage() {
  const { user } = useContext(UserContext);
  const profileQuery = useProfileQuery(user.accountType);

  const { locationsQuery } = useLocationQuery();
  const { subjectQuery } = useSubjectQuery();

  const isLoading =
    profileQuery.isLoading ||
    locationsQuery.isLoading ||
    subjectQuery.isLoading;

  return {
    isLoading,
    tutor: profileQuery.tutorProfile,
    student: profileQuery.studentProfile,
    locations: locationsQuery.data,
    subjects: subjectQuery.data,
  };
}
