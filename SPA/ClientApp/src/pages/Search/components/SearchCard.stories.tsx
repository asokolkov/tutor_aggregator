import SearchCard from './SearchCard';
import { V1TutorDto } from '../../../api/models';

export default {
  component: SearchCard,
};

const mockTutor: V1TutorDto = {
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
