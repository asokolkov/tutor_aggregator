import tutor from '../fixtures/tutor.json';
import mock, { createPaginatedResponse } from './_share';
import review from '../fixtures/review.json';
mock

  .onGet('api/v1/tutors')
  .reply(() => [200, createPaginatedResponse(tutor, 7)])

  .onGet(new RegExp('api/v1/tutors/([A-Za-z0-9-]+)/?$'))
  .reply((cfg) => [
    200,
    { ...tutor, id: cfg.url?.match('api/v1/tutors/([A-Za-z0-9-]+)/?$')[1] },
  ])

  .onGet(new RegExp('api/v1/tutors/([A-Za-z0-9-]+)/reviews$'))
  .reply(() => [200, createPaginatedResponse({ ...review }, 7)])

  .onGet('api/v1/tutors/profile')
  .reply(() => [200, tutor]);

export default mock;
