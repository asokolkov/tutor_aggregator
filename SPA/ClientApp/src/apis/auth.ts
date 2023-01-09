import axiosInstance from './_share';

export default class AuthAPI {
    static async login(
        page: number = 0,
        size: number = 30
    ): Promise<LocationList> {
        const response = await axiosInstance.get('/v1/locations', {
            params: { page, size },
        });
        return response.data as LocationList;
    }

    static async loginViaExternal(provider: string, returnUrl: string): Promise<Location> {
        const response = await axiosInstance.get(`/account/`);
        return response.data as Location;
    }
}
