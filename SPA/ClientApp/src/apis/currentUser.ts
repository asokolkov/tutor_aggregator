import axiosInstance from './_share';

export interface User {
  isAuthorized: boolean;
  id?: string;
  name?: string;
  surname?: string;
  avatar?: string;
  type?: AccountType;
}

export enum AccountType {
  Tutor = 'Tutor',
  Student = 'Student',
}

export default class UserAPI {
  static async getCurrentUser(): Promise<User> {
    try {
      const response = await axiosInstance.get<User>('/v1/current');
      const authUser = response.data;
      authUser.isAuthorized = true;
      return authUser;
    } catch (err) {
      if (err.response.status !== 401) throw err;
      return new (class implements User {
        isAuthorized: false;
      })();
    }
  }
}
