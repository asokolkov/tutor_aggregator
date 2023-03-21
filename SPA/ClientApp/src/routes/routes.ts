import { TUTORS_PATH } from './route-paths';

export const getTutorCardByIdPath = (tutorId: string) => {
  return `${TUTORS_PATH}/${tutorId}`;
};
