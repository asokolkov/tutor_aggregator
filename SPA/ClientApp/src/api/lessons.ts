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
  Empty = 'Empty',
  Booked = 'Booked',
  Finished = 'Finished',
  Deleted = 'Deleted',
  ExpiredEmpty = 'ExpiredEmpty',
  ExpiredBooked = 'ExpiredBooked',
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
  static async getTutorLessons(tutorId: string, date: Date) {
    const response = await axiosInstance.get<Lesson[]>(
      `/api/v1/tutors/${tutorId}/lessons`,
      {
        params: {
          date,
        },
      }
    );
    return response.data;
  }

  static async createNewSlot(
    start: Date,
    end: Date,
    price: number,
    type: LessonType
  ) {
    await axiosInstance.post('api/v1/lessons', {
      start,
      end,
      price,
      type,
    });
  }

  static async deleteLesson(lessonId: string) {
    await axiosInstance.post(`api/v1/lessons/${lessonId}/delete`);
  }

  static async bookLesson(lessonId: string) {
    await axiosInstance.post(`api/v1/lessons/${lessonId}/book`);
  }

  static async cancelLesson(lessonId: string) {
    await axiosInstance.get(
      `/api/v1/students/current/lessons/${lessonId}/cancel`
    );
  }
}
