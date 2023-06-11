import { V1TutorDto } from '../api/models';

export function getFullName(firstName: string, lastName: string) {
  return `${lastName} ${firstName}`;
}

export function getFullTutorName(tutor: V1TutorDto) {
  return tutor ? `${tutor.lastName} ${tutor.firstName}` : 'Неизвестно';
}
