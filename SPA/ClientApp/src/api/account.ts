import axiosInstance from './_share';
import { AccountType, User } from './user';

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

export default class AccountAPI {
  static async signIn(loginDto: V1LoginDto): Promise<User> {
    const response = await axiosInstance.post<User>('account/signin', loginDto);
    return response.data;
  }

  static async signUp(registerDto: V1RegisterDto): Promise<User> {
    const response = await axiosInstance.post<User>(
      'account/signup',
      registerDto
    );
    return response.data;
  }

  static async signOut() {
    await axiosInstance.get('account/sign-out');
  }

  static async loginViaExternal(provider: string, returnUrl: string) {
    await axiosInstance
      .get(`account/signin-external`, {
        params: { provider: provider, returnUrl: returnUrl },
      })
      .then((res) => {
        const {
          status,
          headers: { Location },
        } = res;
        if (status === 302) {
          window.location.href = Location;
        }
      });
  }

  static async registerViaExternal(
    registerViaExternalDto: V1RegisterViaExternalDto
  ) {
    await axiosInstance.post(
      `/account/signup-external`,
      registerViaExternalDto
    );
  }
}
