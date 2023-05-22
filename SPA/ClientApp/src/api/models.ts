export enum AccountType {
  tutor = 'Tutor',
  student = 'Student',
}
export type V1UserDto = {
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  accountType?: V1AccountTypeDto;
  registrationCompleted?: boolean;
};
export type V1LoginDto = {
  email?: string | null;
  password?: string | null;
  rememberMe?: boolean;
};
export enum V1AccountTypeDto {
  tutor = 'Tutor',
  student = 'Student',
}
export type V1RegisterDto = {
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  accountType?: V1AccountTypeDto;
};
export type V1ExternalRegisterDto = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  accountType?: AccountType;
};
export type LessonStatus =
  | 'Empty'
  | 'Booked'
  | 'Finished'
  | 'Deleted'
  | 'ExpiredEmpty'
  | 'ExpiredBooked';
export type LessonType = 'Online' | 'Offline';
export type V1TutorEducationDto = {
  id?: string | null;
  value?: string | null;
};
export type V1TutorInfoDto = {
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  rating?: number;
  job?: string | null;
  educations?: V1TutorEducationDto[] | null;
};
export type V1StudentInfoDto = {
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
};
export type V1LessonDto = {
  id?: string | null;
  price?: number;
  status?: LessonStatus;
  type?: LessonType;
  start?: string;
  end?: string;
  tutor?: V1TutorInfoDto;
  student?: V1StudentInfoDto;
};
export type V1CreateLessonDto = {
  start?: string;
  end?: string;
  price?: number;
  type?: LessonType;
};
export type V1LocationDto = {
  id?: string | null;
  city?: string | null;
  district?: string | null;
};
export type V1StudentEducationDto = {
  id?: string | null;
  value?: string | null;
  grade?: number;
};
export type V1ContactTypeDto = 'Phone' | 'Email' | 'Telegram';
export type V1StudentContactDto = {
  id?: string | null;
  type?: V1ContactTypeDto;
  value?: string | null;
};
export type V1StudentDto = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  age?: number;
  description?: string | null;
  education?: V1StudentEducationDto;
  contacts?: V1StudentContactDto[] | null;
};
export type V1StudentDtoV1PageDto = {
  items?: V1StudentDto[] | null;
  totalCount?: number;
  hasPrevious?: boolean;
  hasNext?: boolean;
};
export type V1UpdateStudentDto = {
  firstName?: string | null;
  lastName?: string | null;
  age?: number;
  description?: string | null;
  education?: V1StudentEducationDto;
  contacts?: V1StudentContactDto[] | null;
};
export type V1SubjectDto = {
  id?: string | null;
  description?: string | null;
};
export type V1AwardDto = {
  id?: string | null;
  value?: string | null;
};
export type V1RequirementDto = {
  id?: string | null;
  value?: string | null;
};
export type V1TutorContactDto = {
  id?: string | null;
  type?: V1ContactTypeDto;
  value?: string | null;
};
export type V1TutorDto = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  age?: number;
  rating?: number;
  location?: V1LocationDto;
  job?: string | null;
  description?: string | null;
  educations?: V1TutorEducationDto[] | null;
  awards?: V1AwardDto[] | null;
  requirements?: V1RequirementDto[] | null;
  subjects?: V1SubjectDto[] | null;
  contacts?: V1TutorContactDto[] | null;
};
export type V1TutorDtoV1PageDto = {
  items?: V1TutorDto[] | null;
  totalCount?: number;
  hasPrevious?: boolean;
  hasNext?: boolean;
};
export type V1UpdateTutorDto = {
  firstName?: string | null;
  lastName?: string | null;
  age?: number;
  location?: V1LocationDto;
  job?: string | null;
  description?: string | null;
  educations?: V1TutorEducationDto[] | null;
  awards?: V1AwardDto[] | null;
  requirements?: V1RequirementDto[] | null;
  subjects?: V1SubjectDto[] | null;
  contacts?: V1TutorContactDto[] | null;
};
export type V1ReviewDto = {
  id?: string | null;
  rating?: number;
  description?: string | null;
  student?: string | null;
  updatedAt?: string;
};
export type V1ReviewDtoV1PageDto = {
  items?: V1ReviewDto[] | null;
  totalCount?: number;
  hasPrevious?: boolean;
  hasNext?: boolean;
};
export type V1CreateReviewDto = {
  rating?: number;
  description?: string | null;
};
