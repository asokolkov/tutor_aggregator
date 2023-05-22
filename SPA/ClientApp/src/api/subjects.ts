import axiosInstance from './_share';
import { V1SubjectDto } from './models';

export default class SubjectsAPI {
  static async getSubjects(): Promise<V1SubjectDto[]> {
    const response = await axiosInstance.get<V1SubjectDto[]>('api/v1/subjects');
    return response.data;
  }
}
