import mock, { createPaginatedResponse } from './_share';
import student from '../fixtures/student.json';

mock
  .onGet('api/v1/students')
  .reply(() => [200, createPaginatedResponse(student, 7)])

  .onGet(new RegExp('api/v1/students/([A-Za-z0-9-]+)/?$'))
  .reply((cfg) => [
    200,
    { ...student, id: cfg.url?.match('api/v1/students/([A-Za-z0-9-]+)/?$')[1] },
  ]);

export default mock;
