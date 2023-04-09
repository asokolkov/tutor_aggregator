import axiosInstance from './_share';

export interface Lesson {
  id: string;
  price: number;
  status: LessonStatus;
  type: LessonType;
  start: string;
  end: string;
  tutor: Person;
  student: Person;
}

export enum LessonStatus {
  Canceled,
  Held,
  Scheduled,
}

export enum LessonType {
  Online,
  Offline,
}

interface Person {
  id: string;
  firstName: string;
  lastName: string;
}

export default class LessonsAPI {
  static async getTutorLessons(tutorId: string) {
    const response = await axiosInstance.get<Lesson[]>(
      `/api/v1/tutors/${tutorId}/lessons`
    );
    return response.data;
  }
}
