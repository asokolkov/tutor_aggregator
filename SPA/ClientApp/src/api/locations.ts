import axiosInstance from './_share';
import { V1LocationDto } from './models';

export default class LocationAPI {
  static async getLocations(): Promise<V1LocationDto[]> {
    const response = await axiosInstance.get<V1LocationDto[]>(
      '/api/v1/locations'
    );
    return response.data;
  }
}
