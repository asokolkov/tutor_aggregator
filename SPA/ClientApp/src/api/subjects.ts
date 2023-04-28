import axiosInstance from './_share';

export interface Subject {
  id: string;
  description: string;
}

export default class SubjectsAPI {
  static async getSubjects(): Promise<Subject[]> {
    const response = await axiosInstance.get<Subject[]>('api/v1/subjects');
    return response.data;
  }
}
