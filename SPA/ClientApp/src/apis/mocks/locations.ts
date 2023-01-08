import mock, { createPaginatedResponse } from './_share';
import location from '../fixtures/location.json';

mock
  .onGet('v1/locations')
  .reply(() => [200, createPaginatedResponse(location, 7)])

  .onGet(new RegExp('v1/locations/*'))
  .reply((cfg) => [200, { ...location, id: cfg.url?.split('/').at(-1) }]);

export default mock;
