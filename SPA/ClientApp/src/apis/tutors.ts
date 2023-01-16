import axiosInstance, {
  Award,
  Contact,
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
  contacts: Contact[];
  educations: Education[];
  awards: Award[];
  lessons: Lesson[];
  requirements: string;
  rating: number;
}

export interface TutorList extends PaginatedResponse<Tutor> {}

class TutorsAPI {
  static async getAllTutors(page = 0, size = 30): Promise<TutorList> {
    const response = await axiosInstance.get('v1/tutors', {
      params: {
        page: page,
        size: size,
      },
    });
    return response.data as TutorList;
  }

  static async getTutorById(id: string): Promise<Tutor> {
    const response = await axiosInstance.get(`v1/tutors/${id}`);
    return response.data as Tutor;
  }
}

export default TutorsAPI;
