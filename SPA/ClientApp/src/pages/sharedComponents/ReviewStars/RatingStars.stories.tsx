import { withRouter } from 'storybook-addon-react-router-v6';
import { RatingStars } from './RatingStars';

export default {
  component: RatingStars,
  decorators: [withRouter],
};

export const Default = {
  args: {
    rating: 3,
  },
};
