import TutorsAPI from '../api/tutors';
import StudentAPI from '../api/students';
import { useQuery } from 'react-query';
import { profileKey, studentKey, tutorKey } from './queryKeys';
import { V1AccountTypeDto, V1StudentDto, V1TutorDto } from '../api/models';

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

export function useProfileQuery(accountType: V1AccountTypeDto) {
  const isTutor = accountType === V1AccountTypeDto.tutor;
  let isLoading: boolean;
  let tutorProfile: V1TutorDto;
  let studentProfile: V1StudentDto;

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
