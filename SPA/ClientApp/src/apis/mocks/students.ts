import mock, { createPaginatedResponse } from './_share';
import student from '../fixtures/student.json';

mock
  .onGet('v1/students')
  .reply(() => [200, createPaginatedResponse(student, 7)])

  .onGet(new RegExp('v1/students/*'))
  .reply((cfg) => [200, { ...student, id: cfg.url?.split('/').at(-1) }]);

export default mock;
