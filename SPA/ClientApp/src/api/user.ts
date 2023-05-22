import axiosInstance from './_share';
import { V1LoginDto, V1RegisterDto, V1UserDto } from './models';

export default class UserAPI {
  static async getCurrentUser(signal?: AbortSignal): Promise<V1UserDto> {
    const response = await axiosInstance.get<V1UserDto>(
      'api/v1/users/current',
      {
        signal,
      }
    );
    return response.data;
  }

  static async login(loginDto: V1LoginDto): Promise<V1UserDto> {
    const response = await axiosInstance.post('account/signin', loginDto);
    return response.data;
  }

  static async register(registerDto: V1RegisterDto): Promise<V1UserDto> {
    const response = await axiosInstance.post('account/signup', registerDto);
    return response.data;
  }

  static async signOut() {
    await axiosInstance.get('account/sign-out');
  }
}
