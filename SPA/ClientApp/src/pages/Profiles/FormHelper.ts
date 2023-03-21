import { Student } from '../../api/students';
import { Tutor } from '../../api/tutors';

function mapToFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

export enum SexOptions {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export const getTutorInitialValues = (tutor: Tutor) => ({
  name: mapToFullName(tutor.firstName, tutor.lastName),
  district: 'Уралмаш',
  education: tutor.educations.map((e) => e.description).join('\n'),
  job: tutor.job,
  awards: tutor.awards.map((a) => a.description).join('\n'),
  requirements: tutor.requirements,
  contacts: tutor.contacts,
  about: '',
});

export const getStudentInitialValues = (student: Student) => ({
  name: mapToFullName(student.firstName, student.lastName),
  sex: SexOptions.Male,
  age: '',
  about: '',
});
