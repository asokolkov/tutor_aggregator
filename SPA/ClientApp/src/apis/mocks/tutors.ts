import tutor from '../fixtures/tutor.json';
import mock, { createPaginatedResponse } from './_share';
mock

  .onGet('v1/tutors')
  .reply(() => [200, createPaginatedResponse(tutor, 7)])

  .onGet(new RegExp('v1/tutors/*'))
  .reply((cfg) => [200, { ...tutor, id: cfg.url?.split('/').at(-1) }]);

export default mock;
