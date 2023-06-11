import { TUTORS_PATH } from './routePaths';

export const getTutorCardByIdPath = (tutorId: string) =>
  `${TUTORS_PATH}/${tutorId}`;

export const getTutorBookByIdPath = (tutorId: string) =>
  `${TUTORS_PATH}/${tutorId}/book`;

export const getTutorBookSuccessPath = (tutorId: string) =>
  `${TUTORS_PATH}/${tutorId}/success`;
