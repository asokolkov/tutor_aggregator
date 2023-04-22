import axiosInstance, { PaginatedResponse } from './_share';

export interface Location {
  id: string;
  city: string;
  district: string;
}

export interface LocationList extends PaginatedResponse<Location> {}

export default class LocationAPI {
  static async getLocations(): Promise<LocationList> {
    const response = await axiosInstance.get<LocationList>(
      '/api/v1/locations',
      {
        // TODO: remove after PPU_FIIT_AR-65
        params: { page: 0, size: 5 },
      }
    );
    return response.data;
  }
}
