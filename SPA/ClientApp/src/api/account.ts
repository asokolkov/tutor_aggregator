import axiosInstance from './_share';
import { AccountType } from './currentUser';

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
  static async login(loginDto: V1LoginDto) {
    await axiosInstance.post('account/signin', loginDto);
  }

  static async register(registerDto: V1RegisterDto) {
    await axiosInstance.post('account/signup', registerDto);
  }

  static async signOut() {
    await axiosInstance.get('account/sign-out');
  }

  static async loginViaExternal(
    provider: string,
    returnUrl: string
  ): Promise<undefined> {
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
    return undefined;
  }

  static async registerViaExternal(
    registerViaExternalDto: V1RegisterViaExternalDto
  ): Promise<undefined> {
    await axiosInstance.post(
      `/account/signup-external`,
      registerViaExternalDto
    );
    return undefined;
  }
}
