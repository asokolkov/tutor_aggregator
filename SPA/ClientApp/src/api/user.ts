import axiosInstance from './_share';

export type V1LoginDto = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type V1RegisterDto = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  accountType: AccountType;
};

export type V1RegisterViaExternalDto = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  accountType: AccountType;
};

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
  static async getCurrentUser(signal?: AbortSignal): Promise<User> {
    const response = await axiosInstance.get<User>('api/v1/users/current', {
      signal,
    });
    return response.data;
  }

  static async login(loginDto: V1LoginDto) {
    await axiosInstance.post('account/signin', loginDto);
  }

  static async register(registerDto: V1RegisterDto) {
    await axiosInstance.post('account/signup', registerDto);
  }

  static async signOut() {
    await axiosInstance.get('account/sign-out');
  }
}
