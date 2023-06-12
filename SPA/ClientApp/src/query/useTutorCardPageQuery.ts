import { useQuery } from 'react-query';
import { reviewKey, tutorCardKey } from './queryKeys';
import TutorsAPI from '../api/tutors';
import { useTutorId } from '../routes/params';

export function useTutorCardPageQuery() {
  const tutorQuery = useTutorQuery();
  const reviewQuery = useReviewQuery();
  return { tutorQuery, reviewQuery };
}

export function useTutorQuery() {
  const tutorId = useTutorId();
  return useQuery({
    queryKey: [tutorCardKey, tutorId],
    queryFn: () => TutorsAPI.getTutorById(tutorId),
  });
}

export function useReviewQuery() {
  const tutorId = useTutorId();
  return useQuery({
    queryKey: [reviewKey],
    queryFn: () => TutorsAPI.getReviewsByTutorId(tutorId),
  });
}
