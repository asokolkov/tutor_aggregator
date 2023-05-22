import {
  V1ReviewDtoV1PageDto,
  V1TutorDto,
  V1TutorDtoV1PageDto,
} from './models';
import axiosInstance from './_share';

export interface TutorSearchParams {
  subject: string;
  city: string;
  district: string;
  maxPrice: number;
  rating: number;
}

class TutorsAPI {
  static async getAllTutors(
    searchParams: TutorSearchParams = {
      city: null,
      district: null,
      maxPrice: -1,
      rating: -1,
      subject: null,
    },
    page = 1,
    size = 30
  ): Promise<V1TutorDtoV1PageDto> {
    const response = await axiosInstance.get<V1TutorDtoV1PageDto>(
      '/api/v1/tutors',
      {
        params: {
          page,
          size,
          ...searchParams,
        },
      }
    );
    return response.data;
  }

  static async getTutorById(id: string): Promise<V1TutorDto> {
    const response = await axiosInstance.get<V1TutorDto>(
      `/api/v1/tutors/${id}`
    );
    return response.data;
  }

  static async getReviewsByTutorId(
    tutorId: string,
    page: number = 0,
    size: number = 30
  ): Promise<V1ReviewDtoV1PageDto> {
    const response = await axiosInstance.get<V1ReviewDtoV1PageDto>(
      `/api/v1/tutors/${tutorId}/reviews`,
      {
        params: { page, size },
      }
    );
    return response.data;
  }

  static async addReview(tutorId: string, rating: number, description: string) {
    await axiosInstance.post(`/api/v1/tutors/${tutorId}/reviews`, {
      params: { rating, description },
    });
  }

  static async getCurrentProfileInfo(): Promise<V1TutorDto> {
    const response = await axiosInstance.get<V1TutorDto>(
      '/api/v1/tutors/profile'
    );
    return response.data;
  }

  static async putCurrentProfileValues(tutor: V1TutorDto) {
    await axiosInstance.put('api/v1/tutors', { ...tutor });
  }
}

export default TutorsAPI;
