import SearchCard from './SearchCard';
import { Tutor } from '../../../api/tutors';

export default {
  component: SearchCard,
};

const mockTutor: Tutor = {
  avatar: '',
  awards: [],
  contacts: [],
  description: '',
  educations: [],
  firstName: '',
  id: '',
  job: '',
  lastName: '',
  location: undefined,
  rating: 0,
  requirements: [],
  subjects: [],
};
export const Default = {
  args: {
    tutor: mockTutor,
  },
};
