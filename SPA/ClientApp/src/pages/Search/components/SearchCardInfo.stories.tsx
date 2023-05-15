import SearchCardInfo from './SearchCardInfo';
import { Tutor } from '../../../api/tutors';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  component: SearchCardInfo,
  decorators: [withRouter],
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
