import { TUTORS_PATH } from './routePaths';

export const getTutorCardByIdPath = (tutorId: string) => {
  return `${TUTORS_PATH}/${tutorId}`;
};
