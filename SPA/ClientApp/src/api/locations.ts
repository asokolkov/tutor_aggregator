import axiosInstance from './_share';

export interface Location {
  id: string;
  city: string;
  district: string;
}

export default class LocationAPI {
  static async getLocations(): Promise<Location[]> {
    const response = await axiosInstance.get<Location[]>('/api/v1/locations');
    return response.data;
  }
}
