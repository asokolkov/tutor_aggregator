import axiosInstance from './_share';
import { V1LessonDto, V1StudentDto, V1StudentDtoV1PageDto } from './models';

export default class StudentAPI {
  static async getStudents(
    page: number = 0,
    size: number = 30
  ): Promise<V1StudentDtoV1PageDto> {
    const response = await axiosInstance.get<V1StudentDtoV1PageDto>(
      '/api/v1/students',
      {
        params: { page, size },
      }
    );
    return response.data;
  }

  static async getStudentById(id: string): Promise<V1StudentDto> {
    const response = await axiosInstance.get<V1StudentDto>(
      `/api/v1/students/${id}`
    );
    return response.data;
  }

  static async getCurrentProfileInfo(): Promise<V1StudentDto> {
    const response = await axiosInstance.get<V1StudentDto>(
      'api/v1/students/profile'
    );
    return response.data;
  }

  static async putCurrentProfileValues(student: V1StudentDto) {
    await axiosInstance.put('api/v1/students', { ...student });
  }

  static async getAllStudentLessons(): Promise<V1LessonDto[]> {
    const response = await axiosInstance.get<V1LessonDto[]>(
      'api/v1/students/current/lessons'
    );
    return response.data;
  }
}
