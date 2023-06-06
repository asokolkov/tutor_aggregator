import { useQuery } from 'react-query';
import { reviewKey, tutorCardKey } from './queryKeys';
import TutorsAPI from '../api/tutors';
import { useTutorId } from '../routes/params';

export function useTutorCardPageQuery() {
  const tutorId = useTutorId();

  const tutorQuery = useQuery({
    queryKey: [tutorCardKey, tutorId],
    queryFn: () => TutorsAPI.getTutorById(tutorId),
  });

  const reviewQuery = useQuery({
    queryKey: [reviewKey, tutorId],
    queryFn: () => TutorsAPI.getReviewsByTutorId(tutorId),
  });

  return { tutorQuery, reviewQuery };
}
