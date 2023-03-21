import { useQueries, UseQueryResult } from 'react-query';
import { awardKey, tutorCardKey } from '../../query/queryKeys';
import TutorsAPI, { ReviewList, Tutor } from '../../api/tutors';
import { useTutorId } from '../../routes/params';

export function useTutorCardPageQuery() {
  const tutorId = useTutorId();

  const [tutorQuery, reviewQuery]: [
    UseQueryResult<Tutor>,
    UseQueryResult<ReviewList>
  ] = useQueries([
    {
      queryKey: [tutorCardKey],
      queryFn: () => TutorsAPI.getTutorById(tutorId),
    },
    {
      queryKey: [awardKey],
      queryFn: () => TutorsAPI.getReviewsByTutorId(tutorId),
    },
  ]);

  return { tutorQuery, reviewQuery };
}
