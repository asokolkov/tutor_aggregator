import {
  V1ContactTypeDto,
  V1StudentDto,
  V1TutorDto,
} from '../../../api/models';
import { getFullName } from '../../../utils/names';

export type TutorInitValues = {
  name: string;
  district: string;
  subject: string;
  education: string;
  job: string;
  requirements: string;
  telegram: string;
  phone: string;
  email: string;
  about: string;
};

export function useTutorForm(tutor: V1TutorDto) {
  const mapTutor = (): TutorInitValues => {
    const contactByType = (type: V1ContactTypeDto) =>
      tutor.contacts.filter((x) => x.type === type)[0]?.value;

    return {
      name: getFullName(tutor.firstName, tutor.lastName),
      district: tutor.location?.district ?? '',
      subject: tutor.subjects[0]?.description ?? '',
      education: tutor.educations[0]?.value,
      job: tutor.job,
      requirements: tutor.requirements[0]?.value,
      about: tutor.description,
      phone: contactByType(V1ContactTypeDto.phone),
      telegram: contactByType(V1ContactTypeDto.telegram),
      email: contactByType(V1ContactTypeDto.email),
    };
  };

  const updateTutor = (values: TutorInitValues) => {
    tutor.educations[0] = { value: values.education };
    tutor.job = values.job;
    tutor.requirements[0] = { value: values.requirements };
    tutor.description = values.about;
    tutor.contacts[0] = { type: V1ContactTypeDto.phone, value: values.phone };
    tutor.contacts[1] = { type: V1ContactTypeDto.email, value: values.email };
    tutor.contacts[2] = {
      type: V1ContactTypeDto.telegram,
      value: values.telegram,
    };
    return tutor;
  };

  return { mapTutor, updateTutor };
}

export type StudentInitValues = {
  name: string;
  age: string;
  about: string;
};

export function useStudentForm(student: V1StudentDto) {
  const mapStudent = (): StudentInitValues => ({
    name: getFullName(student.firstName, student.lastName),
    age: '',
    about: '',
  });

  const updateStudent = (values: StudentInitValues) => {
    student.age = +values.age;
    student.description = values.about;
    return student;
  };

  return { mapStudent, updateStudent };
}
