import axiosInstance, {
  Award,
  Education,
  PaginatedResponse,
  Person,
  Requirements,
  Subject,
} from './_share';
import { Location } from './locations';

export interface Tutor extends Person {
  rating: number;
  location: Location;
  job: string;
  educations: Education[];
  awards: Award[];
  requirements: Requirements[];
  subjects: Subject[];
}

export interface TutorList extends PaginatedResponse<Tutor> {}

export interface Review {
  id: string;
  rating: number;
  description: string;
  updatedAt: string;
  student: string;
}

export interface ReviewList extends PaginatedResponse<Review> {}

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
  ): Promise<TutorList> {
    const response = await axiosInstance.get<TutorList>('/api/v1/tutors', {
      params: {
        page,
        size,
        ...searchParams,
      },
    });
    return response.data;
  }

  static async getTutorById(id: string): Promise<Tutor> {
    const response = await axiosInstance.get<Tutor>(`/api/v1/tutors/${id}`);
    return response.data;
  }

  static async getReviewsByTutorId(
    tutorId: string,
    page: number = 0,
    size: number = 30
  ): Promise<ReviewList> {
    const response = await axiosInstance.get<ReviewList>(
      `/api/v1/tutors/${tutorId}/reviews`,
      {
        params: { page, size },
      }
    );
    return response.data;
  }

  static async getCurrentProfileInfo(): Promise<Tutor> {
    const response = await axiosInstance.get<Tutor>('/api/v1/tutors/profile');
    return response.data;
  }

  static async putCurrentProfileValues(tutor: Tutor) {
    await axiosInstance.put('api/v1/tutors', { ...tutor });
  }
}

export default TutorsAPI;
