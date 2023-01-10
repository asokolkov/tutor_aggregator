import axiosInstance, { PaginatedResponse } from './_share';

export interface Review {
  id: string;
  rating: number;
  description: string;
  updatedAt: Date;
  studentId: string;
  studentAvatar: string;
}

export interface ReviewList extends PaginatedResponse<Review> {}

export default class ReviewAPI {
  static async getReviewsByTutorId(
    tutorId: string,
    page: number = 0,
    size: number = 30
  ): Promise<ReviewList> {
    const response = await axiosInstance.get(`/api/v1/tutors/${tutorId}/reviews`, {
      params: { page, size },
    });
    return response.data as ReviewList;
  }
}
