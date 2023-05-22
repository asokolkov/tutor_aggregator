import axiosInstance from './_share';
import { LessonType, V1LessonDto } from './models';

export default class LessonsAPI {
  static async getTutorLessons(tutorId: string, date: Date) {
    const response = await axiosInstance.get<V1LessonDto[]>(
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
    await axiosInstance.patch(`api/v1/lessons/${lessonId}/delete`);
  }

  static async bookLesson(lessonId: string) {
    await axiosInstance.patch(`api/v1/lessons/${lessonId}/book`);
  }

  static async cancelLesson(lessonId: string) {
    await axiosInstance.patch(`/api/v1/lessons/${lessonId}/cancel`);
  }
}
