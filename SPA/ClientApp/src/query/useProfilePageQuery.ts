import { AccountType } from '../api/currentUser';
import TutorsAPI, { Tutor } from '../api/tutors';
import StudentAPI, { Student } from '../api/students';
import { useQuery } from 'react-query';
import { profileKey, studentKey, tutorKey } from './queryKeys';

function useTutorQuery() {
  return useQuery({
    queryKey: [profileKey, tutorKey],
    queryFn: () => TutorsAPI.getCurrentProfileInfo(),
  });
}
function useStudentQuery() {
  return useQuery({
    queryKey: [profileKey, studentKey],
    queryFn: () => StudentAPI.getCurrentProfileInfo(),
  });
}

export function useProfileInfo(accountType: AccountType) {
  const isTutor = accountType === AccountType.Tutor;
  let isLoading: boolean;
  let tutorProfile: Tutor;
  let studentProfile: Student;

  if (isTutor) {
    const query = useTutorQuery();
    isLoading = query.isLoading;
    tutorProfile = query.data;
  } else {
    const query = useStudentQuery();
    isLoading = query.isLoading;
    studentProfile = query.data;
  }

  return { isLoading, tutorProfile, studentProfile };
}
