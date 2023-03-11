import { AccountType } from '../../apis/currentUser';
import { useEffect, useState } from 'react';
import TutorsAPI, { Tutor } from '../../apis/tutors';
import StudentAPI, { Student } from '../../apis/students';

export function useProfileInfo(accountType: AccountType) {
  const isTutor = accountType === AccountType.Tutor;

  const [isLoading, setIsLoading] = useState(true);
  const [tutorProfile, setTutor] = useState<Tutor>();
  const [studentProfile, setStudent] = useState<Student>();

  useEffect(() => {
    if (isTutor) {
      TutorsAPI.getCurrentProfileInfo().then((tutor) => {
        setTutor(tutor);
        setIsLoading(false);
      });
    } else {
      StudentAPI.getCurrentProfileInfo().then((student) => {
        setStudent(student);
        setIsLoading(false);
      });
    }
  }, []);

  return { isLoading, tutorProfile, studentProfile };
}
