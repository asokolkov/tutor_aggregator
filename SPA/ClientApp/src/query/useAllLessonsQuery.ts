import { useQuery } from 'react-query';
import { allLessonsKey } from './queryKeys';
import { useContext } from 'react';
import { UserContext } from '../layouts/base/contexts/UserContext';
import { V1AccountTypeDto } from '../api/models';
import TutorsAPI from '../api/tutors';
import StudentAPI from '../api/students';

export function useAllLessonsQuery() {
  const { user } = useContext(UserContext);
  const isTutor = user.accountType === V1AccountTypeDto.tutor;
  const query = useQuery({
    queryKey: [allLessonsKey, user.id],
    queryFn: isTutor
      ? TutorsAPI.getAllTutorLessons
      : StudentAPI.getAllStudentLessons,
  });

  return { query };
}
