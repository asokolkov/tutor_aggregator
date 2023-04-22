import axiosInstance from './_share';

export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  accountType: AccountType;
}

export enum AccountType {
  Tutor = 'Tutor',
  Student = 'Student',
}

export default class UserAPI {
  static async getCurrentUser(): Promise<User> {
    const response = await axiosInstance.get<User>('api/v1/users/current');
    return response.data;
  }
}
