import mock, { createPaginatedResponse } from './_share';
import location from '../fixtures/location.json';

mock
  .onGet('v1/locations')
  .reply(() => [200, createPaginatedResponse(location, 7)])

  .onGet(new RegExp('api/v1/locations/([A-Za-z0-9-]+)/?$'))
  .reply((cfg) => [
    200,
    {
      ...location,
      id: cfg.url?.match('api/v1/locations/([A-Za-z0-9-]+)/?$')[1],
    },
  ]);

export default mock;
