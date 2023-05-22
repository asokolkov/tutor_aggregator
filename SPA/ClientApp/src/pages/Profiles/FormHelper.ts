import { FormikValues } from 'formik';
import { V1StudentDto, V1TutorDto } from '../../api/models';

function mapToFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

export enum SexOptions {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export const mapTutorToFormikValues = (tutor: V1TutorDto) => ({
  name: mapToFullName(tutor.firstName, tutor.lastName),
  district: tutor.location?.city,
  education: tutor.educations[0]?.value,
  job: tutor.job,
  awards: tutor.awards[0]?.value,
  requirements: tutor.requirements[0]?.value,
  contacts: tutor.contacts[0]?.value,
  about: tutor.description,
});

export const updateTutorFromFormikValues = (
  tutor: V1TutorDto,
  values: FormikValues
) => {
  tutor.educations[0] = { value: values.education };
  tutor.job = values.job;
  tutor.awards[0] = { value: values.awards };
  tutor.requirements[0] = { value: values.requirements };
  tutor.contacts[0] = { type: undefined, value: values.contacts };
  tutor.description = values.about;
  return tutor;
};

export const mapStudentToFormikValues = (student: V1StudentDto) => ({
  name: mapToFullName(student.firstName, student.lastName),
  sex: SexOptions.Male,
  age: '',
  about: '',
});

export const updateStudentFromFormikValues = (
  student: V1StudentDto,
  values: FormikValues
) => {
  student.age = values.age;
  student.description = values.about;
  return student;
};
