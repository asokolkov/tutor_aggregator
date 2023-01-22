import axiosInstance, {
  Award,
  Education,
  Job,
  Lesson,
  PaginatedResponse,
  Person,
  Subject,
} from './_share';
import { Location } from './locations';

export interface Tutor extends Person {
  location: Location;
  job: Job;
  subjects: Subject[];
  contacts: string;
  educations: Education[];
  awards: Award[];
  lessons: Lesson[];
  requirements: string;
  rating: number;
}

export interface TutorList extends PaginatedResponse<Tutor> {}

export interface Review {
  id: string;
  rating: number;
  description: string;
  updatedAt: Date;
  studentId: string;
  studentName: string;
  studentAvatar: string;
}

export interface ReviewList extends PaginatedResponse<Review> {}

class TutorsAPI {
  static async getAllTutors(page = 0, size = 30): Promise<TutorList> {
    const response = await axiosInstance.get<TutorList>('/api/v1/tutors', {
      params: {
        page: page,
        size: size,
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
}

export default TutorsAPI;
