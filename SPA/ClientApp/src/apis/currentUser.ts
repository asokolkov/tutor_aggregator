import axiosInstance from './_share';

export interface User {
  isAuthorized: boolean;
  id?: string;
  name?: string;
  surname?: string;
  avatar?: string;
  type?: string;
}

export default class UserAPI {
  static async getCurrentUser(): Promise<User> {
    try {
      const response = await axiosInstance.get<User>('/v1/me');
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
