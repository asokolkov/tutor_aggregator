import TutorsAPI from '../api/tutors';
import StudentAPI from '../api/students';
import { useQuery } from 'react-query';
import { profileKey, studentKey, tutorKey } from './queryKeys';
import { V1AccountTypeDto, V1StudentDto, V1TutorDto } from '../api/models';
import { useContext } from 'react';
import { UserContext } from '../layouts/base/contexts/UserContext';

function useTutorQuery() {
  const { user } = useContext(UserContext);
  return useQuery({
    queryKey: [profileKey, tutorKey, user.id],
    queryFn: () => TutorsAPI.getCurrentProfileInfo(),
  });
}
function useStudentQuery() {
  const { user } = useContext(UserContext);
  return useQuery({
    queryKey: [profileKey, studentKey, user.id],
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
