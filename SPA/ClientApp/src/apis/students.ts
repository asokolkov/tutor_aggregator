import axiosInstance, { PaginatedResponse, Person } from './_share';

export interface Student extends Person {}

export interface StudentList extends PaginatedResponse<Student> {}

export default class StudentAPI {
  static async getStudents(
    page: number = 0,
    size: number = 30
  ): Promise<StudentList> {
    const response = await axiosInstance.get<StudentList>('/api/v1/students', {
      params: { page, size },
    });
    return response.data;
  }

  static async getStudentById(id: string): Promise<Student> {
    const response = await axiosInstance.get<Student>(`/api/v1/students/${id}`);
    return response.data;
  }

  static async getCurrentProfileInfo(): Promise<Student> {
    const response = await axiosInstance.get<Student>(
      'api/v1/students/profile'
    );
    return response.data;
  }
}
