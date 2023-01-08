import mock, { createPaginatedResponse } from './_share';
import review from '../fixtures/review.json';

mock
  .onGet(new RegExp('v1/tutors/*/reviews'))
  .reply(() => [200, createPaginatedResponse(review, 7)]);

export default mock;
