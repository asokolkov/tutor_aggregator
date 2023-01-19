import mock, { createPaginatedResponse } from './_share';
import review from '../fixtures/review.json';

mock
  .onGet(new RegExp('api/v1/tutors/([A-Za-z0-9-]+)/reviews$'))
  .reply(() => [200, createPaginatedResponse({ ...review }, 7)]);

export default mock;
